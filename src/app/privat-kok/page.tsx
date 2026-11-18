import { services } from '@/lib/services';
import ServiceDetail from '@/components/ServiceDetail';
import { areas } from '@/lib/areas';

// Flagship page (Nov 2026): the private-dining service lives at the Danish keyword URL /privat-kok/.
// The old /services/the-table/ was never indexed by Google and now redirects here (see services/[slug]).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wicare.vip';
const url = `${siteUrl}/privat-kok/`;
// Kept distinct from the homepage title so the two pages don't compete: this page = the private dinner at home.
const title = 'Privat kok til middagen derhjemme | Private middage | WiCare';
const description =
  'Privat kok til middagen hjemme hos dig i Hellerup, Gentofte og omegn. Vores kok har 13+ års erfaring, bl.a. fra Michelin-restauranter og som souschef i Folketinget. Ring +45 52 72 11 02.';

export const metadata = {
  title,
  description,
  keywords: ['privat kok', 'privat kok middag derhjemme', 'privat kok København', 'privat kok Hellerup', 'privat kok Gentofte', 'privat kok Rudersdal', 'kok til middag', 'kok ud af huset', 'fine dining hjemme', 'WiCare ApS'],
  alternates: { canonical: '/privat-kok/' },
  openGraph: {
    title,
    description,
    url: '/privat-kok/',
    siteName: 'WiCare ApS',
    locale: 'da_DK',
    type: 'website',
    images: [{ url: '/og-chef.jpg', width: 1200, height: 630, alt: 'WiCare ApS' }],
  },
};

export default function Page() {
  const service = services.find((s) => s.slug === 'the-table')!;
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Privat kok', item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: 'Privat kok til middagen derhjemme',
      serviceType: 'Privat kok',
      url,
      description,
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: areas.map((a) => ({ '@type': 'City', name: a.name, postalCode: a.postal, addressCountry: 'DK' })),
    },
  ];
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServiceDetail slug={service.slug as 'the-table'} />
    </>
  );
}
