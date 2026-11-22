# WiCare – accounts & services

Who owns what, and what is set up where. **No passwords or tokens belong in this file.**
Last updated: 22 Nov 2026.

| Service | Account / owner | What it does | Notes |
|---|---|---|---|
| **GitHub** – `WiCareAps/wicare` | Org **WiCareAps** (user `ins0o0mniac` has write access) | Code + automatic build/deploy | Moved from `rutkowskawiktoria-cell/wicare` in Nov 2026. Branches: `main` (live), `dev`, `redesign`. **The repo is Public** – never commit private emails, tokens or customer data. |
| **GitHub Actions** | same repo | `CI - Build check` on every branch; `Deploy to GitHub Pages` on push to `main` | Workflows in `.github/workflows/`. |
| **GitHub Pages** | same repo | Hosts the live site files | Custom domain wicare.vip. |
| **Cloudflare** – zone `wicare.vip` | **Alexander's** Cloudflare account | DNS, CDN/cache, SSL (Full), HSTS, security headers, email routing, AI-bot settings | Same account holds `dreamhousegift.com` (for-sale page, Worker `dreamhousegift-forsale`). |
| **Cloudflare Worker `wicare`** | **Wiktoria's** Cloudflare account | Preview/staging copies: `wicare.rutkowska-wiktoria.workers.dev` (+ `dev-…` / `redesign-…` previews) | Connected to the GitHub repo via the "Cloudflare Workers and Pages" GitHub App. |
| **Email** `hello@wicare.vip` | Cloudflare Email Routing (Alexander's) | Forwards to the WiCare Gmail inbox | DMARC `p=reject`, SPF + DKIM set. Mail is *sent* from Gmail, not from @wicare.vip. |
| **Domain registrar** | Namecheap (old email records pointed there; Cloudflare shows the registrar as unknown) | Owns the wicare.vip name | Nameservers point to Cloudflare. Check the renewal date at the registrar. |
| **Cloudflare Web Analytics** | Alexander's Cloudflare account | Cookie-free visitor counts (all visitors, incl. those who decline cookies) | Enabled 22 Nov 2026 on wicare.vip, setting **"Enable"** (not "excluding EU", which would skip Danish visitors). Cloudflare injects the beacon automatically. |
| **Google Search Console** | Alexander's Google account | Google indexing, search data | Property `sc-domain:wicare.vip` (also has dreamhousegift.com). |
| **Google Analytics 4** | Alexander's Google account | Visitor stats + leads | Account a399377036, property **543344539**, measurement ID **G-T2ZVMZK3M8**. Key event: `generate_lead`. |
| **Google Tag Manager** | Alexander's Google account | Loads GA4 (only after cookie consent) | Container **GTM-TXV53GK8**, published version 4 (Sept 2026). |
| **Bing Webmaster Tools** | Signed in with Alexander's Google account | Bing indexing (also feeds ChatGPT search / Copilot) | Site imported from Search Console 18 Nov 2026 (read-only link). Sitemap submitted. |
| **Google Business Profile** | – | *Not created yet* | See TODO.md – top priority. |
| **Instagram** `@wiki.foodie` | Wiktoria | Her food portfolio | Private as of Nov 2026 → not linked from the site. |
| **Web3Forms** | – | Was used by the old contact form | Contact form removed Sept 2026 (call-first). Only the redesign prototypes still reference it. |
| **Claude scheduled tasks** | Claude desktop app on the Mac | Monthly site audit + email-forwarding check (1st of month) | Task files in `~/Documents/Claude/Scheduled/`. |

## Access notes
- **Publishing from Claude**: Claude's sandbox may *not* push to GitHub (blocked by the app). Claude publishes through Chrome (logged into GitHub) – see PUBLISHING.md.
- **Publishing from the Mac**: a fine-grained GitHub token (repo `wicare` only, Contents read/write) is stored in the project's git remote on the Mac. **Expires ~mid-Feb 2027.**
- Cloudflare dashboard logins time out – log in again in Chrome when Claude needs to change something there.
- Rotate tokens/keys periodically and never paste them into chats or files.
