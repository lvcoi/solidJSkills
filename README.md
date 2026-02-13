# solidJSkills

A SolidJS-first repository for **agent-ready skills, tools, guides, and standards** used to build, refactor, review, scaffold, and bootstrap SolidJS codebases.

## What is solidJSkills?

This repository provides a collection of structured workflows (skills) and reference materials specifically designed for AI coding agents (like GitHub Copilot or Gemini CLI) to assist with SolidJS development. Rather than traditional libraries or frameworks, solidJSkills offers **agent-consumable documentation and workflows** that ensure high-quality, idiomatic SolidJS code.

### Mission

Provide a practical, reusable operating system for SolidJS engineering work:

1. Build consistent, high-quality SolidJS components.
2. Refactor safely with reactivity correctness and performance in mind.
3. Review code against SolidJS-specific quality gates.
4. Scaffold and bootstrap new SolidJS projects with predictable defaults.
5. Keep an agent-facing workflow (`SKILL.md`) aligned with real SolidJS practices.

## Prerequisites

- **Node.js** (v18 or higher) - Required only if using the MCP server (Options 1 or 2 below)
- **Gemini CLI** or compatible AI agent that supports MCP (Model Context Protocol)
- Basic understanding of SolidJS (for developers using the skills)

## Installation

### Option 1: Use as Gemini Extension (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lvcoi/solidJSkills.git
   cd solidJSkills
   ```

2. **Install MCP server dependencies** (from the repository root):
   ```bash
   cd mcp-server
   npm install
   cd ..
   ```

3. **Install the Gemini extension** (from the repository root):
   ```bash
   gemini extension install ./gemini-extension.json
   ```

   This registers the `solidjskills` extension with your Gemini CLI, making the documentation tools available.

### Option 2: Use MCP Server Standalone

1. **Clone and install**:
   ```bash
   git clone https://github.com/lvcoi/solidJSkills.git
   cd solidJSkills/mcp-server
   npm install
   ```

2. **Run the MCP server**:
   ```bash
   npm start
   ```

3. **Configure your AI agent** to connect to the MCP server at the stdio interface.

### Option 3: Direct Repository Access

Simply clone the repository and point your AI coding agent to the relevant skill directories:

```bash
git clone https://github.com/lvcoi/solidJSkills.git
```

Then reference specific skill paths (e.g., `skills/solid-component-builder/SKILL.md`) in your agent context.

## Quick Start

### For AI Agent Users (Gemini CLI)

Once installed as a Gemini extension, you can query the documentation:

```bash
# List available documentation
gemini "Use list_docs to show me what's available"

# Search for specific topics
gemini "Use search_docs to find information about reactivity"

# Read a specific skill
gemini "Use read_doc to show me skills/solid-component-builder/SKILL.md"
```

### For Developers Integrating Skills

When working on SolidJS code with an AI agent:

1. **Building a new component**:
   - Reference `skills/solid-component-builder/SKILL.md`
   - Agent will follow the workflow to create production-ready components

2. **Refactoring existing code**:
   - Reference `skills/solid-refactor-assistant/SKILL.md`
   - Agent will provide safe transformation plans

3. **Code review**:
   - Reference `skills/solid-reviewer/SKILL.md`
   - Agent will check against SolidJS best practices

4. **Starting a new project**:
   - Reference `skills/solid-scaffold-bootstrap/SKILL.md`
   - Agent will set up project structure with proper tooling

5. **Architectural decisions**:
   - Reference `skills/solid-design-patterns/SKILL.md`
   - Agent will help choose appropriate patterns

### Example Workflow

```bash
# 1. Start Gemini with the solidJSkills extension
gemini extension enable solidjskills

# 2. Ask for component creation with SolidJS expertise
gemini "Create a data table component using the solid-component-builder skill. 
       I need sortable columns, pagination, and loading states."

