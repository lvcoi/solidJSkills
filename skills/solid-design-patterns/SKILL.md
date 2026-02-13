---
name: solid-design-patterns
description: Recommend SolidJS architecture and design patterns with explicit tradeoffs and anti-pattern warnings. Use when selecting component composition, state ownership, async data flow, or SSR/hydration strategies in SolidJS systems.
---

# solid-design-patterns

## Workflow

1. Frame the architecture decision and constraints.
2. Compare 2-3 viable patterns with tradeoffs.
3. Call out anti-patterns and migration risks.
4. Cross-check with `../../references/solidjs/stores-context.md` and `../../references/solidjs/async-data.md`.
5. Return a recommendation and a lightweight adoption plan.

## Usage Example

**Example prompt that triggers this skill:**

> "Should I use context or stores for shared auth state in my SolidJS app?"

**Expected output format:**

1. **Pattern comparison table:**

   | Pattern | Best For | Tradeoffs | Complexity |
   |---------|----------|-----------|------------|
   | **Context** | Local/scoped state within component tree | ✅ Type-safe, tree-scoped<br>❌ Requires provider wrapper | Low |
   | **Global Store** | App-wide state needed across routes | ✅ No provider needed<br>❌ Global namespace, harder testing | Medium |
   | **createResource** | Auth state driven by API calls | ✅ Built-in loading/error<br>❌ More boilerplate for simple cases | Medium |

2. **Recommendation:**

   **Use Context for auth state** because:
   - Auth is tree-scoped (only needed in authenticated sections)
   - Type safety prevents prop drilling errors
   - Easy to test by mounting with mock providers
   - Aligns with SolidJS composition patterns

3. **Anti-patterns to avoid:**
   - ❌ Don't use a global store if auth state is only needed in part of the app tree
   - ❌ Don't prop-drill auth through 5+ component levels
   - ❌ Don't store auth tokens in localStorage without encryption

4. **Adoption plan:**
   ```typescript
   // Step 1: Create auth context
   const AuthContext = createContext<AuthState>();
   
   // Step 2: Provide at app root (or route level)
   <AuthContext.Provider value={authState}>
     <App />
   </AuthContext.Provider>
   
   // Step 3: Consume in child components
   const auth = useContext(AuthContext);
   ```

5. **Migration considerations:**
   - If already using stores, migrate incrementally by route
   - Wrap existing store access in context for gradual refactor

**Reference docs:**
- State ownership patterns: `references/solidjs/stores-context.md`
- Async auth flows: `references/solidjs/async-data.md`

**Note:** This is an **agent-facing skill definition** that provides architecture recommendations with explicit tradeoffs for SolidJS design decisions.
