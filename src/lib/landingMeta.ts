import { landings, type LandingKey } from '@/lib/landings';
import { areas } from '@/lib/areas';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wicare.vip';

// JSON-LD for the catering landing pages. Danish by default; the /en/ twins pass { locale: 'en', path }.
export function landingSchemas(
  page: LandingKey,
  serviceName: string,
  serviceType: string,
  description: string,
  opts: { locale?: 'da' | 'en'; path?: string } = {},
) {
  const locale = opts.locale ?? 'da';
  const url = `${siteUrl}${opts.path ?? `/${page}/`}`;
  const home = locale === 'en' ? `${siteUrl}/en/` : `${siteUrl}/`;
  const c = landings[page][locale];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: serviceName,
      serviceType,
      url,
      description,
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: areas.map((a) => ({ '@type': 'City', name: a.name, postalCode: a.postal, addressCountry: 'DK' })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Home' : 'Forside', item: home },
        { '@type': 'ListItem', position: 2, name: c.h1, item: url },
      ],
    },
  ];
}
