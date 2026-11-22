import LandingPage from '@/components/LandingPage';
import { landingSchemas } from '@/lib/landingMeta';

const title = 'Privat kok til konfirmation nord for København | WiCare';
const description =
  'Kok til konfirmationen i Hellerup, Gentofte, Lyngby, Holte og Hørsholm – frokost eller middag hjemme hos jer eller i et lokale. Menu og pris aftales med jer. Ring +45 52 72 11 02.';

export const metadata = {
  title,
  description,
  keywords: [
    'kok til konfirmation',
    'privat kok konfirmation',
    'konfirmation catering',
    'mad til konfirmation',
    'konfirmationsmad',
    'konfirmationsfrokost',
    'konfirmation Gentofte',
    'konfirmation Hellerup',
    'konfirmation Holte',
    'konfirmation Lyngby',
    'WiCare ApS',
  ],
  alternates: { canonical: '/konfirmation/' },
  openGraph: {
    title,
    description,
    url: '/konfirmation/',
    siteName: 'WiCare ApS',
    locale: 'da_DK',
    type: 'website',
    images: [{ url: '/og-chef.jpg', width: 1200, height: 630, alt: 'WiCare ApS' }],
  },
};

export default function Page() {
  const schemas = landingSchemas('konfirmation', 'Privat kok til konfirmation', 'Catering til konfirmation', description);
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <LandingPage page="konfirmation" />
    </>
  );
}
