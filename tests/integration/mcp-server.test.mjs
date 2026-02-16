#!/usr/bin/env node
/**
 * MCP Server Integration Tests
 *
 * Spawns the MCP server as a child process, sends JSON-RPC tool calls
 * over newline-delimited JSON (MCP stdio protocol), and validates responses.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

function sendJsonRpc(proc, method, params, id) {
    const msg = JSON.stringify({ jsonrpc: '2.0', method, ...(params !== undefined ? { params } : {}), ...(id !== undefined ? { id } : {}) });
    proc.stdin.write(msg + '\n');
}

function waitForResponse(proc, expectedId, timeoutMs = 10000) {
    return new Promise((resolve, reject) => {
        let buffer = '';
        const timer = setTimeout(() => {
            cleanup();
            reject(new Error(`Timeout waiting for response id=${expectedId}, buffer: ${buffer.slice(0, 200)}`));
        }, timeoutMs);

        function onData(chunk) {
            buffer += chunk.toString();
            const lines = buffer.split('\n');
            buffer = lines.pop(); // keep incomplete last line
            for (const line of lines) {
                if (!line.trim()) continue;
                try {
                    const parsed = JSON.parse(line);
                    if (parsed.id === expectedId) {
                        cleanup();
                        resolve(parsed);
                        return;
                    }
                } catch {
                    // skip non-JSON lines
                }
            }
        }

        function cleanup() {
            clearTimeout(timer);
            proc.stdout.removeListener('data', onData);
        }

        proc.stdout.on('data', onData);
    });
}

async function runTests() {
    const errors = [];
    let reqId = 1;

    // Spawn MCP server
    const serverProc = spawn('node', ['src/index.js'], {
        cwd: path.join(repoRoot, 'mcp-server'),
        stdio: ['pipe', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'test' }
    });

    let stderrOutput = '';
    serverProc.stderr.on('data', (chunk) => { stderrOutput += chunk.toString(); });

    // Give server a moment to start
    await new Promise((r) => setTimeout(r, 300));

    try {
        // 1. Initialize
        const initId = reqId++;
        sendJsonRpc(serverProc, 'initialize', {
            protocolVersion: '2024-11-05',
            capabilities: {},
            clientInfo: { name: 'integration-test', version: '1.0.0' }
        }, initId);
        const initResp = await waitForResponse(serverProc, initId);
        if (!initResp.result?.serverInfo?.name) {
            errors.push('Initialize: missing serverInfo.name');
        }

        // Send initialized notification (no id = notification)
        sendJsonRpc(serverProc, 'notifications/initialized', {});
        await new Promise((r) => setTimeout(r, 200));

        // 2. List tools
        const listToolsId = reqId++;
        sendJsonRpc(serverProc, 'tools/list', {}, listToolsId);
        const toolsResp = await waitForResponse(serverProc, listToolsId);
        const toolNames = (toolsResp.result?.tools || []).map((t) => t.name);
        const required = ['list_docs', 'read_doc', 'search_docs', 'list_corpus_docs', 'read_corpus_doc', 'search_corpus', 'resolve_solid_api'];
        for (const name of required) {
            if (!toolNames.includes(name)) {
                errors.push(`tools/list: missing tool '${name}'`);
            }
        }

        // 3. Call list_corpus_docs
        const listCorpusId = reqId++;
        sendJsonRpc(serverProc, 'tools/call', {
            name: 'list_corpus_docs',
            arguments: { limit: 5 }
        }, listCorpusId);
        const listCorpusResp = await waitForResponse(serverProc, listCorpusId);
        const listCorpusText = listCorpusResp.result?.content?.[0]?.text || '';
        let listCorpusParsed;
        try {
            listCorpusParsed = JSON.parse(listCorpusText);
        } catch {
            errors.push('list_corpus_docs: could not parse response as JSON');
            listCorpusParsed = [];
        }
        if (!Array.isArray(listCorpusParsed) || listCorpusParsed.length === 0) {
            errors.push('list_corpus_docs: expected non-empty array');
        } else if (!listCorpusParsed[0].doc_id) {
            errors.push('list_corpus_docs: entries missing doc_id field');
        }

        // 4. Call read_corpus_doc
        const sampleDocId = listCorpusParsed?.[0]?.doc_id;
        if (sampleDocId) {
            const readCorpusId = reqId++;
            sendJsonRpc(serverProc, 'tools/call', {
                name: 'read_corpus_doc',
                arguments: { doc_id: sampleDocId }
            }, readCorpusId);
            const readCorpusResp = await waitForResponse(serverProc, readCorpusId);
            const readCorpusText = readCorpusResp.result?.content?.[0]?.text || '';
            if (readCorpusText.length < 50) {
                errors.push(`read_corpus_doc: response too short for '${sampleDocId}'`);
            }
        }

        // 5. Call search_corpus
        const searchId = reqId++;
        sendJsonRpc(serverProc, 'tools/call', {
            name: 'search_corpus',
            arguments: { query: 'createSignal', limit: 5 }
        }, searchId);
        const searchResp = await waitForResponse(serverProc, searchId);
        const searchParsed = JSON.parse(searchResp.result?.content?.[0]?.text || '[]');
        if (!Array.isArray(searchParsed) || searchParsed.length === 0) {
            errors.push('search_corpus: no results for "createSignal"');
        } else if (!searchParsed.some((r) => r.doc_id?.includes('create-signal'))) {
            errors.push('search_corpus: "createSignal" did not return create-signal doc');
        }

        // 6. Call resolve_solid_api
        const resolveId = reqId++;
        sendJsonRpc(serverProc, 'tools/call', {
            name: 'resolve_solid_api',
            arguments: { symbol: 'useNavigate', limit: 5 }
        }, resolveId);
        const resolveResp = await waitForResponse(serverProc, resolveId);
        const resolveParsed = JSON.parse(resolveResp.result?.content?.[0]?.text || '[]');
        if (!Array.isArray(resolveParsed) || resolveParsed.length === 0) {
            errors.push('resolve_solid_api: no results for "useNavigate"');
        } else if (!resolveParsed.some((r) => r.doc_id?.includes('use-navigate'))) {
            errors.push('resolve_solid_api: "useNavigate" did not return use-navigate doc');
        }

        // 7. Call list_docs
        const listDocsId = reqId++;
        sendJsonRpc(serverProc, 'tools/call', {
            name: 'list_docs',
            arguments: { directory: 'skills' }
        }, listDocsId);
        const listDocsResp = await waitForResponse(serverProc, listDocsId);
        const listDocsText = listDocsResp.result?.content?.[0]?.text || '';
        if (!listDocsText.includes('SKILL.md') && !listDocsText.includes('solid-')) {
            errors.push('list_docs: expected skill content in result');
        }

    } finally {
        serverProc.kill('SIGTERM');
        await new Promise((r) => setTimeout(r, 200));
    }

    if (errors.length > 0) {
        console.error('MCP integration tests failed:');
        for (const err of errors) console.error(`  - ${err}`);
        if (stderrOutput.trim()) console.error(`\nServer stderr:\n${stderrOutput.slice(0, 500)}`);
        process.exitCode = 1;
        return;
    }

    console.log('MCP integration tests passed (7 checks).');
}

runTests().catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
});
