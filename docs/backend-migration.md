# Backend migration: frontend

Status: draft · Last updated: 2026-10-09

Frontend part of the backend migration plan. The overview (goals, architecture, phases, decisions log) lives in the API repo (`gear-optimizer-api`) at `docs/overview.md`; cross-repo decisions are recorded only there.

## Data fetching

Public game data comes from **static JSON files deployed with the site**, not from live API calls. The API builds them on every publish (API repo `docs/api.md`, public data delivery). Only the admin panel and, later, user features call the API.

- **Snapshot script:** `scripts/fetch-snapshot.ts` runs before `vite build`. It fetches the public endpoints from `API_ORIGIN` (a build-time Netlify variable, not `VITE_*`) and writes `public/data/meta.json`, `public/data/common.<hash>.json` and `public/data/seasons/<code>.<hash>.json`. Responses are typed with the generated API client; if a fetch fails or the data doesn't match the types, the build fails and the previous deploy stays live.
- **Local development:** `npm run dev` runs the same script against the local API (`localhost:3000`). Without a local API, it keeps the last snapshot it wrote, or the app falls back to the MSW mocks (see testing).
- Add **TanStack Query** for fetching and caching. Hooks: `useMeta()`, `useCommonData()`, `useSeasonItems(code)`.
- Replace `GEAR_STORE`, `globals/seasons.ts`, `globals/lootSources.ts` and `globals/specs.ts` with the snapshot. `OptimiserFilterContextProvider` keeps its filtering logic but gets items from the query.
- **Item shape stays the same.** Items have the shape of today's `gear-store.json` (`itemId`, `imgId`, `lootSource` as a dungeon code or `{ raid, bossName }`, …; API repo `docs/api.md`, item response shape), so `TWowItem` and the filters change little.
- **Weapon slots** (done, merged in PR #15): `EItemSlot.RANGED` became `TWOHAND`. `MAINHAND` holds one-handed weapons and wands, `TWOHAND` holds two-handed weapons including bows, crossbows and guns. The slot picker has a single weapon icon that shows both.
- **Images** stay on ImageKit (`VITE_IMAGEKIT_URL`, a public value). The snapshot only carries image keys.
- **Cold-start UX** applies only to API calls (admin panel, later user features): a "waking up the server…" state with retry and backoff. Netlify's proxy times out after roughly 26–30 s and a Render cold start can take longer, so retry once on a 502/504.

## Data freshness

The goal: a visitor sees newly published data within about a minute of the deploy finishing, without downloading season data again on every visit.

**Yes, a visitor's page checks for newer data on every load.** The check is cheap: it asks the CDN for the tiny `meta.json`, and the CDN usually answers "not modified" without sending it again. The API is never involved.

1. **`meta.json`** lists the file name of every data file, for example `"MNS2": "seasons/MNS2.3f9a1c.json"`.
   - TanStack options: `staleTime: 60_000`, `refetchOnWindowFocus: true`, `refetchInterval: 5 * 60_000` (only while the tab is visible).
2. **Data files are keyed by file name:** `['seasonItems', 'seasons/MNS2.3f9a1c.json']`, with `staleTime: Infinity`. A file name never changes contents, so a cached file is never fetched twice. When a publish changes MNS2, `meta.json` points to a new name, and TanStack fetches the new file. Other seasons, including frozen ones, keep their names and aren't fetched again.
3. **Persisted cache** (`@tanstack/query-sync-storage-persister` → `localStorage`):
   - `maxAge: 7 days`: anything older is discarded at startup instead of shown.
   - `buster: CACHE_SCHEMA_VERSION`: a constant bumped by hand when the data shape changes. (Not the build hash: every publish triggers a build, and that would throw away the whole cache each time.)
   - Persist **only public game data** (`shouldDehydrateQuery` filter). User data (`/me`, wishlists, characters) is **never written to localStorage**, so it isn't left behind on a shared computer.
4. **A data file that no longer exists:** a tab that stayed open across a publish may ask for an old file name that the new deploy doesn't contain. On a 404, refetch `meta.json` and retry with the new name.

What visitors experience:

- **First visit:** `meta.json`, `common.<hash>.json` and the selected season's file, all from the CDN. No server to wake up.
- **Returning visit:** cached data renders instantly → `meta.json` is checked in the background → if nothing changed, nothing else happens; if a file name changed, that file loads and the UI updates (optionally with a small "Data updated" toast).
- **User data** (phase 4): normal TanStack defaults (`staleTime` of ~30 s, refetch on focus), plus explicit invalidation after the user's own mutations.

## Other changes

- **API proxy:** `/api/*` is proxied to the stage's Render service. The rule must come before the SPA fallback:
  ```
  /api/*  https://<your-api>.onrender.com/api/:splat  200
  /*      /index.html                                  200
  ```
  The API only accepts requests signed by Netlify's **signed proxy redirects** (API repo `docs/security.md`, trusted proxy). Signed rules must be in `netlify.toml`, which can't read environment variables, and each site needs a different target. So a small local build plugin (`netlify/plugins/api-proxy/`) adds the `/api/*` rule in `onPreBuild` from the site's `API_ORIGIN`, with `signed = "API_SIGNATURE_TOKEN"` (a Runtime-scoped secret in each site's settings). Netlify applies `_redirects` before `netlify.toml` and the first matching rule wins, so `public/_redirects` is removed: the SPA fallback moves to `netlify.toml`, and the plugin inserts the `/api/*` rule **before** it. The phase 1 spike confirms this works.
