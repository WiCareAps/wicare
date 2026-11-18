# WiCare – how to change and publish the site

Last updated: 18 Nov 2026.

## The safety rule
- **`main` = the live site.** Anything that lands on `main` is published to wicare.vip automatically (GitHub Actions → GitHub Pages → Cloudflare, ~2–8 minutes).
- **`dev` = work in progress.** All changes go to `dev` first. A build check runs on every `dev` commit, so a broken change is caught before it can reach the live site.
- When `dev` is good: open a pull request `dev → main` and merge it = publish.

## Option A – Claude does it (normal way)
Claude's sandbox is not allowed to `git push` (the app blocks uploads to GitHub), so Claude publishes through **Chrome**, which is logged into GitHub:
1. Claude edits the files in `~/Documents/WiCare/WiCare_latest` and checks them (`npx tsc --noEmit`, often a full `next build`).
2. Uploads the changed files on `https://github.com/WiCareAps/wicare/upload/dev/<folder>` → "Commit directly to the dev branch".
3. Waits for the green "CI - Build check".
4. Opens a pull request dev → main and merges it.
5. Verifies the live site (titles, pages, links) and syncs the local copy (`git fetch && git reset --mixed origin/dev`).

## Option B – from the Mac yourself
In Terminal:
```
cd ~/Documents/WiCare/WiCare_latest
git checkout dev
git pull
# …make changes…
git add <files>
git commit -m "what changed"
git push origin dev          # build check runs
```
Then publish: GitHub → Pull requests → New → base `main`, compare `dev` → Create → Merge.
The push uses the fine-grained token stored in the git remote (expires ~mid-Feb 2027 – then create a new one and run
`git remote set-url origin https://x-access-token:NEW_TOKEN@github.com/WiCareAps/wicare.git`).

## After publishing
- Check the page on wicare.vip (hard refresh). Cloudflare caches images ~31 days → when replacing an image, give it a **new file name** (e.g. `photo-v2.webp`).
- New or renamed pages → request indexing in Google Search Console and submit in Bing Webmaster Tools.

## Undo a bad release
GitHub → the merged pull request → **Revert** → merge the revert PR. The previous version is live again in a few minutes.

## Where things live in the code
- Text (Danish + English): `src/lib/i18n/translations.ts`, landing pages `src/lib/landings.ts`, towns `src/lib/areas.ts`, cleaning business page `src/lib/business.ts`.
- Page titles/descriptions: in each `src/app/**/page.tsx` (`metadata`).
- Chef section: `src/components/ChefIntro.tsx` (set `PORTRAIT` / `INSTAGRAM` at the top when ready).
- Images: `public/` (convert to WebP with `scripts/optimize-images.py`).
- Business data for Google/AI: `src/app/layout.tsx` (LocalBusiness JSON-LD) and `public/llms.txt`.
