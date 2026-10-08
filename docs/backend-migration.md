# Backend migration: frontend

Status: draft · Last updated: 2026-10-08

Frontend part of the backend migration plan. The overview (goals, architecture, phases, decisions log) lives in the API repo (`gear-optimizer-api`) at `docs/overview.md`; cross-repo decisions are recorded only there.

## Data fetching

- Add **TanStack Query** for data fetching and caching. Wrap the generated client in hooks (`useSeasons`, `useSeasonItems(code)`).
- Replace `GEAR_STORE`, `globals/seasons.ts`, `globals/lootSources.ts` and `globals/specs.ts` with API data. `OptimiserFilterContextProvider` keeps its filtering logic but gets items from the query.
- **Cold-start UX:** first-time visitors see a "waking up the server…" state, with retry and backoff.
  - Watch out: Netlify's proxy has a request timeout of roughly 26–30 s, and Render cold starts can run longer. The client should retry once on a 502/504.

## Data freshness (expiration policy)

The goal: a visitor sees newly published data within about a minute, without refetching ~50 KB of items on every visit or focus.

**`data_version` drives freshness, not timers.** Every publish bumps `data_version` (API repo `docs/data-model.md` (publishing)). The frontend asks only for that small number often, and refetches the big payloads only when it changes:

1. `GET /api/meta` → `{ dataVersion, currentSeason }`. Tiny response. On the CDN, `s-maxage=60` plus a purge on publish, so it's fresh within seconds of a publish and never wakes the API for most visitors.
   - TanStack options: `staleTime: 60_000`, `refetchOnWindowFocus: true`, `refetchInterval: 5 * 60_000` (only while the tab is visible).
2. Game-data queries include the version in their key: `['seasonItems', seasonCode, dataVersion]`.
   - Within one version, data is immutable, so `staleTime: Infinity`. No pointless refetches.
   - When `dataVersion` changes, the key changes. TanStack fetches the new data automatically and garbage-collects the old entry.
   - Frozen seasons: same key scheme, but their responses are immutable on the CDN too.
3. **Persisted cache** (`@tanstack/query-sync-storage-persister` → `localStorage`):
   - `maxAge: 7 days`: anything older is discarded at startup instead of shown.
   - `buster: <app build hash>`: a frontend deploy that changes data shapes invalidates the old cache.
   - Persist **only public game-data queries** (`shouldDehydrateQuery` filter). User data (`/me`, wishlists, characters) is **never written to localStorage**, so it isn't left behind on a shared computer.
4. **What a returning visitor experiences:** cached items render instantly → `meta` is checked in the background → if the version is unchanged, nothing else happens; if it changed, the new items load and the UI updates (optionally with a small "Data updated" toast).
5. **User data** (wishlists etc.): normal TanStack defaults (`staleTime` of ~30 s, refetch on focus), plus explicit invalidation after the user's own mutations.

Worst case: a visitor sees data up to ~1 minute old after a publish (the `meta` CDN TTL plus `staleTime`). Lower both numbers if that matters.

If you'd rather not add TanStack Query, the same scheme works with a small hand-written hook. But TanStack gives you persistence, retries, focus refetching and mutation invalidation (needed for wishlists) without writing them yourself.

## Other changes

- `public/_redirects` order matters:
  ```
  /api/*  https://<your-api>.onrender.com/api/:splat  200
  /*      /index.html                                  200
  ```
- **Admin panel:** a lazy-loaded `/admin` route in the same app (MUI is already there, and the free MUI X DataGrid is enough), visible only for `EDITOR`/`ADMIN`. The server enforces permissions; hiding the UI is cosmetic.
  - **Import upload screen:** pick an import file → the API validates it (errors shown by JSON path) → diff view (new / changed field-by-field / removed sources) → publish or discard. Format and flow: API repo `docs/data-import.md`.
  - Later, optionally: a "Blizzard import" screen (enter journal instance IDs, then watch the job's progress) that ends in the same diff view.
- Delete the GitHub Pages workflow and the `gh-pages` branch (old built bundles), and fix the README link.
- **Staging:** Netlify deploy previews and a `staging` branch deploy talk to a staging API: a second free Render service plus its own Neon branch. `_redirects` can't read environment variables, so generate it at build time from an `API_ORIGIN` variable set per Netlify deploy context.

## Security (frontend part)

The full checklist is in the API repo, `docs/security.md`. Frontend-specific items:

- Security headers in `public/_headers`: a strict **CSP**, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors 'none'`. Check them with Mozilla HTTP Observatory and Google CSP Evaluator.
- Ban `dangerouslySetInnerHTML` with an ESLint rule.
- Never persist user data (`/me`, wishlists, characters) to `localStorage` (see freshness above).
- No secrets in the bundle: everything shipped to the browser is public.
- Dependabot, `npm audit`, gitleaks and Semgrep in CI, same as the API repo.

## Public repository

This repo is public. The full rules (what counts as a secret, commit identities, CI on public repos, required files) are in the API repo, `docs/overview.md` → *Public repositories*. Frontend-specific points:

- **`VITE_*` variables are compiled into the bundle and visible to everyone.** They may only hold public values, such as the ImageKit URL endpoint or an analytics site ID. Never put API secrets, the ImageKit private key, or Netlify build hook or purge tokens there.
- `.env` and `.env.local` are gitignored; commit a `.env.example` with placeholder values.
- The generated API client and `openapi.json` are fine to commit, since the API repo is public too.
- No scraping code, scraped dumps or notes about pre-release data sources. Those live in the private scraper repo.
- Test fixtures and MSW mocks use public game data and fake users only.
- Cleanup before or right after going public:
  - Run a full-history gitleaks scan. A quick pattern search of the source history found nothing beyond the standard `secrets.GITHUB_TOKEN` reference.
  - Switch to noreply commit emails (the history contains personal addresses).
  - Delete the `gh-pages` branch and old merged branches.
  - Add `SECURITY.md`, `CONTRIBUTING.md` and a PR template. (`LICENSE` and the README notices are done.)
- **App footer** (AGPL + Blizzard):
  - a short disclaimer: "Unofficial community project. Not affiliated with or endorsed by Blizzard Entertainment. World of Warcraft and related content © Blizzard Entertainment, Inc.";
  - a **Source code** link to the public repositories, which satisfies AGPL section 13 for the deployed app;
  - a link to the privacy policy once accounts exist.

## Testing

| Layer | Tool | What to test |
| --- | --- | --- |
| Static | `tsc`, ESLint (already set up) | Including regenerated API types. |
| Unit / component | **Vitest + React Testing Library** | Filter logic in `OptimiserFilterContextProvider` (spec → armor/weapon/stat filtering is the core value of the app), item table rendering, wishlist toggles, the freshness logic (version change → refetch). |
| API mocking | **MSW** (Mock Service Worker) with handlers typed from the generated client | The same mocks serve tests and local dev without a backend. |
| End-to-end | **Playwright**, a few critical flows | Browse a season and filter by spec. Log in (a test-only OAuth stub on staging), create a wishlist, reload, it's still there. Editor publishes a change set and the public page shows it. Runs against the Netlify deploy preview + staging API. |
| Accessibility (cheap bonus) | `@axe-core/playwright` in the e2e run | Catches obvious a11y regressions. |

CI gates shared by all repos: API repo, `docs/testing.md`.