- **Admin panel** (phase 3): a **separate site** with its own address, built from this repo, using MUI (the free MUI X DataGrid is enough).
  - **Code layout:** a second Vite app in `admin/` with its own `index.html` and entry point. It shares the generated API client, types and theme with the public app. `npm run build:admin` builds it. The public bundle contains no admin code, and the admin build doesn't run the snapshot script, since it reads everything from the API.
  - **Hosting:** its own Netlify site per stage (so four sites in total: public and admin, for staging and production). It has its own `/api/*` proxy to the same stage's API, with its own proxy signing secret.
  - **Separate sessions:** staff log in on the admin site. The session cookie belongs to the admin site's address, so public pages (and any script on them, such as Wowhead's) can't send it. The API also only accepts admin-site sessions on admin routes (API repo `docs/api.md`, sessions).
  - **No third-party scripts:** no Wowhead tooltips, no external fonts. The admin site's CSP allows only itself and ImageKit.
  - Users without the role see a 404 page. The real protection is the API, which answers 404 to every `/api/admin/*` call from them.
  - **Import upload screen:** pick an import file → the API validates it (errors shown by JSON path) → diff view (new / changed field-by-field / removed items; an item that's on users' wishlists is marked "on N wishlists" and its removal must be discarded before publishing; items whose icon is missing on ImageKit are flagged) → publish or discard.
  - **Conflict view:** if another change set was published since the draft was created, publishing returns per-entry conflicts. For each, show the draft's `before`, the current data and the draft's `after`; the editor keeps their change, drops it, or edits it, like resolving a git merge conflict. Rules: API repo `docs/data-model.md` (publishing). Format and flow: API repo `docs/data-import.md`.
  - **Snapshot status:** "live" or "rebuilding / behind", with a Rebuild button.
  - Editors edit all game data here (expansions, seasons, instances, raid bosses, items, classes and specs). Admins also manage user roles.
  - Later, optionally: a "Blizzard import" screen (enter journal instance IDs, then watch the job's progress) that ends in the same diff view.
- **Characters and wishlists** (phase 4): "Sync characters" goes through Battle.net login, then the character list shows only characters at the current expansion's max level. Syncing never creates wishlists: each character has a "New wishlist" action that pre-fills the current season, its active spec and a name, and a character can have several wishlists (raid, M+, PvP…). Users without Battle.net create wishlists without a character. Existing wishlists keep showing their character even after a level-cap increase.
- **Fonts:** self-host Roboto (e.g. `@fontsource/roboto`) instead of loading it from Google Fonts, so visitors' IP addresses aren't sent to Google.
- Delete the GitHub Pages workflow and the `gh-pages` branch (old built bundles), and fix the README link.
- **Staging:** **separate Netlify sites** (public and admin) that deploy the `staging` branch, with their own environment variables (`API_ORIGIN` pointing to the staging API), build hook and OAuth callback URLs. They share nothing with production except the code. Deploy previews also build against the staging API; login only works on the staging site itself, because OAuth redirect URIs must be registered in advance and preview URLs change.

## Security (frontend part)

The full checklist is in the API repo, `docs/security.md`. Frontend-specific items:

- Security headers in `public/_headers`: a strict **CSP**, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors 'none'`. Check them with Mozilla HTTP Observatory and Google CSP Evaluator.
  - **What a CSP is:** a list, sent with the page, of the places the browser may load scripts, styles, images, fonts and data from. If an attacker manages to inject a script tag pointing elsewhere, the browser refuses to run it.
  - Allowed origins for public pages: the site itself, ImageKit (images), `wow.zamimg.com` (tooltip script, styles and images) and `nether.wowhead.com` (tooltip data). Admin site: itself and ImageKit only.
- Ban `dangerouslySetInnerHTML` with an ESLint rule.
- Never persist user data (`/me`, wishlists, characters) to `localStorage` (see freshness above).
- No secrets in the bundle: everything shipped to the browser is public.
- Dependabot, `npm audit`, gitleaks and Semgrep in CI, same as the API repo.

## Public repository

This repo is public. The full rules (what counts as a secret, commit identities, CI on public repos, required files) are in the API repo, `docs/overview.md` → *Public repositories*. Frontend-specific points:

- **`VITE_*` variables are compiled into the bundle and visible to everyone.** They may only hold public values, such as the ImageKit URL endpoint or an analytics site ID. Never put API secrets, the ImageKit private key, the proxy signing secret or the Netlify build hook URL there.
- `.env` and `.env.local` are gitignored; commit a `.env.example` with placeholder values.
- The generated API client and `openapi.json` are fine to commit, since the API repo is public too. Don't commit `public/data/`: it's generated on every build.
- No scraping code, scraped dumps or notes about pre-release data sources. Those live in the private scraper repo.
- Test fixtures and MSW mocks use public game data and fake users only.
- Cleanup before or right after going public:
  - Run a full-history gitleaks scan. A quick pattern search of the source history found nothing beyond the standard `secrets.GITHUB_TOKEN` reference.
  - Switch to noreply commit emails (the history contains personal addresses).
  - Delete the `gh-pages` branch and old merged branches.
  - Add `SECURITY.md`, `CONTRIBUTING.md` and a PR template, based on the API repo's. (`LICENSE` and the README notices are done.)
  - Remove the leftover `.eslintrc.json` (the flat `eslint.config.js` is the one in use).
- **App footer** (AGPL + Blizzard):
  - a short disclaimer: "Unofficial community project. Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft and related content © Blizzard Entertainment, Inc.";
  - a **Source code** link to the public repositories, which satisfies AGPL section 13 for the deployed app;
  - a link to the privacy policy once accounts exist.

## Testing

| Layer | Tool | What to test |
| --- | --- | --- |
| Static | `tsc`, ESLint (already set up) | Including regenerated API types. |
| Unit / component | **Vitest + React Testing Library** | Filter logic in `OptimiserFilterContextProvider` (spec → armor/weapon/stat filtering is the core value of the app), item table rendering, wishlist toggles, the freshness logic (changed file name → refetch; 404 → refetch `meta.json`), the snapshot script (writes the expected files, fails on bad data). |
| API mocking | **MSW** (Mock Service Worker) with handlers typed from the generated client | The same mocks serve tests and local dev without a backend. |
| End-to-end | **Playwright**, a few critical flows | Browse a season and filter by spec. Editor publishes a change set and, after the rebuild, the public page shows it. Later: create a wishlist, reload, it's still there. Runs against the staging site. Login: CI inserts a fake test user and a session into the staging database and starts the browser with that session cookie, so the app needs no test-only login code. |
| Accessibility (cheap bonus) | `@axe-core/playwright` in the e2e run | Catches obvious a11y regressions. |

CI gates shared by all repos: API repo, `docs/testing.md`.
