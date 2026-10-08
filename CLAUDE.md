# gear-optimiser

React 19 + Vite + MUI frontend ("Where is my loot!?"), deployed on Netlify. Item icons are served from ImageKit. **This repository is public.**

## Backend migration

Game data is moving from bundled files (`src/store/`, `src/globals/`) to a NestJS API (`gear-optimizer-api` repo, also public).

- Frontend part of the plan: `docs/backend-migration.md` (data fetching and freshness, admin panel, staging, frontend security, public-repo rules, tests).
- Overview, phases, the full public-repo rules and the decisions log live in the API repo at `docs/overview.md`. Record cross-repo decisions there, not here.

## Rules that are easy to miss

- Public repo: never commit secrets, hook URLs, `.env` files or real user data. `VITE_*` variables end up in the bundle, so they may only hold public values.
- Scraping code and notes about pre-release data sources belong in the private scraper repo, not here.
- Never persist user data (account, wishlists, characters) to `localStorage`; only public game data may be persisted.
- No `dangerouslySetInnerHTML`, and no secrets in the bundle: everything shipped to the browser is public.
- API types come from the generated client (built from the API's committed `openapi.json`); don't hand-write API types.
