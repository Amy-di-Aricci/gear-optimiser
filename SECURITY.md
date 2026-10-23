# Security policy

## Reporting a vulnerability

Please **don't open a public issue** for security problems.

Report them privately through GitHub: on this repository, open the **Security** tab and choose **Report a vulnerability**. Include the steps to reproduce and the impact you expect.

You'll get an answer within a week. This is a small volunteer project, so there is no bug bounty, but we'll credit you in the fix if you'd like.

## Scope

- This frontend (`gear-optimiser`) and the API ([gear-optimizer-api](https://github.com/Amy-di-Aricci/gear-optimizer-api)).
- Typical frontend issues: cross-site scripting, a weak or bypassable Content Security Policy, secrets or personal data in the shipped bundle, user data left in browser storage.
- Out of scope: Blizzard's services, Wowhead's tooltip script, and the hosting providers (Netlify, ImageKit, Render, Neon). Report problems with those to the provider.

Please test only against your own local setup, never against the live site or other people's accounts.
