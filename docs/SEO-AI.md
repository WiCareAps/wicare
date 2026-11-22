# WiCare – SEO & AI visibility

How wicare.vip gets found on Google, Bing and AI assistants (ChatGPT, Gemini, Copilot, Perplexity, Claude).
Last updated: 18 Nov 2026.

## Where we stand (18 Nov 2026)
- Last 90 days on Google: **18 clicks, 6,200 impressions, average position 34**. Most impressions came from old cleaning searches ("erhvervsrengøring Virum" …).
- Since the switch to private chef (3 Nov) the impressions are **dining searches**: "catering gentofte" (pos ~23), "catering holte / klampenborg / jægersborg" (pos 11–16 = just off page 1), "firmajulefrokost holte" (pos 11), "privat kok københavn" (pos ~65).
- **36 pages indexed** by Google. `/privat-kok/` launched 18 Nov (indexing requested).
- Bing had only part of the site → fixed via Bing Webmaster Tools (18 Nov, 29 URLs submitted).
- Google Analytics counts only visitors who accept cookies (~6 visits/28 days) – real traffic is higher.
- **No Google Business Profile yet** – the biggest missing piece (see TODO.md).

## The rules we follow
- **Page titles: keyword first, brand last.**
  - Home: "Privat kok & catering nord for København | WiCare"
  - /privat-kok/: "Privat kok til middagen derhjemme | Private middage | WiCare"
  - Town pages: "Catering & privat kok i <town> | WiCare" (people search "catering <town>" most)
- Every page has a unique Danish title + description, canonical URL, and structured data (LocalBusiness, Service, FAQ, Breadcrumb).
- One topic per page – don't let two pages compete for the same search (that's why /privat-kok/ ≠ homepage).
- 20 town pages each have their own unique text (never copy-paste between towns).
- Never link the old `/services/the-table/` – it only forwards to `/privat-kok/`.
- After adding or renaming pages: request indexing in Search Console (~10/day limit) and submit in Bing (100/day).

## AI assistants – what's set up
- **Cloudflare lets all AI crawlers in** (changed 18 Nov 2026): Security → Settings → "AI Crawler and Agent access policies" = Allow for search, training and agents; "Bot Preference Sync" OFF. Before this, Cloudflare blocked GPTBot, ClaudeBot, Gemini (Google-Extended), Apple, Meta, and ChatGPT/Perplexity browsing. **Don't turn blocking back on.**
- `robots.txt` = allow everything + sitemap.
- `/llms.txt` = plain summary of the business, services, towns and contact for AI tools.
- Structured data names the chef (Wiktoria R.), all services and the 20 towns.
- Bing Webmaster Tools set up (ChatGPT search and Copilot use Bing's index). Its **AI Performance** report shows Copilot citations.
- What AI assistants weigh most for "who should I hire": Google Business Profile + reviews, mentions on other sites (directories, articles), and clear facts on our own site. The first two are owner tasks.

## Monthly routine (or let the 1st-of-month Claude audit do it)
1. Search Console → Performance (28 days): clicks, impressions, top queries, positions for "catering <town>" and "privat kok".
2. Search Console → Pages: anything newly "not indexed"? (404s for old URLs are fine.)
3. Bing Webmaster Tools → Search Performance + AI Performance.
4. GA4 → key event `generate_lead`: how many calls/WhatsApp/email clicks, from which page.
5. Note the numbers in the monthly report and adjust titles/content where pages sit at positions 8–20.

## Indexing log
- 3 Nov 2026: sitemap resubmitted; indexing requested for home, the-table, firmacatering, julefrokost, 6 town pages.
- 7 Nov 2026: indexing requested for 4 more towns + erhvervsrengøring; /selskaber/ already indexed.
- 18 Nov 2026: /privat-kok/, home, Gentofte requested in Google; 29 URLs submitted to Bing; Bing sitemap submitted.
- 22 Nov 2026: **/privat-kok/ is indexed** (4 days). Google last 7 days (14–20 Nov): 1 click, 196 impressions, avg position 27.8 (28 days: 8 clicks, 1,710 impressions, pos 36). Impressions are now almost all dining searches; the old cleaning impressions are gone, so totals are lower but better targeted. Homepage averages position 9.9; "catering jægersborg/klampenborg" ~11–12, "catering holte" ~16, "catering gentofte" ~23, "privat kok (københavn)" ~53–63. Bing data only just started (0 so far).
