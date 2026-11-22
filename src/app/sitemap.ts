export const dynamic = "force-static";
import { services } from '@/lib/services';
import { posts } from '@/lib/blog';
import { areas } from '@/lib/areas';
import type { MetadataRoute } from 'next';
import { EN_ROUTES } from '@/lib/i18n/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wicare.vip';
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/erhvervsrengoering/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privat-kok/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 }, // flagship: private dining
    { url: `${baseUrl}/firmacatering/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/konfirmation/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/selskaber/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/julefrokost/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/careers/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/terms/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
  // the-table now redirects to /privat-kok/ (listed above), so only cleaning + garden remain here.
  const servicePages: MetadataRoute.Sitemap = services.filter((s) => s.slug !== 'the-table').map((s) => ({
    url: `${baseUrl}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${baseUrl}/omraader/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));
  // Danish ↔ English pairs: hreflang alternates on both entries + the /en/ URLs themselves.
  const alt = (da: string) => ({ languages: { da: `${baseUrl}${da}`, en: `${baseUrl}${EN_ROUTES[da]}` } });
  for (const e of staticPages) {
    const path = e.url.replace(baseUrl, '');
    if (EN_ROUTES[path]) e.alternates = alt(path);
  }
  const enPages: MetadataRoute.Sitemap = Object.entries(EN_ROUTES).map(([da, en]) => ({
    url: `${baseUrl}${en}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: alt(da),
  }));
  return [...staticPages, ...enPages, ...servicePages, ...blogPages, ...areaPages];
}
