# solidJSkills Extension Context

This extension provides **SolidJS-focused documentation tools** for the solidJSkills repository, enabling AI agents to access curated skills, guides, and reference materials for building, refactoring, reviewing, and scaffolding SolidJS applications.

## What This Extension Provides

- **SolidJS Skills** — Agent-ready workflows for component building, refactoring, code review, scaffolding, and architecture decisions
- **Reference Documentation** — Core SolidJS patterns, reactivity primitives, control flow, stores, async data handling, and performance best practices
- **Guides** — How-to documentation for skill creation, system prompting, and workflow design
- **Templates** — Reusable scaffolding templates for SolidJS projects

## Available Skills

| Skill | When to Use |
|-------|-------------|
| `solid-component-builder` | Creating new SolidJS UI components with explicit reactivity choices |
| `solid-refactor-assistant` | Planning and executing safe refactors of existing SolidJS code |
| `solid-reviewer` | Reviewing SolidJS code against reactivity correctness and quality standards |
| `solid-scaffold-bootstrap` | Bootstrapping new SolidJS projects with consistent defaults |
| `solid-design-patterns` | Choosing architecture patterns for state management and composition |

## Tool Usage

### list_docs
Discover all available documentation files.

**Example prompt:** "What documentation is available in solidJSkills?"

**Use when:**
- Starting a new task and need to understand what resources exist
- Looking for a specific type of document but don't know the exact path
- Want an overview of all skills, guides, or templates

### search_docs
Search for documentation by topic or keyword.

**Example prompt:** "Find all docs related to reactivity in SolidJS"

**Use when:**
- User asks for documentation about a specific topic (e.g., "reactivity", "stores", "SSR")
- Need to locate relevant reference materials for a task
- Looking for related content across multiple files

### read_doc
Retrieve the full contents of a specific document.

**Example prompt:** "Show me the solid-component-builder skill definition"

**Use when:**
- User requests a specific skill, guide, or reference file
- Need detailed instructions or examples from a particular document
- Following up after a search to read matching documents

## Safety Restrictions

All document reads are intentionally restricted to:

- `skills/` — Agent skill definitions
- `guides/` — Documentation and how-to guides
- `tools/templates/` — Reusable templates

Attempts to access files outside these directories will be rejected. This ensures the extension only exposes curated, agent-appropriate content.
