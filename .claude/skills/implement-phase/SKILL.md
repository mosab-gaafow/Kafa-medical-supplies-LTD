---
name: implement-phase
description: Execute a numbered phase from docs/ROADMAP.md in order, verifying at each step. Use when asked to implement a roadmap phase or continue planned scope work.
---

# Implement Phase

Work through a roadmap phase in the order written. The order is deliberate:
references are cleared before the things they point at are deleted, so the
build never passes through a broken state.

## Before starting

1. Read `docs/ROADMAP.md` for the phase steps and any decisions attached to it
2. Read `docs/PRODUCT_SCOPE.md` if the phase touches products or copy
3. Read `docs/TECH_STACK.md` before writing framework code — and the relevant
   guide in `node_modules/next/dist/docs/`
4. Take a baseline:

```bash
npx tsc --noEmit && npm run lint
```

Record pre-existing failures so you can separate them from yours later.

5. Check `git status`. If the tree has unrelated uncommitted work, note it and
   leave it alone — do not stash, reset or commit it.

## While working

- One step at a time, in order. Do not batch structural steps together
- Type-check after any step that moves, renames or deletes a file
- Before deleting anything, follow the deletion sequence in
  `.claude/rules/safety.md` — grep, clear, re-grep, show proof, then delete
- Stop at any step marked as needing owner confirmation
- If a step turns out to be wrong or impossible as written, stop and say so.
  Do not improvise a different approach and continue

## Scope discipline

Do only what the phase lists. If you notice something else worth fixing, note
it for the report or add it to the roadmap — do not fix it inline. Unrelated
changes make review harder and obscure the real diff.

## Finishing

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Then report:

- Files created, modified and deleted
- Steps completed, and any skipped with the reason
- Check results, including anything still failing
- Whatever now needs the owner — assets, decisions, confirmations

Update `docs/ROADMAP.md` to reflect the new state. Do not commit or push.
