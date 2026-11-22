'use client';
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { translations, type Locale } from './translations';
import { isEnPath, toEn } from './routes';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)['en'];
  /** true on the crawlable English URLs (/en/...) — the language is fixed to English there. */
  enRoute: boolean;
  /** Localise an internal href: on /en/ pages, Danish URLs that have an English twin become /en/... */
  lh: (href: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Crawlers must always see the language of the URL they fetched (Danish on Danish URLs),
// so the automatic language switch below is skipped for them.
const BOT_UA = /bot|crawl|spider|slurp|google|bing|yandex|duckduck|baidu|facebookexternalhit|lighthouse|headless|preview/i;

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const pathname = usePathname();
  const enRoute = isEnPath(pathname);
  // Danish is the primary market, so Danish URLs render Danish in the static (crawlable) HTML.
  // /en/ URLs render English. Non-Danish human visitors on Danish URLs are switched to English client-side.
  const [stateLocale, setLocaleState] = useState<Locale>(initialLocale || 'da');
  const locale: Locale = enRoute ? 'en' : stateLocale;

  useEffect(() => {
    if (initialLocale || enRoute) return;
    if (typeof navigator !== 'undefined' && (navigator.webdriver || BOT_UA.test(navigator.userAgent || ''))) return;

    // 1. A manual choice always wins.
    const stored = localStorage.getItem('wicare-locale');
    if (stored === 'en' || stored === 'da') {
      setLocaleState(stored);
      return;
    }

    // 2. Fast first guess from the browser language while geo loads.
    const browserDanish = (navigator.language || '').toLowerCase().startsWith('da');
    setLocaleState(browserDanish ? 'da' : 'en');

    // 3. Refine by visitor country: Danish only inside Denmark, English elsewhere.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    fetch('https://ipapi.co/country/', { signal: controller.signal })
      .then((r) => (r.ok ? r.text() : ''))
      .then((country) => {
        const c = country.trim().toUpperCase();
        if (c === 'DK') setLocaleState('da');
        else if (c) setLocaleState('en');
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
  }, [initialLocale, enRoute]);

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('wicare-locale', newLocale);
    } catch {}
  };

  const lh = useCallback((href: string) => (enRoute ? toEn(href) : href), [enRoute]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale], enRoute, lh }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
