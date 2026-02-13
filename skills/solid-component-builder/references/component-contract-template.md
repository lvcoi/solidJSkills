# Component Contract Template

Use this schema to document component API:

| Prop | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | `string` | yes/no | value or `n/a` | concise behavior note |

Event callback notation:
- `onAction?: (payload: PayloadType) => void`
- Document when callback fires and payload shape.

Children contract:
- Specify if `children` is required, optional, or ignored.
- Specify expected semantic container.
