import { notFound } from 'next/navigation';
import LandingPage from '@/components/LandingPage';
import ServiceDetail from '@/components/ServiceDetail';
import { landingSchemas } from '@/lib/landingMeta';
import { areas } from '@/lib/areas';
import type { LandingKey } from '@/lib/landings';

// Crawlable English twins of the main Danish pages (Nov 2026). The page components are the same as
// the Danish ones; the LanguageProvider locks /en/ paths to English. Pairs live in src/lib/i18n/routes.ts.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wicare.vip';

type Cfg = {
  da: string;
  title: string;
  description: string;
  keywords: string[];
  serviceName: string;
  serviceType: string;
  landing?: LandingKey;
};

const pages: Record<string, Cfg> = {
  'private-chef': {
    da: '/privat-kok/',
    title: 'Private Chef for Dinner at Home in Copenhagen North | WiCare',
    description:
      'Hire a private chef for dinner at home in Hellerup, Gentofte, Lyngby and Rudersdal. Our chef has 13+ years of experience, including Michelin-starred restaurants and as sous-chef at the Danish Parliament. Call +45 52 72 11 02.',
    keywords: ['private chef Copenhagen', 'private chef at home', 'private chef Hellerup', 'private chef Gentofte', 'hire a chef Copenhagen', 'private dinner chef', 'fine dining at home Copenhagen'],
    serviceName: 'Private chef for dinner at home',
    serviceType: 'Private chef',
  },
  'corporate-catering': {
    da: '/firmacatering/',
    title: 'Corporate Catering North of Copenhagen | WiCare',
    description:
      'Corporate catering in Lyngby, Gentofte, Hellerup, Holte and Hørsholm – meeting lunches, receptions and client dinners cooked and served at your place. Price agreed with you. Call +45 52 72 11 02.',
    keywords: ['corporate catering Copenhagen', 'office catering Lyngby', 'company lunch catering', 'reception catering Copenhagen', 'client dinner catering'],
    serviceName: 'Corporate catering',
    serviceType: 'Corporate catering',
    landing: 'firmacatering',
  },
  parties: {
    da: '/selskaber/',
    title: 'Private Chef for Parties & Celebrations | WiCare',
    description:
      'A private chef for birthdays, anniversaries, confirmations, weddings and garden parties north of Copenhagen – at your home or a venue. Menu and price agreed with you. Call +45 52 72 11 02.',
    keywords: ['party catering Copenhagen', 'private chef for a party', 'birthday catering Copenhagen', 'wedding catering Copenhagen', 'garden party catering'],
    serviceName: 'Private chef for parties and celebrations',
    serviceType: 'Event catering',
    landing: 'selskaber',
  },
  'christmas-lunch': {
    da: '/julefrokost/',
    title: 'Danish Christmas Lunch (Julefrokost) with a Private Chef | WiCare',
    description:
      'A company or family julefrokost north of Copenhagen, cooked at your place by our private chef. Menu and price agreed with you. December gets busy – call +45 52 72 11 02.',
    keywords: ['julefrokost catering', 'Danish Christmas lunch', 'company Christmas party Copenhagen', 'Christmas lunch catering Copenhagen', 'private chef Christmas'],
    serviceName: 'Danish Christmas lunch with a private chef',
    serviceType: 'Christmas lunch catering',
    landing: 'julefrokost',
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) return {};
  const path = `/en/${slug}/`;
  return {
    title: p.title,
    description: p.description,
    keywords: [...p.keywords, 'WiCare'],
    alternates: { canonical: path, languages: { da: p.da, en: path, 'x-default': p.da } },
    openGraph: { type: 'website', locale: 'en_GB', siteName: 'WiCare ApS', title: p.title, description: p.description, url: path, images: [{ url: '/og-chef.jpg', width: 1200, height: 630, alt: 'WiCare ApS' }] },
  };
}

export default async function EnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  const path = `/en/${slug}/`;
  const url = `${siteUrl}${path}`;
  const schemas = p.landing
    ? landingSchemas(p.landing, p.serviceName, p.serviceType, p.description, { locale: 'en', path })
    : [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/en/` },
            { '@type': 'ListItem', position: 2, name: 'Private chef', item: url },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: p.serviceName,
          serviceType: p.serviceType,
          url,
          description: p.description,
          provider: { '@id': `${siteUrl}/#business` },
          areaServed: areas.map((a) => ({ '@type': 'City', name: a.name, postalCode: a.postal, addressCountry: 'DK' })),
        },
      ];
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {p.landing ? <LandingPage page={p.landing} /> : <ServiceDetail slug="the-table" />}
    </>
  );
}
