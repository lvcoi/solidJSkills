---
name: solid-scaffold-bootstrap
description: Scaffold and bootstrap SolidJS projects or feature modules with consistent structure, tooling defaults, and extension points. Use when starting new SolidJS apps, packages, or major feature slices that need predictable setup.
---

# solid-scaffold-bootstrap

## Workflow

1. Confirm target project type and constraints.
2. Produce a minimal production-realistic folder/module layout.
3. Define baseline conventions for routing, state, data loading, and testing.
4. Validate decisions with `../../references/solidjs/component-patterns.md` and `../../references/solidjs/performance-ssr.md`.
5. Return setup steps and a post-bootstrap checklist.

## Usage Example

**Example prompt that triggers this skill:**

> "Bootstrap a new SolidJS app with routing, stores, and TypeScript"

**Expected output format:**

1. **Folder structure:**
   ```
   my-solid-app/
   ├── src/
   │   ├── components/       # Reusable UI components
   │   ├── pages/            # Route-level components
   │   ├── stores/           # Global state stores
   │   ├── utils/            # Helper functions
   │   ├── App.tsx           # Root component with router
   │   └── index.tsx         # Entry point
   ├── public/               # Static assets
   ├── tsconfig.json         # TypeScript config
   ├── vite.config.ts        # Vite bundler config
   └── package.json
   ```

2. **Setup steps:**
   ```bash
   # Step 1: Create project
   npm create vite@latest my-solid-app -- --template solid-ts
   
   # Step 2: Add routing
   cd my-solid-app
   npm install @solidjs/router
   
   # Step 3: Add store library (optional)
   npm install solid-js
   
   # Step 4: Start dev server
   npm run dev
   ```

3. **Post-bootstrap checklist:**
   - [ ] TypeScript compilation passes (`npm run build`)
   - [ ] Dev server starts successfully (`npm run dev`)
   - [ ] Routing navigates between pages
   - [ ] Store reactivity works as expected
   - [ ] Linting rules configured (if applicable)
   - [ ] Basic test setup complete (if tests included)

**Note:** This is an **agent-facing skill definition** that guides consistent project scaffolding for SolidJS applications.
