import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import AreasMap from '@/components/sections/AreasMap';
import SeasonalBanner from '@/components/sections/SeasonalBanner';
import ExtraServices from '@/components/sections/ExtraServices';
import ChefIntro from '@/components/ChefIntro';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

// Crawlable English homepage (Nov 2026). Same sections as "/", rendered in English because the
// LanguageProvider locks the language to English on every /en/ path.
const title = 'Private Chef & Catering North of Copenhagen | WiCare';
const description =
  'Private chef and catering in Hellerup, Gentofte, Lyngby, Rudersdal and Hørsholm: private dinners at home, corporate catering, parties and Christmas lunches. Chef with 13+ years incl. Michelin-starred restaurants and the Danish Parliament. Call +45 52 72 11 02.';

export const metadata = {
  title,
  description,
  keywords: ['private chef Copenhagen', 'private chef Hellerup', 'private chef Gentofte', 'catering Copenhagen', 'corporate catering Copenhagen', 'private dining at home', 'chef for hire Copenhagen', 'Danish Christmas lunch catering', 'WiCare'],
  alternates: { canonical: '/en/', languages: { da: '/', en: '/en/', 'x-default': '/' } },
  openGraph: { type: 'website', locale: 'en_GB', siteName: 'WiCare ApS', title, description, url: '/en/', images: [{ url: '/og-chef.jpg', width: 1200, height: 630, alt: 'WiCare ApS' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-chef.jpg'] },
};

export default function HomeEn() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SeasonalBanner />
        <Services />
        <ChefIntro />
        <ExtraServices />
        <AreasMap />
        <Booking />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
