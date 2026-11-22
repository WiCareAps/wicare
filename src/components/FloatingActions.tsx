'use client';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { waEnquiry, waGeneral } from '@/lib/whatsapp';


export default function FloatingActions() {
  const { t, locale, lh } = useLanguage();
  const pathname = usePathname() || '/';
  // Cleaning / garden pages get a plain message; everywhere else the private-chef enquiry template.
  const nonDining = /\/services\/the-(home|estate)|\/erhvervsrengoering|\/careers/.test(pathname);
  const wa = nonDining ? waGeneral(t.floating.whatsappMsg) : waEnquiry(locale);

  return (
    <div data-loc="floating" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <Link href={lh('/#book')} className="bg-accent text-primary text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full shadow-2xl hover:bg-accent-deep hover:scale-105 transition-all duration-200 block">{t.floating.bookNow}</Link>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-secondary text-white border border-accent/30 rounded-full flex items-center justify-center shadow-2xl hover:bg-primary hover:scale-110 transition-all duration-200" aria-label={t.floating.whatsappAria}>
        <WhatsAppIcon size={26} />
      </a>
      <a href="tel:+4552721102" className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary hover:scale-110 transition-all duration-200" aria-label={t.floating.ariaLabel}>
        <Phone size={22} />
      </a>
    </div>
  );
}