# 3. The agent will use the skill workflow to:
#    - Confirm requirements
#    - Choose appropriate Solid primitives
#    - Generate implementation plan
#    - Provide acceptance checklist
```

## Repository Structure

- **Core blueprint**: `guides/solidjs-v1-blueprint.md`
- **Agent standards**: `AGENTS.md`
- **Shared SolidJS reference pack**: `references/solidjs/`
- **SolidJS skills**:
  - `skills/solid-component-builder/`
  - `skills/solid-refactor-assistant/`
  - `skills/solid-reviewer/`
  - `skills/solid-scaffold-bootstrap/`
  - `skills/solid-design-patterns/`
- **MCP Server**: `mcp-server/` - Node.js server for documentation browsing
- **Extension config**: `gemini-extension.json` - Gemini CLI integration

## Skill Map

| Skill | Primary Outcome | Use Cases | Key References |
|---|---|---|---|
| `solid-component-builder` | Generate production-ready components | New UI components, feature modules, stateful UI flows | `reactivity-core.md`, `component-patterns.md` |
| `solid-refactor-assistant` | Reduce risk during structural changes | Prop/API rewrites, signal/store migrations, decomposition | `reactivity-core.md`, `performance-ssr.md` |
| `solid-reviewer` | Enforce SolidJS quality standards | PR reviews, architecture sanity checks, performance audits | `review-checklist.md`, all references |
| `solid-scaffold-bootstrap` | Start projects and feature slices consistently | New app setup, package conventions, baseline tooling | Project templates, tooling configs |
| `solid-design-patterns` | Choose architecture patterns intentionally | State/data layer decisions, rendering strategy, composition | `stores-context.md`, `async-data.md` |

## How It Works: Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Developer with AI Agent                   │
│              (GitHub Copilot, Gemini CLI, etc.)             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ Accesses skills & references via
                         │ MCP Protocol or direct file access
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    solidJSkills Repository                   │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Skills/    │  │  References/ │  │    Guides/   │      │
│  │  SKILL.md    │  │   solidjs/   │  │   Blueprints │      │
│  │  workflows   │  │  knowledge   │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         MCP Server (Optional)                         │  │
│  │  - list_docs: Discover available documentation       │  │
│  │  - search_docs: Find content by keyword              │  │
│  │  - read_doc: Retrieve full document content          │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ Agent applies workflow
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Your SolidJS Project                       │
│          (Components, Apps, Libraries being built)           │
└─────────────────────────────────────────────────────────────┘
```

### Workflow:
1. **Developer** asks AI agent to perform SolidJS task
2. **Agent** references appropriate skill from solidJSkills
3. **Skill** provides structured workflow + references
4. **Agent** follows workflow to generate/review/refactor code
5. **Output** is high-quality, idiomatic SolidJS code

## Dependencies

### MCP Server
- `@modelcontextprotocol/sdk` (^1.17.3) - MCP protocol implementation
- `zod` (^3.23.8) - Schema validation
- Node.js v18+ runtime

### No Application Dependencies
This repository contains **documentation and workflows only**. It does not require installation into your SolidJS project. Your AI agent reads the skills and applies them during development.

## Directory Pattern

```text
skills/<skill-name>/
├── SKILL.md          # Structured workflow with steps and acceptance criteria
├── references/       # Skill-specific knowledge and examples
├── scripts/          # (optional) Automation helpers
└── assets/           # (optional) Diagrams, templates
```

## Who This Is For

- **SolidJS product teams** shipping app features rapidly with AI-assisted development
- **Design system maintainers** building reusable component libraries
- **Teams using agent-assisted workflows** for implementation and review
- **AI coding agents** (GitHub Copilot, Gemini CLI, Claude, etc.) that need SolidJS expertise

## Usage with Different AI Agents

### GitHub Copilot
Add workspace instructions pointing to specific skills:
```
// .github/copilot-instructions.md
When building SolidJS components, follow the workflow in:
skills/solid-component-builder/SKILL.md
```

### Gemini CLI (with MCP)
```bash
gemini extension install ./gemini-extension.json
gemini "Build a SolidJS counter component with the solid-component-builder skill"
```

