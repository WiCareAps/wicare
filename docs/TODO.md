# WiCare – to-do list

Last updated: 22 Nov 2026. Tick items off (or delete them) as they're done.

## Owner – biggest impact first
- [ ] **Create a Google Business Profile** (business.google.com) – category "Caterer" / "Personal chef", service area = the 20 towns, phone, website, photos. This is the #1 source of local clients and of AI recommendations. When it exists, add its URL to `sameAs` in `src/app/layout.tsx`.
- [ ] **Collect Google reviews** from every happy client (send the review link by SMS/WhatsApp after each event). Only real reviews may go on the website.
- [ ] **Real photos of Wiktoria**: a portrait (chef whites) + 4–6 photos of her dishes. Save the originals in `~/Documents/Claude/WiCare/`. Replaces the AI-generated chef photos (homepage hero `hero-chef.webp`, `/privat-kok/` header `dining.webp`) and the "WR" monogram.
- [ ] **Make Instagram @wiki.foodie public** (or create a public business account) – then we link it from the site.
- [ ] **Align experience claim**: Instagram says "10+ years", the website says "13+". Pick one.
- [ ] **Directory listings** (same name/phone/website everywhere): Krak, De Gule Sider, Proff (auto from CVR – check it), Trustpilot, Bing Places, Apple Business Connect.
- [ ] Optional: **Google Ads** for "privat kok" / "catering <town>" – the only way to get clients immediately.
- [ ] Optional: **Cloudflare Crawler Hints** (Caching → Configuration) – tells Bing instantly when pages change; requires accepting Cloudflare's extra terms.

## Seasonal / dated reminders
- [ ] **January 2027**: replace the "Julefrokost" link in the header menu with "Fester & selskaber" (`src/components/Navbar.tsx`, label `t.nav.parties`). The seasonal banner hides itself automatically outside Sept–Dec.
- [ ] **Before Sept 2027**: change "2026" → "2027" in `src/lib/landings.ts` (julefrokost) and `src/components/sections/SeasonalBanner.tsx`.
- [ ] **After May 2027**: change "Konfirmation 2027" → "2028" in `src/lib/landings.ts` (konfirmation badge + the link on /selskaber/), and in January share /konfirmation/ (families book Jan–Feb for April–May).
- [ ] **~Mid-February 2027**: the GitHub access key on the Mac expires (90 days). Make a new fine-grained token and run `git remote set-url …` again (see PUBLISHING.md).
- [ ] Every 1st of the month: automatic Claude audits run (site audit 08:00, email-forwarding check 08:30) – read the report in `~/Documents/Claude/WiCare/`.

## Watch (Search Console / Bing, every 2–4 weeks)
- [x] ~~Is **/privat-kok/** indexed by Google yet?~~ Yes – indexed by 22 Nov 2026 (the old `/services/the-table/` never was).
- [ ] Do the "catering <town>" searches climb from page 2 (positions 11–25) to page 1?
- [ ] "erhvervsrengøring <town>" impressions will drop (titles now lead with catering) – expected; decide if that's OK.
- [ ] GA4 key event **generate_lead** (phone/WhatsApp/email clicks) – are real leads coming in? Ignore test leads with method = `test`.
- [ ] Bing Webmaster Tools → **AI Performance**: is Copilot citing wicare.vip?
- [ ] **Cloudflare Web Analytics** (enabled 22 Nov 2026, counts every visitor without cookies): Cloudflare → Analytics & Logs → Web Analytics → wicare.vip. Compare with GA4 to see real traffic.
- [ ] Are the **English pages** (`/en/…`) indexed, and do searches like "private chef copenhagen" show up? (Search Console → Pages / Performance, filter URL contains `/en/`.)
- [ ] GA4 `generate_lead` with method = `whatsapp`: is the new WhatsApp enquiry button being used?

## Nice-to-have ideas (not started)
- A short "Om kokken" page about Wiktoria (needs her photos/story).
- Real menu examples (only if Wiktoria wants – the old sample menu was removed on purpose).
- English versions of more pages (town pages, FAQ, /konfirmation/) – today only home, private chef, corporate catering, parties and Christmas lunch have `/en/` URLs.
- Deeper text (like the 5 towns done 22 Nov) for the other 15 town pages, once we see which ones get impressions.
