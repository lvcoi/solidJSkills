---
name: solid-component-builder
description: Create or improve SolidJS components with explicit reactivity choices, component boundaries, props contracts, and acceptance checklists. Use when implementing new SolidJS UI components, feature slices, or reusable library pieces.
---

# solid-component-builder

## Workflow

1. Confirm requirements, UX behavior, and state/data inputs.
2. Choose Solid primitives (`createSignal`, `createMemo`, `createResource`, control-flow components) intentionally.
3. Produce a component implementation plan before patching.
4. Validate output against `../../references/solidjs/reactivity-core.md` and `../../references/solidjs/component-patterns.md`.
5. Return a concise acceptance checklist with correctness, accessibility, and performance notes.

## Usage Example

**Example prompt that triggers this skill:**

> "Build a SolidJS search input component with debounced query signal"

**Expected output format:**

1. **Component code** with:
   - Clear reactivity primitive choices (e.g., `createSignal` for input value, `createMemo` for debounced query)
   - Proper control flow components (`<Show>`, `<For>`, etc.) where applicable
   - Type annotations (if TypeScript)
   - Accessibility attributes (aria-labels, roles)

2. **Acceptance checklist:**
   - [ ] Signal updates trigger debounced effect correctly
   - [ ] Component cleans up effect on unmount
   - [ ] Input is keyboard-accessible
   - [ ] Loading states are handled
   - [ ] Edge cases (empty input, special characters) are tested

**Note:** This is an **agent-facing skill definition**, not a standalone script. It guides an AI agent through the process of generating SolidJS component code.
