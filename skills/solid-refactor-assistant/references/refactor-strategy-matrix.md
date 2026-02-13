# Refactor Strategy Matrix

| Goal | Primary Tactic | Safety Constraint |
|---|---|---|
| Reduce file size | Extract child components/hooks | Keep external API unchanged |
| Clarify state flow | Move state closer to consumer | Preserve event timing |
| Remove duplication | Consolidate utility functions | Maintain type signatures |
| Improve naming | Rename in small batches | Verify all call sites |
