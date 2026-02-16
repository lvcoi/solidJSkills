# solidjskills MCP Server

MCP server for browsing skills and querying the normalized SolidJS corpus.

## Tools

- `list_docs`: List repository docs under allowed roots
- `read_doc`: Read one repository doc by relative path
- `search_docs`: Search repository doc paths
- `list_corpus_docs`: List normalized corpus entries with stable metadata
- `read_corpus_doc`: Read normalized/raw corpus doc by `doc_id`
- `search_corpus`: Ranked corpus metadata search
- `resolve_solid_api`: API symbol lookup across manifest entries

## Development

```bash
npm install
npm test
npm start
```
