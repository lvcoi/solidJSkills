# solidjs-normalized corpus

Generated, normalized SolidJS documentation for deterministic skill retrieval.

## Files

- `docs/` normalized markdown by sanitized path.
- `manifest.jsonl` document metadata and `doc_id` mapping.
- `taxonomy.json` package/topic and API-symbol index.

## Source of truth

- Raw source remains in `solidJSdocs/`.
- Regenerate with `node tools/scripts/normalize-solid-docs.mjs`.
- Validate with `node tools/scripts/validate-solid-corpus.mjs`.
