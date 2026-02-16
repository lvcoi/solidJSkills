# solidjs-normalized corpus

Generated, normalized SolidJS documentation for deterministic skill retrieval.

## Files

- `docs/` normalized markdown by sanitized path.
- `manifest.jsonl` document metadata and `doc_id` mapping.
- `taxonomy.json` package/topic and API-symbol index.

## Source of truth

- **Normalized Docs**: `docs/` is the committed, usable documentation for agents.
- **Raw Source**: `solidJSdocs/` (optional, local-only).
- Regenerate with `node tools/scripts/normalize-solid-docs.mjs` (requires local `solidJSdocs/`).
- Validate with `node tools/scripts/validate-solid-corpus.mjs`.
