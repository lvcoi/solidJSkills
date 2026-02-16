#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import readline from 'node:readline';

const repoRoot = process.cwd();
const templatesDir = path.join(repoRoot, 'tools', 'templates');
const skillsDir = path.join(repoRoot, 'skills');
const templatePath = path.join(templatesDir, 'SKILL.template.md');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

function toTitleCase(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

async function run() {
    try {
        // 1. Check template existence
        try {
            await fs.access(templatePath);
        } catch {
            console.error(`Template not found at: ${templatePath}`);
            process.exit(1);
        }

        // 2. Prompt for Name
        let skillName = '';
        while (!skillName) {
            skillName = (await question('Enter skill name (kebab-case, e.g. solid-router-setup): ')).trim();
            if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(skillName)) {
                console.error('Invalid name. Must be kebab-case (lowercase, hyphens).');
                skillName = '';
            }
        }

        // 3. Check if skill exists
        const skillPath = path.join(skillsDir, skillName);
        try {
            await fs.access(skillPath);
            console.error(`Skill "${skillName}" already exists at ${skillPath}`);
            process.exit(1);
        } catch {
            // It doesn't exist, proceed
        }

        // 4. Prompt for Description
        const description = (await question('Enter skill description (short summary): ')).trim() || 'TODO: Add description';

        rl.close();

        // 5. Create directory
        await fs.mkdir(skillPath, { recursive: true });
        console.log(`Created directory: ${skillPath}`);

        // 6. Read and process template
        const templateContent = await fs.readFile(templatePath, 'utf8');
        const skillTitle = toTitleCase(skillName);

        const newContent = templateContent
            .replace(/<skill-name>/g, skillName)
            .replace(/<Skill Title>/g, skillTitle)
            .replace(/<what the skill does \+ when to use it>/g, description)
            // Keep other placeholders for the user to fill
            ;

        // 7. Write SKILL.md
        const targetFile = path.join(skillPath, 'SKILL.md');
        await fs.writeFile(targetFile, newContent, 'utf8');
        console.log(`Created SKILL.md: ${targetFile}`);

        console.log('\nSkill scaffolded successfully! Next steps:');
        console.log(`1. Open ${path.relative(repoRoot, targetFile)}`);
        console.log('2. Fill in <output-schema>, <output-format>, and other placeholders.');
        console.log('3. Implement the logic.');
        console.log(`4. Run validation: npm run validate:skills -- --skill ${skillName}`);

    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
}

run();
