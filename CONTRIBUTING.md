# Contributing

Thanks for helping. Read [docs/backend-migration.md](docs/backend-migration.md) first, then the API repo's [docs/overview.md](https://github.com/Amy-di-Aricci/gear-optimizer-api/blob/main/docs/overview.md): together they cover the architecture, the phases and the rules for this public repository.

## License of contributions

By contributing you agree that your contribution is licensed under the project's license, **AGPL-3.0-only** (inbound = outbound). You keep the copyright on your own code.

## Workflow

1. Branch from `main` (`feature/…`, `fix/…`, `docs/…`).
2. Keep commits focused, with an imperative subject line ("Add season selector").
3. Open a pull request into `main` and fill in the template. CI must pass before merging; `main` is protected.
4. `main` deploys to staging. Production deploys from the `deploy` branch, which only receives release pull requests from `main` ([release flow](https://github.com/Amy-di-Aricci/gear-optimizer-api/blob/main/docs/environments.md#release-flow)).
5. Use your GitHub **noreply** email for commits (`git config user.email <id>+<user>@users.noreply.github.com`).

## Before you push

```bash
npm run format      # not set up yet
npm run lint
npm run typecheck   # not set up yet; `npm run build` type-checks for now
npm test            # not set up yet (Vitest + React Testing Library)
npm run test:e2e    # not set up yet (Playwright)
npm run build
```

If the API changed: copy its `openapi.json` to the repo root, run `npm run gen:api` (not set up yet) and commit both. CI fails while our `openapi.json` differs from the API's on the same branch.

## Rules that are easy to miss

- **Never commit secrets** (API secrets, the ImageKit private key, build tokens, deploy/build hook URLs), `.env` files or real user data. If a secret is pushed, rotate it immediately; rewriting history doesn't help.
- **`VITE_*` variables end up in the bundle** and are visible to everyone. They may only hold public values, such as the ImageKit URL endpoint.
- **Never persist user data** (account, wishlists, characters) to `localStorage`; only public game data may be persisted.
- **No `dangerouslySetInnerHTML`.**
- **Don't hand-write API types.** They come from the client generated from `openapi.json`.
- A new third-party origin (script, style, image or data) also needs an entry in the Content Security Policy.
- Scraping code and notes about pre-release data sources don't belong here.
- Test fixtures and mocks use public game data and fake users only.
- Issues and PRs in English.

See the API repo's [docs/security.md](https://github.com/Amy-di-Aricci/gear-optimizer-api/blob/main/docs/security.md) and [docs/testing.md](https://github.com/Amy-di-Aricci/gear-optimizer-api/blob/main/docs/testing.md) for the full checklists, and [docs/backend-migration.md](docs/backend-migration.md) for the frontend-specific parts.
