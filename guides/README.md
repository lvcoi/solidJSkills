# Guides Directory

This directory contains **documentation and how-to guides** for working with the solidJSkills repository. These guides help users understand the repository structure, create new skills, and work with agent-based workflows.

## Available Guides

| File | Purpose | Type |
|------|---------|------|
| **solidjs-v1-blueprint.md** | Core v1 repository blueprint and direction — overall vision, goals, and roadmap for the SolidJS-first repository | SolidJS-specific |
| **repo-structure-analysis.md** | Analysis of the repository structure — explains how directories, skills, and references are organized | Repository meta |
| **skill-creation-guide.md** | How to author new skills — step-by-step guide for creating agent-facing skill definitions | Repository meta |
| **rule-creation-guide.md** | How to create rules — guidance for defining validation rules and constraints | Legacy/meta |
| **system-prompting-guide.md** | Guide for writing system prompts — best practices for crafting effective system instructions | Legacy/meta |
| **tool-creation-guide.md** | How to create new tools — guidance for building MCP tools and extensions | Repository meta |
| **workflow-creation-guide.md** | How to create workflows — guide for designing agent-facing workflow definitions | Legacy/meta |

## Guide Categories

### SolidJS-Specific Guides

- **solidjs-v1-blueprint.md** — Focuses specifically on the SolidJS direction of this repository

These guides are aligned with the SolidJS-first mission defined in `/AGENTS.md`.

### Repository Meta Guides

- **repo-structure-analysis.md** — Explains the repository organization
- **skill-creation-guide.md** — How to create new SolidJS skills
- **tool-creation-guide.md** — How to extend the MCP server

These guides help contributors add new content to the repository.

### Legacy/Meta Guides

- **rule-creation-guide.md**
- **system-prompting-guide.md**
- **workflow-creation-guide.md**

These guides contain general agent-workflow patterns and are retained for reference. They may be useful for meta-work but are **not specific to SolidJS**. The SolidJS-first skills and references should be the default direction for new work.

## How to Use These Guides

### For Repository Contributors

1. **Start with `solidjs-v1-blueprint.md`** — Understand the repository's mission and goals
2. **Read `repo-structure-analysis.md`** — Learn how the repository is organized
3. **Use `skill-creation-guide.md`** — When adding a new SolidJS skill
4. **Reference legacy guides** — For general patterns, but adapt them to SolidJS-first principles

### For MCP Extension Users

These guides are accessible via the MCP server's `read_doc` tool:

```bash
# List all guides
list_docs

# Read a specific guide
read_doc({ path: "guides/solidjs-v1-blueprint.md" })

# Search for guides about skills
search_docs({ query: "skill" })
```

### For AI Agents

Agents can use the `search_docs` tool to discover relevant guides when users ask questions like:

- "How do I create a new skill?" → `skill-creation-guide.md`
- "What is the repository structure?" → `repo-structure-analysis.md`
- "What is the vision for this repository?" → `solidjs-v1-blueprint.md`

## Maintenance

When adding or updating guides:

1. **Classify correctly** — Is this SolidJS-specific, repository meta, or legacy?
2. **Update this README** — Add the new guide to the table above
3. **Link from skills** — If a skill references a guide, update the skill's SKILL.md
4. **Keep concise** — Guides should be practical and actionable, not theoretical
5. **Use examples** — Show concrete examples of what you're describing