### Claude or Other Agents
Include skill files in your context:
```
Please follow the workflow in skills/solid-component-builder/SKILL.md 
to create a new SolidJS form component.
```

## Configuration

### Environment Variables (Optional)

For the MCP server, you can configure:

- **No environment variables required** - The server runs with default settings
- **Custom extension path** - Automatically resolved from `gemini-extension.json`

### Gemini Extension Configuration

The `gemini-extension.json` file configures the extension:

```json
{
  "name": "solidjskills",
  "version": "1.1.0",
  "description": "Browse solidJSkills docs from Gemini CLI via MCP tools.",
  "contextFileName": "GEMINI.md",
  "mcpServers": {
    "solidjskills-docs": {
      "command": "node",
      "args": ["${extensionPath}${/}mcp-server${/}src${/}index.js"],
      "cwd": "${extensionPath}"
    }
  }
}
```

## Advanced Usage

### Creating Custom Skills

Want to add your own SolidJS skill? Follow this pattern:

1. Create a directory: `skills/your-skill-name/`
2. Add a `SKILL.md` with:
   - Frontmatter (name, description, trigger conditions)
   - Numbered workflow steps
   - Acceptance checklist
   - References to relevant docs
3. Add skill-specific references in `references/` subfolder
4. Update `tools/gemini-mcp-extension/skill-routing-map.md` if using Gemini

See `guides/skill-creation-guide.md` for details.

**Note**: File paths in this documentation use forward slashes for cross-platform compatibility.

### Integrating with CI/CD

You can use the reviewer skill in automated workflows:

```yaml
# .github/workflows/solidjs-review.yml
- name: SolidJS Code Review
  run: |
    # Use agent to review PR changes against solid-reviewer skill
    gemini "Review this PR using skills/solid-reviewer/SKILL.md"
```

## Troubleshooting

### MCP Server Issues

**Server won't start**:
```bash
cd mcp-server
npm install  # Ensure dependencies are installed
node --check src/index.js  # Validate syntax
npm start
```

**Gemini extension not found**:
```bash
gemini extension list  # Check if installed
gemini extension install ./gemini-extension.json  # Reinstall
```

### Common Questions

**Q: Do I need to install this in my SolidJS project?**  
A: No. This repository is for AI agents to reference. It doesn't need to be a dependency of your project.

**Q: Can I use this without Gemini CLI?**  
A: Yes. Any AI agent can read the skill markdown files directly. The MCP server is optional.

**Q: How do I update to the latest skills?**  
A: Simply `git pull` the repository. If using as a Gemini extension, reinstall: `gemini extension install ./gemini-extension.json`

**Q: Can I use this with TypeScript/JavaScript projects?**  
A: The skills are SolidJS-specific, but the skill creation patterns in `guides/` can be adapted for other frameworks.

## Contributing

Contributions are welcome! See the repository issues for areas where help is needed. When contributing:

1. Follow the patterns in `AGENTS.md` for repository standards
2. SolidJS skills should reference materials in `references/solidjs/`
3. Keep skills concise and deterministic
4. Test with actual AI agents (GitHub Copilot, Gemini, etc.)

## Related Resources

- [SolidJS Documentation](https://www.solidjs.com/)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
- [Gemini CLI](https://ai.google.dev/gemini-api/docs/cli)
- [Agent Skill Authoring Guide](guides/skill-creation-guide.md)

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

## Note on Legacy Content

Some legacy generic skill-authoring guides remain in `guides/` and older starter skills in `skills/`. They can be retained for meta-work, but SolidJS-first materials are the default direction for this repo.

---

## Gemini MCP / Extension Alignment

A SolidJS-aligned Gemini MCP extension blueprint is available at: `tools/gemini-mcp-extension/`

Use it to keep intent routing, system instructions, and quality gates synchronized with the SolidJS skill set.

For more details, see [tools/gemini-mcp-extension/README.md](tools/gemini-mcp-extension/README.md).
