// Danish ↔ English URL pairs (Nov 2026). Danish is the default; these core pages also exist as
// crawlable English URLs under /en/ (with hreflang both ways). Every other page stays Danish-only
// (its English text is still available via the client-side EN/DK switch).
export const EN_ROUTES: Record<string, string> = {
  '/': '/en/',
  '/privat-kok/': '/en/private-chef/',
  '/firmacatering/': '/en/corporate-catering/',
  '/selskaber/': '/en/parties/',
  '/julefrokost/': '/en/christmas-lunch/',
};

const DA_ROUTES: Record<string, string> = Object.fromEntries(Object.entries(EN_ROUTES).map(([da, en]) => [en, da]));

function split(href: string) {
  const i = href.indexOf('#');
  let path = i >= 0 ? href.slice(0, i) : href;
  const hash = i >= 0 ? href.slice(i) : '';
  if (!path) path = '/';
  if (!path.endsWith('/')) path += '/';
  return { path, hash };
}

/** true for /en and /en/... */
export function isEnPath(pathname?: string | null): boolean {
  return !!pathname && (pathname === '/en' || pathname.startsWith('/en/'));
}

/** Map an internal Danish href to its English URL when one exists (keeps #hash); otherwise unchanged. */
export function toEn(href: string): string {
  if (!href.startsWith('/') || isEnPath(href)) return href;
  const { path, hash } = split(href);
  const en = EN_ROUTES[path];
  return en ? en + hash : href;
}

/** Danish URL for an English path (falls back to the Danish homepage). */
export function toDa(pathname: string): string {
  const { path, hash } = split(pathname);
  return (DA_ROUTES[path] ?? '/') + hash;
}

/** English alternate of a Danish path, or null if that page has no English URL. */
export function enAlternate(pathname: string): string | null {
  return EN_ROUTES[split(pathname).path] ?? null;
}

/** hreflang map for a Danish path that has an English twin (for Next.js `alternates.languages`). */
export function hreflang(daPath: string) {
  const en = EN_ROUTES[daPath];
  return en ? { da: daPath, en, 'x-default': daPath } : undefined;
}
