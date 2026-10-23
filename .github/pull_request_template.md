## What and why

<!-- What does this change, and why? Link the issue if there is one. -->

## Abuse check

<!-- New user input shown on the page, new data stored in the browser, or a new third-party origin? What could go wrong, and what stops it? Write "n/a" otherwise. -->

## Checklist

- [ ] Tests added or updated
- [ ] Docs updated (`docs/`, README)
- [ ] `openapi.json` matches the API's and the client is regenerated, if the API changed
- [ ] API types come from the generated client, not written by hand
- [ ] No secrets in `VITE_*` variables or anywhere in the bundle
- [ ] No user data in `localStorage`, no `dangerouslySetInnerHTML`
- [ ] New third-party origins added to the Content Security Policy
- [ ] No secrets, hook URLs, `.env` files or real user data committed
- [ ] Decisions log in the API repo's `docs/overview.md` updated if a cross-repo decision changed
