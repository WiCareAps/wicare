# WiCare – changelog

Most recent first. Detailed technical history: `git log` on GitHub (`WiCareAps/wicare`).

## November 2026
- **18 Nov** – SEO & AI audit. New flagship page **/privat-kok/** (old `/services/the-table/` never got indexed → now forwards). Titles now keyword-first; town pages lead with "Catering & privat kok i …". Business data for Google/AI rewritten in Danish with the chef and all services; added `/llms.txt`. **Cloudflare now allows all AI crawlers/assistants** (was blocking them). **Bing Webmaster Tools** set up, sitemap + 29 URLs submitted. Repo moved to **WiCareAps/wicare**; publishing via Chrome upload + pull request (sandbox can't push).
- **9 Nov** – dreamhousegift.com (now a for-sale page): old sitemap removed from Search Console.
- **7 Nov** – Private dining page got its own title (no longer competing with the homepage). More indexing requests.
- **3–6 Nov** – **Repositioned the whole site as a private chef & catering business**: new chef hero, dining-first homepage, "Mød kokken" section (Wiktoria R., sous-chef at Folketinget, Michelin), cleaning/garden moved to "Øvrige services", town pages rewritten dining-first. New page **/selskaber/** (parties & celebrations); homepage third card made general instead of Christmas-only. GA4 key event `generate_lead` created.

## September 2026
- Call tracking: every phone/WhatsApp/email click is a GA4 lead; GTM fixed so page views are recorded (version 4).
- New landing pages **/julefrokost/** and **/firmacatering/**; seasonal Christmas banner (Sept–Dec).
- Business cleaning page **/erhvervsrengoering/** + commercial-cleaning sections on town pages (based on Search Console demand).
- **20 town pages** (Gentofte, Lyngby-Taarbæk, Rudersdal, Hørsholm, Allerød) + coast map "Hvor vi arbejder".
- Contact form removed (call-first); fake testimonials and "Why WiCare" removed; claims checked with the owner; opening hours removed; compact footer.
- Brand switched to navy + steel blue; fonts self-hosted (fixed a deploy failure).
- Redesign prototypes (4 bold variants) built on the `redesign` branch – not live.
- Dev/main workflow with automatic build check before anything goes live; Cloudflare preview Worker.

## July–August 2026
- Site audit, Google Search Console verified and sitemap submitted.
- GDPR cookie consent (Consent Mode v2), GTM + GA4.
- Email: hello@wicare.vip via Cloudflare Email Routing, DMARC/SPF/DKIM.
- Monthly automatic audit + email-forwarding check scheduled.
