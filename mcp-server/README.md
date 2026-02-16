# solidjskills MCP server

MCP server for browsing skills and querying the normalized SolidJS corpus.

## Tools

- `list_docs`: list repository docs under allowed roots.
- `read_doc`: read one repository doc by relative path.
- `search_docs`: search repository doc paths.
- `list_corpus_docs`: list normalized corpus entries with stable metadata.
- `read_corpus_doc`: read normalized/raw corpus doc by `doc_id`.
- `search_corpus`: ranked corpus metadata search.
- `resolve_solid_api`: API symbol lookup across manifest entries.

## Development

```bash
npm install
npm test
npm start
```
