# Safety Rules

Constraints on how work is carried out. These apply to every change.

## Never without being asked

- **Do not start, stop, restart or kill the dev server.** The owner runs it.
- **Do not kill, close or restart the terminal.**
- **Do not install, upgrade or remove packages.** If something appears to be
  missing, say so and stop.
- **Do not commit or push.** Stage nothing. The owner reviews and commits.
- **Do not read or print values from `.env` files.** Referring to a variable by
  name is fine; printing its value is not.
- **Do not use browser automation** — no Playwright, Puppeteer, Cypress,
  Selenium or browser-control tools.

## Deleting files

Deletion is the one irreversible act in this repo. Always:

1. Grep for every reference to the file
2. Remove or repoint those references first
3. Re-grep and confirm zero remain
4. Show the owner the list and the zero-reference proof
5. Only then delete

Never delete a file you did not create without confirming first. If what you
find inside contradicts how it was described, stop and say so.

## Order of operations

Clear references before deleting the thing they point at, so the build never
passes through a broken state. Type-check between structural steps rather than
only at the end.

## When you are missing a fact

Ask. Do not infer a phone number, an address, a date, a certification, a
supplier, or a product detail from surrounding context or from what is
plausible for a company of this kind. A wrong fact on a live medical supply
site is worse than an unanswered question.

## Reporting

Report outcomes as they actually are. If a check fails, show the output. If you
skipped a step, say which. If something is done and verified, say so plainly
without hedging. Never describe work as complete when a verification step has
not run.
