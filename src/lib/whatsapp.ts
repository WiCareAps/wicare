import type { Locale } from './i18n/translations';

// WhatsApp quick enquiry (Nov 2026): one tap opens WhatsApp with a short template the visitor
// fills in (date, guests, town). Still a direct conversation with WiCare — not a form.
export const WA_NUMBER = '4552721102';

export function waEnquiry(locale: Locale, opts: { occasion?: string; town?: string } = {}): string {
  const lines =
    locale === 'da'
      ? ['Hej WiCare! Jeg vil gerne høre om en privat kok.', '', `Anledning: ${opts.occasion ?? ''}`, 'Dato: ', 'Antal gæster: ', `By: ${opts.town ?? ''}`]
      : ['Hi WiCare! I would like to hear about a private chef.', '', `Occasion: ${opts.occasion ?? ''}`, 'Date: ', 'Number of guests: ', `Town: ${opts.town ?? ''}`];
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/** Plain message for non-dining pages (cleaning, garden & construction). */
export function waGeneral(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
