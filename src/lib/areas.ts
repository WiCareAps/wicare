// Local area (town) landing pages for SEO — target "[service] + [town]" searches
// in the northern suburbs of Copenhagen. Each area has UNIQUE bilingual copy to
// avoid thin/duplicate "doorway" content.

export interface Area {
  slug: string;   // ASCII, URL-safe
  name: string;   // Display name (same DA/EN)
  postal: string; // Primary postal code (for LocalBusiness areaServed)
  municipality: string; // Kommune (groups the homepage map list)
  geo: [number, number]; // approx. town centre (lat, lon) for the illustrative coast map
  nearby: string[]; // slugs of neighbouring areas for internal linking
  da: { intro: string; body: string };
  en: { intro: string; body: string };
}

export const areas: Area[] = [
  {
    slug: 'hellerup',
    name: 'Hellerup',
    postal: '2900',
    municipality: 'Gentofte',
    geo: [55.7315, 12.571],
    nearby: ['charlottenlund', 'gentofte', 'klampenborg'],
    da: {
      intro: 'WiCare leverer diskret VIP-rengøring, privat madlavning og havepleje til hjem og virksomheder i Hellerup. Vores baggrundstjekkede team kender Strandvejens villaer og lejligheder og arbejder efter dine standarder – hvert besøg.',
      body: 'Fra white-glove hjemmerengøring i en penthouse ved Tuborg Havn til en privat kok til middagsselskabet eller løbende havepleje af villahaven på Onsgårdsvej: én betroet partner håndterer det hele i Hellerup og nabokvartererne Charlottenlund og Gentofte. Ring, så aftaler vi et uforpligtende besøg.',
    },
    en: {
      intro: 'WiCare provides discreet VIP cleaning, private dining and garden care for homes and businesses in Hellerup. Our background-checked team knows the villas and apartments along Strandvejen and works to your standards on every visit.',
      body: 'From white-glove home cleaning in a penthouse by Tuborg Harbour to a private chef for your dinner party or ongoing garden care for a villa: one trusted partner handles it all across Hellerup and neighbouring Charlottenlund and Gentofte. Call us to arrange a no-obligation visit.',
    },
  },
  {
    slug: 'skovshoved',
    name: 'Skovshoved',
    postal: '2920',
    municipality: 'Gentofte',
    geo: [55.76, 12.589],
    nearby: ['charlottenlund', 'klampenborg', 'hellerup'],
    da: {
      intro: 'WiCare leverer diskret VIP-rengøring, privat madlavning og havepleje i Skovshoved – til villaerne langs Strandvejen og husene i den gamle fiskerlandsby.',
      body: 'Omkring Skovshoved Havn og de smalle stræder i den gamle bydel betyder detaljen alt. Vi tilbyder grundig hjemmerengøring, en privat kok til middagen med havudsigt og løbende pasning af haven – samlet i én aftale med et fast team. Charlottenlund og Klampenborg ligger lige om hjørnet.',
    },
    en: {
      intro: 'WiCare provides discreet VIP cleaning, private dining and garden care in Skovshoved — for the villas along Strandvejen and the houses of the old fishing village.',
      body: 'Around Skovshoved Harbour and the narrow lanes of the old village, details matter. We offer thorough home cleaning, a private chef for a dinner with a sea view and ongoing garden care — all in one agreement with a dedicated team. Charlottenlund and Klampenborg are just around the corner.',
    },
  },
  {
    slug: 'charlottenlund',
    name: 'Charlottenlund',
    postal: '2920',
    municipality: 'Gentofte',
    geo: [55.752, 12.578],
    nearby: ['hellerup', 'skovshoved', 'ordrup', 'klampenborg'],
    da: {
      intro: 'I Charlottenlund tilbyder WiCare VIP-hjemmerengøring, privat kok og komplet ejendoms- og havepleje. Vi passer store villahaver og herskabslejligheder med samme omhu og præcision.',
      body: 'Bor du nær Charlottenlund Slotshave eller Skovshoved Havn, kender vi områdets ejendomme godt. Vi kombinerer rengøring, havearbejde og byggeopgaver til én fast aftale, så du kun har én kontakt for hele hjemmet. Nabobyerne Hellerup og Klampenborg dækkes lige så nemt.',
    },
    en: {
      intro: 'In Charlottenlund, WiCare offers VIP home cleaning, a private chef and complete property and garden care. We look after large villa gardens and stately apartments with the same care and precision.',
      body: 'Whether you live near Charlottenlund Palace Park or Skovshoved Harbour, we know the area’s properties well. We combine cleaning, gardening and construction work into a single standing agreement, so you have just one contact for the whole home. Neighbouring Hellerup and Klampenborg are covered just as easily.',
    },
  },
  {
    slug: 'ordrup',
    name: 'Ordrup',
    postal: '2920',
    municipality: 'Gentofte',
    geo: [55.764, 12.556],
    nearby: ['charlottenlund', 'jaegersborg', 'gentofte'],
    da: {
      intro: 'I Ordrup tilbyder WiCare VIP-hjemmerengøring, privat kok og ejendoms- og havepleje til områdets villaer og herskabelige ejendomme.',
      body: 'Mellem Ordrup Krat og kunstmuseet Ordrupgaard ligger nogle af de mest velholdte villaer nord for byen. Vi sørger for, at hjemmet altid står skarpt – med ugentlig rengøring, catering til private selskaber og fast havepleje. Vi dækker også Charlottenlund og Jægersborg.',
    },
    en: {
      intro: 'In Ordrup, WiCare offers VIP home cleaning, a private chef and property and garden care for the area’s villas and stately homes.',
      body: 'Between Ordrup Krat and the Ordrupgaard art museum lie some of the best-kept villas north of the city. We keep the home immaculate — with weekly cleaning, catering for private gatherings and regular garden care. We also cover Charlottenlund and Jægersborg.',
    },
  },
  {
    slug: 'klampenborg',
    name: 'Klampenborg',
    postal: '2930',
    municipality: 'Gentofte',
    geo: [55.769, 12.59],
    nearby: ['charlottenlund', 'skovshoved', 'taarbaek', 'skodsborg'],
    da: {
      intro: 'WiCare betjener Klampenborg og Bakken-området med diskret rengøring, privat madlavning og havepleje til villaer og strandnære ejendomme.',
      body: 'Tæt på Dyrehaven og Bellevue Strand stiller vi høje krav til diskretion og finish. Uanset om det er ugentlig hjemmerengøring, en kok til sommerfesten eller vedligeholdelse af haven, leverer vi en ensartet standard. Vi dækker også Skodsborg og Charlottenlund.',
    },
    en: {
      intro: 'WiCare serves Klampenborg and the Bakken area with discreet cleaning, private dining and garden care for villas and seafront properties.',
      body: 'Close to the Deer Park and Bellevue Beach, we hold ourselves to high standards of discretion and finish. Whether it’s weekly home cleaning, a chef for a summer party or garden maintenance, we deliver a consistent standard. We also cover Skodsborg and Charlottenlund.',
    },
  },
  {
    slug: 'gentofte',
    name: 'Gentofte',
    postal: '2820',
    municipality: 'Gentofte',
    geo: [55.748, 12.551],
    nearby: ['hellerup', 'jaegersborg', 'ordrup', 'charlottenlund'],
    da: {
      intro: 'I Gentofte kommune tilbyder WiCare VIP-rengøring, privat kok og ejendoms- og havepleje til private hjem, kontorer og virksomheder.',
      body: 'Vi hjælper familier og virksomheder i Gentofte, Vangede og Dyssegård med alt fra grundig hjemmerengøring og vinduespudsning til catering og løbende havearbejde. Fleksibel planlægning morgen, aften og weekend – tilpasset din hverdag.',
    },
    en: {
      intro: 'In Gentofte municipality, WiCare offers VIP cleaning, a private chef and property and garden care for private homes, offices and businesses.',
      body: 'We help families and businesses across Gentofte, Vangede and Dyssegård with everything from thorough home cleaning and window cleaning to catering and ongoing gardening. Flexible scheduling mornings, evenings and weekends — fitted around your routine.',
    },
  },
  {
    slug: 'jaegersborg',
    name: 'Jægersborg',
    postal: '2820',
    municipality: 'Gentofte',
    geo: [55.761, 12.524],
    nearby: ['gentofte', 'kongens-lyngby', 'ordrup'],
    da: {
      intro: 'WiCare betjener Jægersborg med diskret hjemmerengøring, privat madlavning og havepleje til villaer og familieboliger omkring Jægersborg Allé.',
      body: 'Travle familier i Jægersborg får én fast partner til rengøring, madlavning og haven, så hverdagen og weekenden kan bruges på det, der betyder mest. Vi planlægger fleksibelt – morgen, aften eller weekend – og dækker også Gentofte og Kongens Lyngby.',
    },
    en: {
      intro: 'WiCare serves Jægersborg with discreet home cleaning, private dining and garden care for villas and family homes around Jægersborg Allé.',
      body: 'Busy families in Jægersborg get one dedicated partner for cleaning, cooking and the garden, so weekdays and weekends can be spent on what matters most. We schedule flexibly — morning, evening or weekend — and also cover Gentofte and Kongens Lyngby.',
    },
  },
  {
    slug: 'kongens-lyngby',
    name: 'Kongens Lyngby',
    postal: '2800',
    municipality: 'Lyngby-Taarbæk',
    geo: [55.77, 12.503],
    nearby: ['sorgenfri', 'virum', 'jaegersborg'],
    da: {
      intro: 'WiCare leverer VIP-hjemmerengøring, privat madlavning og ejendoms- og havepleje til hjem og virksomheder i Kongens Lyngby.',
      body: 'Fra villaerne ved Lyngby Sø til lejlighederne omkring Lyngby Hovedgade skræddersyr vi rengøring, catering og havearbejde til dit hjem. Ét fast team og én kontakt – også i Sorgenfri og Virum.',
    },
    en: {
      intro: 'WiCare provides VIP home cleaning, private dining and property and garden care for homes and businesses in Kongens Lyngby.',
      body: 'From the villas by Lyngby Lake to the apartments around Lyngby Hovedgade, we tailor cleaning, catering and gardening to your home. One dedicated team and one contact — in Sorgenfri and Virum too.',
    },
  },
  {
    slug: 'sorgenfri',
    name: 'Sorgenfri',
    postal: '2800',
    municipality: 'Lyngby-Taarbæk',
    geo: [55.781, 12.481],
    nearby: ['kongens-lyngby', 'virum', 'holte'],
    da: {
      intro: 'I Sorgenfri tilbyder WiCare diskret hjemmerengøring, privat kok og havepleje til villaer med store, grønne grunde.',
      body: 'Omkring Sorgenfri Slot, Mølleåen og Frilandsmuseet ligger haver, der skal passes med omhu. Vi samler rengøring, havearbejde og byggeopgaver i én aftale, så du kun har ét nummer at ringe til. Vi dækker også Kongens Lyngby og Virum.',
    },
    en: {
      intro: 'In Sorgenfri, WiCare offers discreet home cleaning, a private chef and garden care for villas with large, green plots.',
      body: 'Around Sorgenfri Palace, the Mølleå river and the Open Air Museum are gardens that need careful tending. We combine cleaning, gardening and construction work into one agreement, so you only have one number to call. We also cover Kongens Lyngby and Virum.',
    },
  },
  {
    slug: 'virum',
    name: 'Virum',
    postal: '2830',
    municipality: 'Lyngby-Taarbæk',
    geo: [55.796, 12.473],
    nearby: ['sorgenfri', 'holte', 'kongens-lyngby'],
    da: {
      intro: 'WiCare betjener Virum med VIP-rengøring, privat madlavning og havepleje til villaer tæt på Furesøen og Frederiksdal.',
      body: 'Virums villakvarterer og store haver passer vi med samme præcision som hjemmet indenfor: grundig rengøring, vinduespudsning, hækklipning og en kok til de særlige aftener. Holte og Sorgenfri betjenes også.',
    },
    en: {
      intro: 'WiCare serves Virum with VIP cleaning, private dining and garden care for villas close to Lake Furesø and Frederiksdal.',
      body: 'We tend Virum’s villa neighbourhoods and large gardens with the same precision as the home inside: thorough cleaning, window cleaning, hedge trimming and a chef for special evenings. Holte and Sorgenfri are served too.',
    },
  },
  {
    slug: 'taarbaek',
    name: 'Taarbæk',
    postal: '2930',
    municipality: 'Lyngby-Taarbæk',
    geo: [55.788, 12.595],
    nearby: ['klampenborg', 'skodsborg', 'kongens-lyngby'],
    da: {
      intro: 'I Taarbæk leverer WiCare VIP-rengøring, privat kok og havepleje til husene mellem Dyrehaven og Øresund.',
      body: 'Den lille havneby er omgivet af skov og vand – og husene kræver pleje året rundt. Vi tager os af rengøring, vinduer og haven og sender gerne en privat kok, når der er gæster. Klampenborg og Skodsborg dækkes lige så nemt.',
    },
    en: {
      intro: 'In Taarbæk, WiCare provides VIP cleaning, a private chef and garden care for the homes between the Deer Park and the Øresund.',
      body: 'This small harbour village is surrounded by forest and sea — and its houses need care all year round. We look after cleaning, windows and the garden, and are happy to send a private chef when you have guests. Klampenborg and Skodsborg are covered just as easily.',
    },
  },
  {
    slug: 'holte',
    name: 'Holte',
    postal: '2840',
    municipality: 'Rudersdal',
    geo: [55.811, 12.47],
    nearby: ['soelleroed', 'virum', 'birkeroed', 'hoersholm'],
    da: {
      intro: 'WiCare dækker Holte og Rudersdal med diskret hjemmerengøring, privat madlavning og komplet havepleje til villaer og store grunde.',
      body: 'Rudersdals store haver og villaer kræver en partner, der kan koordinere havearbejde, byggeopgaver og rengøring under ét. Det gør vi – med faste teams, transparente priser og fokus på detaljen. Vi betjener også Hørsholm og Vedbæk.',
    },
    en: {
      intro: 'WiCare covers Holte and Rudersdal with discreet home cleaning, private dining and complete garden care for villas and large plots.',
      body: 'Rudersdal’s large gardens and villas call for a partner who can coordinate landscaping, construction work and cleaning under one roof. That’s what we do — with dedicated teams, transparent pricing and an eye for detail. We also serve Hørsholm and Vedbæk.',
    },
  },
  {
    slug: 'soelleroed',
    name: 'Søllerød',
    postal: '2840',
    municipality: 'Rudersdal',
    geo: [55.816, 12.505],
    nearby: ['holte', 'naerum', 'birkeroed'],
    da: {
      intro: 'I Søllerød leverer WiCare diskret VIP-rengøring, privat kok og komplet ejendoms- og havepleje til landsbyens villaer og landejendomme.',
      body: 'Omkring Søllerød Kirke, Søllerød Kro og Søllerød Sø ligger både historiske huse og moderne villaer – og begge fortjener en partner med øje for detaljen. Vi står for rengøring, havearbejde og catering og dækker også Holte og Nærum.',
    },
    en: {
      intro: 'In Søllerød, WiCare provides discreet VIP cleaning, a private chef and complete property and garden care for the village’s villas and country homes.',
      body: 'Around Søllerød Church, Søllerød Kro and Lake Søllerød you’ll find historic houses and modern villas alike — and both deserve a partner with an eye for detail. We handle cleaning, gardening and catering, and also cover Holte and Nærum.',
    },
  },
  {
    slug: 'naerum',
    name: 'Nærum',
    postal: '2850',
    municipality: 'Rudersdal',
    geo: [55.817, 12.537],
    nearby: ['soelleroed', 'skodsborg', 'holte'],
    da: {
      intro: 'WiCare tilbyder VIP-hjemmerengøring, privat madlavning og havepleje i Nærum – tæt på Jægersborg Hegn og Øresundskysten.',
      body: 'Nærums villaveje og rækkehuse får en fast partner, der kender standarden: grundig rengøring, hjælp til haven og en kok, når familien fejrer noget. Vi betjener også Søllerød og Skodsborg.',
    },
    en: {
      intro: 'WiCare offers VIP home cleaning, private dining and garden care in Nærum — close to the Jægersborg Hegn forest and the Øresund coast.',
      body: 'Nærum’s villa streets and townhouses get a dedicated partner who knows the standard: thorough cleaning, help in the garden and a chef when the family is celebrating. We also serve Søllerød and Skodsborg.',
    },
  },
  {
    slug: 'skodsborg',
    name: 'Skodsborg',
    postal: '2942',
    municipality: 'Rudersdal',
    geo: [55.825, 12.572],
    nearby: ['klampenborg', 'taarbaek', 'naerum', 'vedbaek'],
    da: {
      intro: 'WiCare dækker Skodsborg med diskret hjemmerengøring, privat madlavning og havepleje til kyst- og skovnære ejendomme.',
      body: 'Mellem Skodsborg Strand og Rude Skov leverer vi en ensartet, høj standard – uanset om det er rengøring, en kok til aftenen eller pasning af haven. Vi betjener også Klampenborg og Vedbæk.',
    },
    en: {
      intro: 'WiCare covers Skodsborg with discreet home cleaning, private dining and garden care for coastal and woodland properties.',
      body: 'Between Skodsborg Beach and Rude Forest we deliver a consistent, high standard — whether it’s cleaning, a chef for the evening or tending the garden. We also serve Klampenborg and Vedbæk.',
    },
  },
  {
    slug: 'vedbaek',
    name: 'Vedbæk',
    postal: '2950',
    municipality: 'Rudersdal',
    geo: [55.853, 12.565],
    nearby: ['rungsted', 'skodsborg', 'holte'],
    da: {
      intro: 'I Vedbæk tilbyder WiCare VIP-rengøring, privat kok og komplet ejendoms- og havepleje til hjem nær kysten.',
      body: 'Vedbæks strandnære villaer fortjener en betroet partner til rengøring, havearbejde og byggeopgaver. Vi samler det hele i én aftale med faste teams og klare priser. Skodsborg og Rungsted betjenes lige så nemt.',
    },
    en: {
      intro: 'In Vedbæk, WiCare offers VIP cleaning, a private chef and complete property and garden care for homes near the coast.',
      body: 'Vedbæk’s seaside villas deserve a trusted partner for cleaning, gardening and construction work. We bring it all into one agreement with dedicated teams and clear pricing. Skodsborg and Rungsted are served just as easily.',
    },
  },
  {
    slug: 'birkeroed',
    name: 'Birkerød',
    postal: '3460',
    municipality: 'Rudersdal',
    geo: [55.847, 12.428],
    nearby: ['holte', 'alleroed', 'hoersholm'],
    da: {
      intro: 'I Birkerød leverer WiCare VIP-rengøring, privat kok og ejendoms- og havepleje til villaer og landejendomme.',
      body: 'Fra villaerne ved Birkerød Sø til ejendommene ud mod Rude Skov og Sjælsø tager vi os af hjem og have med samme omhu. Én aftale dækker rengøring, havearbejde og catering. Holte og Allerød dækkes også.',
    },
    en: {
      intro: 'In Birkerød, WiCare provides VIP cleaning, a private chef and property and garden care for villas and country properties.',
      body: 'From the villas by Lake Birkerød to the properties bordering Rude Forest and Lake Sjælsø, we look after home and garden with the same care. One agreement covers cleaning, gardening and catering. Holte and Allerød are covered too.',
    },
  },
  {
    slug: 'hoersholm',
    name: 'Hørsholm',
    postal: '2970',
    municipality: 'Hørsholm',
    geo: [55.881, 12.501],
    nearby: ['rungsted', 'alleroed', 'birkeroed', 'vedbaek'],
    da: {
      intro: 'I Hørsholm leverer WiCare VIP-rengøring, privat kok og ejendoms- og havepleje til hjem og virksomheder – pålideligt og diskret.',
      body: 'Fra villaerne omkring Hørsholm Slotshave til boliger i Rungsted Kyst tilbyder vi ugentlig rengøring, catering til fejringer og løbende havearbejde. Én aftale, ét team, én kontakt. Nabobyerne Rungsted og Holte dækkes også.',
    },
    en: {
      intro: 'In Hørsholm, WiCare provides VIP cleaning, a private chef and property and garden care for homes and businesses — reliably and discreetly.',
      body: 'From the villas around Hørsholm Palace Garden to homes in Rungsted Kyst, we offer weekly cleaning, catering for celebrations and ongoing gardening. One agreement, one team, one contact. Neighbouring Rungsted and Holte are covered too.',
    },
  },
  {
    slug: 'rungsted',
    name: 'Rungsted',
    postal: '2960',
    municipality: 'Hørsholm',
    geo: [55.884, 12.54],
    nearby: ['hoersholm', 'vedbaek', 'skodsborg'],
    da: {
      intro: 'WiCare betjener Rungsted og Rungsted Kyst med diskret hjemmerengøring, privat madlavning og havepleje til strandvejsvillaer og lejligheder.',
      body: 'Langs Rungsted Havn og Strandvejen leverer vi white-glove rengøring, vores private kok til middage og fuld havepleje – med den diskretion, områdets beboere forventer. Vi dækker også Hørsholm og Vedbæk.',
    },
    en: {
      intro: 'WiCare serves Rungsted and Rungsted Kyst with discreet home cleaning, private dining and garden care for Strandvejen villas and apartments.',
      body: 'Along Rungsted Harbour and Strandvejen we provide white-glove cleaning, our private chef for dinners and full garden care — with the discretion residents expect. We also cover Hørsholm and Vedbæk.',
    },
  },
  {
    slug: 'alleroed',
    name: 'Allerød',
    postal: '3450',
    municipality: 'Allerød',
    geo: [55.871, 12.357],
    nearby: ['birkeroed', 'hoersholm'],
    da: {
      intro: 'WiCare betjener Allerød og Lillerød med diskret hjemmerengøring, privat madlavning og havepleje til villaer og større grunde.',
      body: 'Allerøds villaer og landejendomme ligger tæt på skov og sø – og kræver en partner, der kan tage sig af både hus og have. Vi samler rengøring, havearbejde og byggeopgaver i én fast aftale. Birkerød og Hørsholm betjenes også.',
    },
    en: {
      intro: 'WiCare serves Allerød and Lillerød with discreet home cleaning, private dining and garden care for villas and larger plots.',
      body: 'Allerød’s villas and country properties sit close to forest and lakes — and need a partner who can look after both house and garden. We combine cleaning, gardening and construction work into one standing agreement. Birkerød and Hørsholm are served too.',
    },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

// Commercial / office cleaning ("erhvervsrengøring") copy per town.
// Added Sept 2026: Search Console showed "erhvervsrengøring <town>" is the single
// biggest NON-BRAND query driving impressions (Holte 169, Skodsborg 81). Kept unique
// per town to avoid duplicate content across the area pages.
export const areaBusiness: Record<string, { da: string; en: string }> = {
  hellerup: {
    da: 'Vi løser også erhvervsrengøring i Hellerup — kontorer, klinikker og showrooms, fra virksomhederne omkring Tuborg Havn til de mindre kontorfællesskaber langs Strandvejen. Fast skema, diskret personale og rengøring uden for åbningstid, hvis det passer jer bedre.',
    en: 'We also handle commercial cleaning in Hellerup — offices, clinics and showrooms, from the companies around Tuborg Harbour to smaller office suites along Strandvejen. Fixed schedules, discreet staff and out-of-hours cleaning if that suits you better.',
  },
  charlottenlund: {
    da: 'Erhvervsrengøring i Charlottenlund dækker kontorer, klinikker og butikslokaler. Vi tilpasser frekvens og tidspunkt, så rengøringen aldrig forstyrrer jeres kunder eller patienter.',
    en: 'Commercial cleaning in Charlottenlund covers offices, clinics and retail spaces. We adapt the frequency and timing so cleaning never disturbs your customers or patients.',
  },
  klampenborg: {
    da: 'I Klampenborg løser vi erhvervsrengøring for kontorer, restauranter og mindre virksomheder nær Bakken og Bellevue. Høj standard, faste teams og fleksible tider før eller efter åbningstid.',
    en: 'In Klampenborg we handle commercial cleaning for offices, restaurants and smaller businesses near Bakken and Bellevue. A high standard, dedicated teams and flexible hours before or after opening.',
  },
  gentofte: {
    da: 'Erhvervsrengøring i Gentofte omfatter kontorer, klinikker og fællesarealer. Vi leverer fast kontorrengøring med det samme team hver gang, så I altid ved, hvem der kommer.',
    en: 'Commercial cleaning in Gentofte covers offices, clinics and shared areas. We provide regular office cleaning with the same team every time, so you always know who is coming.',
  },
  holte: {
    da: 'Erhvervsrengøring i Holte er en af vores mest efterspurgte services — kontorer, klinikker og liberale erhverv i hele Rudersdal. Vi kører fast kontorrengøring om aftenen eller tidligt om morgenen, så jeres arbejdsdag ikke forstyrres.',
    en: 'Commercial cleaning in Holte is one of our most requested services — offices, clinics and professional practices across Rudersdal. We run scheduled office cleaning in the evening or early morning so your workday is never interrupted.',
  },
  hoersholm: {
    da: 'Vi står for erhvervsrengøring i Hørsholm for kontorer, klinikker og virksomheder i og omkring erhvervsområderne. Fast frekvens, tydelige aftaler og baggrundstjekket personale.',
    en: 'We handle commercial cleaning in Hørsholm for offices, clinics and companies in and around the business districts. Set frequency, clear agreements and background-checked staff.',
  },
  rungsted: {
    da: 'Erhvervsrengøring i Rungsted dækker kontorer, klinikker og virksomhederne omkring Rungsted Havn. Vi arbejder diskret og uden for åbningstid, når det er nødvendigt.',
    en: 'Commercial cleaning in Rungsted covers offices, clinics and the businesses around Rungsted Harbour. We work discreetly and outside opening hours whenever needed.',
  },
  vedbaek: {
    da: 'I Vedbæk tilbyder vi erhvervsrengøring til kontorer, klinikker og mindre virksomheder. Fast team, klare priser og mulighed for rengøring, før medarbejderne møder ind.',
    en: 'In Vedbæk we offer commercial cleaning for offices, clinics and smaller businesses. A dedicated team, clear pricing and the option to clean before staff arrive.',
  },
  skodsborg: {
    da: 'Erhvervsrengøring i Skodsborg omfatter kontorer, klinikker samt hotel- og wellnessmiljøer langs kysten. Vi leverer en ensartet, høj standard — også i weekender og uden for normal arbejdstid.',
    en: 'Commercial cleaning in Skodsborg covers offices, clinics and the hotel and wellness venues along the coast. We deliver a consistent, high standard — including weekends and outside normal hours.',
  },
  skovshoved: {
    da: 'Vi løser også erhvervsrengøring i Skovshoved – for kontorer, klinikker og restauranter omkring havnen og Strandvejen. Rengøringen planlægges uden for åbningstid, så gæster og kunder aldrig mærker den.',
    en: 'We also handle commercial cleaning in Skovshoved — offices, clinics and restaurants around the harbour and Strandvejen. Cleaning is scheduled outside opening hours so guests and customers never notice it.',
  },
  ordrup: {
    da: 'Erhvervsrengøring i Ordrup omfatter kontorer, klinikker og butikkerne langs Ordrup Jagtvej. Vi arbejder med faste teams og på tidspunkter, der passer til jeres åbningstider.',
    en: 'Commercial cleaning in Ordrup covers offices, clinics and the shops along Ordrup Jagtvej. We work with dedicated teams and at times that fit your opening hours.',
  },
  jaegersborg: {
    da: 'Erhvervsrengøring i Jægersborg dækker kontorer, klinikker og virksomhederne langs Jægersborg Allé og Lyngbyvej. Fast kontorrengøring med samme team hver gang og klare aftaler.',
    en: 'Commercial cleaning in Jægersborg covers offices, clinics and the businesses along Jægersborg Allé and Lyngbyvej. Regular office cleaning with the same team each time and clear agreements.',
  },
  taarbaek: {
    da: 'Vi tilbyder også erhvervsrengøring i Taarbæk til restauranter, klinikker og mindre kontorer ved havnen og Strandvejen – diskret og uden for åbningstid.',
    en: 'We also offer commercial cleaning in Taarbæk for restaurants, clinics and small offices by the harbour and Strandvejen — discreetly and outside opening hours.',
  },
  'kongens-lyngby': {
    da: 'Erhvervsrengøring i Kongens Lyngby er oplagt for kontorer, klinikker og virksomheder i bymidten og erhvervsområderne. Vi gør rent før eller efter arbejdstid, med faste teams og tydelige aftaler.',
    en: 'Commercial cleaning in Kongens Lyngby suits offices, clinics and companies in the town centre and business districts. We clean before or after working hours, with dedicated teams and clear agreements.',
  },
  sorgenfri: {
    da: 'Erhvervsrengøring i Sorgenfri dækker kontorer, klinikker og mindre virksomheder. Vi leverer fast rengøring med det samme team, så kvaliteten er ens fra gang til gang.',
    en: 'Commercial cleaning in Sorgenfri covers offices, clinics and smaller businesses. We deliver regular cleaning with the same team, so the quality is the same on every visit.',
  },
  virum: {
    da: 'Vi løser erhvervsrengøring i Virum for kontorer, klinikker og liberale erhverv. Rengøringen lægges tidligt om morgenen eller om aftenen, så jeres dag kører uforstyrret.',
    en: 'We handle commercial cleaning in Virum for offices, clinics and professional practices. Cleaning is scheduled early in the morning or in the evening so your day runs undisturbed.',
  },
  soelleroed: {
    da: 'Erhvervsrengøring i Søllerød omfatter kontorer, klinikker og restauranter. Vi tilpasser frekvensen til jeres behov og arbejder diskret uden for åbningstid.',
    en: 'Commercial cleaning in Søllerød covers offices, clinics and restaurants. We adapt the frequency to your needs and work discreetly outside opening hours.',
  },
  naerum: {
    da: 'I Nærum løser vi erhvervsrengøring for kontorer og virksomheder i erhvervsområdet samt klinikker og butikker i centret. Fast skema og baggrundstjekket personale.',
    en: 'In Nærum we handle commercial cleaning for offices and companies in the business park as well as clinics and shops in the centre. Fixed schedules and background-checked staff.',
  },
  birkeroed: {
    da: 'Erhvervsrengøring i Birkerød dækker kontorer, klinikker og virksomheder i bymidten og erhvervsområderne. Vi gør rent, når det passer jer – før, efter eller mellem arbejdstiderne.',
    en: 'Commercial cleaning in Birkerød covers offices, clinics and companies in the town centre and business districts. We clean when it suits you — before, after or between working hours.',
  },
  alleroed: {
    da: 'Vi løser erhvervsrengøring i Allerød for kontorer, klinikker og virksomheder i erhvervsområderne og bymidten. Faste teams, faste tider og ingen overraskelser.',
    en: 'We handle commercial cleaning in Allerød for offices, clinics and companies in the business districts and the town centre. Dedicated teams, fixed times and no surprises.',
  },
};

// Private chef & catering intro per town (Nov 2026 — dining is the main business). Unique per town
// to avoid duplicate content across the area pages; shown first on /omraader/[slug].
export const areaDining: Record<string, { da: string; en: string }> = {
  hellerup: {
    da: 'Privat kok i Hellerup: vi laver middagen hjemme hos dig – fra en intim aften i lejligheden ved Tuborg Havn til selskabet i villaen på Strandvejen. Menuen sammensættes efter jeres smag, og vi rydder op bagefter.',
    en: 'Private chef in Hellerup: we cook dinner in your home – from an intimate evening in an apartment by Tuborg Harbour to a party in a villa on Strandvejen. The menu is designed around your taste, and we clean up afterwards.',
  },
  skovshoved: {
    da: 'Middag med havudsigt i Skovshoved: vores kok laver fine dining i dit hjem tæt på havnen – til middagen for to eller fejringen med familie og venner.',
    en: 'Dinner with a sea view in Skovshoved: our chef cooks fine dining in your home near the harbour – for a dinner for two or a celebration with family and friends.',
  },
  charlottenlund: {
    da: 'Privat kok i Charlottenlund til middagsselskabet, fødselsdagen eller sommerfesten i villahaven nær Slotshaven. Vi sammensætter menuen med dig og klarer køkkenet fra start til slut.',
    en: 'Private chef in Charlottenlund for your dinner party, birthday or summer party in a villa garden near the Palace Park. We design the menu with you and run the kitchen from start to finish.',
  },
  ordrup: {
    da: 'I Ordrup laver vores kok middagen hjemme hos dig – til jubilæet, familiefesten eller aftenen med gode venner. Menu, vin og servering aftales efter jeres ønsker.',
    en: 'In Ordrup our chef cooks dinner in your home – for an anniversary, a family party or an evening with good friends. Menu, wine and service are arranged to your wishes.',
  },
  klampenborg: {
    da: 'Privat kok og catering i Klampenborg – til sommerfesten tæt på Bellevue, middagen i villaen eller arrangementet for jeres gæster. Vi laver maden på stedet og rydder op bagefter.',
    en: 'Private chef and catering in Klampenborg – for a summer party near Bellevue, dinner in your villa or an event for your guests. We cook on site and clean up afterwards.',
  },
  gentofte: {
    da: 'Privat kok og catering i Gentofte til private middage, konfirmationer og firmaarrangementer. Vores kok sammensætter menuen til anledningen – med hensyn til allergier og kostbehov.',
    en: 'Private chef and catering in Gentofte for private dinners, confirmations and company events. Our chef designs the menu for the occasion – with care for allergies and dietary needs.',
  },
  jaegersborg: {
    da: 'I Jægersborg kommer vores kok hjem til dig og laver middagen, så du kan være vært uden at stå i køkkenet. Til fødselsdage, familiefester og weekendens middagsselskab.',
    en: 'In Jægersborg our chef comes to your home and cooks dinner, so you can host without standing in the kitchen. For birthdays, family parties and weekend dinner parties.',
  },
  'kongens-lyngby': {
    da: 'Privat kok og firmacatering i Kongens Lyngby – fra middagen derhjemme ved Lyngby Sø til frokosten for virksomheden i byen. Menuen tilpasses anledningen og jeres gæster.',
    en: 'Private chef and corporate catering in Kongens Lyngby – from dinner at home by Lyngby Lake to lunch for a company in town. The menu is adapted to the occasion and your guests.',
  },
  sorgenfri: {
    da: 'I Sorgenfri laver vores kok fine dining hjemme hos dig – til havefesten, jubilæet eller den rolige middag for to. Vi klarer indkøb, madlavning og oprydning.',
    en: 'In Sorgenfri our chef cooks fine dining in your home – for a garden party, an anniversary or a quiet dinner for two. We take care of the shopping, the cooking and the cleanup.',
  },
  virum: {
    da: 'Privat kok i Virum til middagsselskaber og familiefester i villaen tæt på Furesøen. Vi sammensætter menuen med dig, laver maden på stedet og serverer efter aftale.',
    en: 'Private chef in Virum for dinner parties and family celebrations in a villa near Lake Furesø. We design the menu with you, cook on site and serve by arrangement.',
  },
  taarbaek: {
    da: 'En privat middag i Taarbæk mellem skov og vand: vores kok laver maden i dit hjem, så aftenen kan handle om dine gæster. Menu og vin efter jeres ønsker.',
    en: 'A private dinner in Taarbæk between forest and sea: our chef cooks in your home, so the evening can be about your guests. Menu and wine to your wishes.',
  },
  holte: {
    da: 'Privat kok og catering i Holte og Rudersdal – til middagen i villaen, sommerfesten i haven eller virksomhedens arrangement. Menu, omfang og pris aftales med dig.',
    en: 'Private chef and catering in Holte and Rudersdal – for dinner in your villa, a summer party in the garden or a company event. Menu, scope and price are agreed with you.',
  },
  soelleroed: {
    da: 'I Søllerød laver vores kok middagen hjemme hos dig – til jubilæet, familiefesten eller middagsselskabet. Menuen tilpasses anledningen og dine gæster.',
    en: 'In Søllerød our chef cooks dinner in your home – for an anniversary, a family party or a dinner party. The menu is adapted to the occasion and your guests.',
  },
  naerum: {
    da: 'Privat kok i Nærum til fødselsdage, familiefester og firmaets arrangementer. Vores kok laver maden på stedet og tager hensyn til allergier og kostbehov.',
    en: 'Private chef in Nærum for birthdays, family parties and company events. Our chef cooks on site and caters for allergies and dietary needs.',
  },
  skodsborg: {
    da: 'Fine dining hjemme i Skodsborg – mellem kysten og skoven laver vores kok middagen til dig og dine gæster. Vi klarer køkkenet, så du kan nyde aftenen.',
    en: 'Fine dining at home in Skodsborg – between the coast and the forest, our chef cooks dinner for you and your guests. We run the kitchen so you can enjoy the evening.',
  },
  vedbaek: {
    da: 'Privat kok i Vedbæk til middagen i strandvillaen, sommerfesten eller den store familiefest. Vi sammensætter menuen med dig og rydder op, når gæsterne er gået.',
    en: 'Private chef in Vedbæk for dinner in a seaside villa, a summer party or a big family celebration. We design the menu with you and clean up when the guests have gone.',
  },
  birkeroed: {
    da: 'Privat kok og catering i Birkerød – til middagen derhjemme, havefesten eller virksomhedens frokost. Menu og omfang aftales efter jeres ønsker.',
    en: 'Private chef and catering in Birkerød – for dinner at home, a garden party or a company lunch. Menu and scope are arranged to your wishes.',
  },
  hoersholm: {
    da: 'I Hørsholm laver vores kok maden hjemme hos dig eller i virksomheden – fra den intime middag til julefrokosten. Vin, servering og oprydning efter aftale.',
    en: 'In Hørsholm our chef cooks at your home or your business – from an intimate dinner to the Christmas lunch. Wine, service and cleanup by arrangement.',
  },
  rungsted: {
    da: 'Privat kok i Rungsted til middage med udsigt over Øresund, sommerfester og jubilæer. Vores kok laver fine dining i dit hjem og tilpasser menuen til dine gæster.',
    en: 'Private chef in Rungsted for dinners overlooking the Øresund, summer parties and anniversaries. Our chef cooks fine dining in your home and adapts the menu to your guests.',
  },
  alleroed: {
    da: 'Privat kok og catering i Allerød – til familiefesten, jubilæet eller firmaets arrangement. Vi laver maden på stedet, serverer efter aftale og rydder op bagefter.',
    en: 'Private chef and catering in Allerød – for a family party, an anniversary or a company event. We cook on site, serve by arrangement and clean up afterwards.',
  },
};

// Local depth for the 5 towns closest to Google's page one (Nov 2026): unique local text + FAQ.
// Only facts about the towns themselves and confirmed WiCare claims — no fake references or prices.
type DepthCopy = { heading: string; text: string[]; faq: { q: string; a: string }[] };
export const areaDepth: Record<string, { da: DepthCopy; en: DepthCopy }> = {
  jaegersborg: {
    da: {
      heading: 'Privat kok i Jægersborg – middagen uden at stå i køkkenet',
      text: [
        'Jægersborg ligger mellem Gentofte og Lyngby, tæt på Jægersborg Dyrehave og med Jægersborg Allé som byens travle hovedgade. Mange inviterer til middag i villaen eller rækkehuset – til fødselsdagen, jubilæet eller weekendens middagsselskab – og vil hellere være sammen med gæsterne end stå ved komfuret.',
        'Vores kok, Wiktoria R., kommer hjem til jer i Jægersborg, laver maden i jeres køkken, serverer efter aftale og rydder op bagefter. Menuen sammensættes ud fra jeres ønsker, sæsonens råvarer og eventuelle allergier – og prisen aftales, før vi går i gang.',
      ],
      faq: [
        { q: 'Kommer jeres kok hjem til os i Jægersborg?', a: 'Ja. Jægersborg er en del af vores faste område i Gentofte Kommune. Kokken laver maden i jeres køkken og rydder op bagefter.' },
        { q: 'Kan I lave mad til en fødselsdag eller et jubilæum?', a: 'Ja. Fra en middag for få gæster til en større fest – vi tilpasser menuen og omfanget til anledningen.' },
        { q: 'Hvad koster en privat kok i Jægersborg?', a: 'Det afhænger af menu, antal gæster, og om I ønsker vin og servering. Vi har ingen faste pakker og aftaler altid prisen med jer på forhånd.' },
      ],
    },
    en: {
      heading: 'Private chef in Jægersborg – dinner without the kitchen duty',
      text: [
        'Jægersborg sits between Gentofte and Lyngby, close to the Jægersborg Dyrehave deer park, with Jægersborg Allé as its busy high street. Many hosts invite guests to dinner in the villa or townhouse – for a birthday, an anniversary or a weekend dinner party – and would rather spend the evening with their guests than at the stove.',
        'Our chef, Wiktoria R., comes to your home in Jægersborg, cooks in your kitchen, serves by arrangement and cleans up afterwards. The menu is built around your wishes, seasonal produce and any allergies – and the price is agreed before we start.',
      ],
      faq: [
        { q: 'Will your chef come to our home in Jægersborg?', a: 'Yes. Jægersborg is part of our regular area in Gentofte Municipality. The chef cooks in your kitchen and cleans up afterwards.' },
        { q: 'Can you cook for a birthday or an anniversary?', a: 'Yes. From a dinner for a few guests to a bigger party – we adapt the menu and scope to the occasion.' },
        { q: 'What does a private chef cost in Jægersborg?', a: 'It depends on the menu, the number of guests and whether you would like wine and service. We have no fixed packages and always agree the price with you in advance.' },
      ],
    },
  },
  klampenborg: {
    da: {
      heading: 'Privat kok i Klampenborg – fra villaen til sommerfesten',
      text: [
        'Klampenborg byder på noget af det smukkeste nord for København: Bellevue Strand, Dyrehaven og villaerne langs Strandvejen. Det er rammen om mange middagsselskaber, havefester og sommerfester, hvor værterne gerne vil kunne nyde aftenen sammen med deres gæster.',
        'Vores kok, Wiktoria R., har 13+ års erfaring fra professionelle køkkener – bl.a. som souschef i Folketinget og i Michelin-restauranter. Hun sammensætter menuen sammen med jer, laver maden på stedet og står for servering og vin efter aftale.',
      ],
      faq: [
        { q: 'Kan I lave mad til en havefest eller sommerfest i Klampenborg?', a: 'Ja. Have- og sommerfester er en af vores anledninger – fra tapas og buffet til en siddende middag.' },
        { q: 'Kan vi få vin til maden?', a: 'Ja. Vi kan sammensætte vin til menuen efter aftale.' },
        { q: 'Laver I også mad til virksomheder i Klampenborg?', a: 'Ja – fx kundemiddage, receptioner og firmafrokoster. Menu, omfang og pris aftales med jer.' },
      ],
    },
    en: {
      heading: 'Private chef in Klampenborg – from the villa to the summer party',
      text: [
        'Klampenborg has some of the most beautiful surroundings north of Copenhagen: Bellevue Beach, the Dyrehaven deer park and the villas along Strandvejen. It is the setting for many dinner parties, garden parties and summer parties where the hosts want to enjoy the evening with their guests.',
        'Our chef, Wiktoria R., has 13+ years of experience in professional kitchens – including as sous-chef at the Danish Parliament and in Michelin-starred restaurants. She designs the menu with you, cooks on site and handles service and wine by arrangement.',
      ],
      faq: [
        { q: 'Can you cater a garden party or summer party in Klampenborg?', a: 'Yes. Garden and summer parties are one of our occasions – from tapas and buffets to a seated dinner.' },
        { q: 'Can we have wine with the food?', a: 'Yes. We can pair wine with the menu by arrangement.' },
        { q: 'Do you also cater for companies in Klampenborg?', a: 'Yes – for example client dinners, receptions and company lunches. Menu, scope and price are agreed with you.' },
      ],
    },
  },
  holte: {
    da: {
      heading: 'Privat kok i Holte – middage ved søerne og i villaen',
      text: [
        'Holte er hjertet af Rudersdal med Furesøen, Vejlesø og Geels Skov som naboer og masser af villaer med plads til gæster. Her holder man både den runde fødselsdag, konfirmationen og sommerfesten i haven – og virksomhederne i området holder møder, receptioner og julefrokoster.',
        'Med en privat kok fra WiCare får I en menu, der passer til netop jeres anledning. Vores kok laver maden hos jer, tager hensyn til allergier og kostbehov og rydder op bagefter, så I kan være værter uden travlhed.',
      ],
      faq: [
        { q: 'Laver I mad til konfirmationer i Holte?', a: 'Ja. Konfirmationsfrokost eller -middag derhjemme eller i et lokale efter jeres valg. Ring gerne i god tid – mange konfirmationer ligger de samme weekender i foråret.' },
        { q: 'Kan I lave julefrokost for en virksomhed i Holte?', a: 'Ja. Firmajulefrokost på kontoret eller et sted efter jeres valg – menu, omfang og pris aftales med jer.' },
        { q: 'Hvor mange gæster kan I lave mad til?', a: 'Vi tilpasser os jeres selskab. Fortæl os, hvor mange I bliver, så finder vi den rette løsning.' },
      ],
    },
    en: {
      heading: 'Private chef in Holte – dinners by the lakes and in the villa',
      text: [
        'Holte is the heart of Rudersdal, with Lake Furesø, Vejlesø and Geels Skov forest on its doorstep and plenty of villas with room for guests. It is where people hold the milestone birthday, the confirmation and the summer party in the garden – and local companies hold meetings, receptions and Christmas lunches.',
        'With a private chef from WiCare you get a menu made for your occasion. Our chef cooks at your place, caters for allergies and dietary needs and cleans up afterwards, so you can host without the rush.',
      ],
      faq: [
        { q: 'Do you cook for confirmations in Holte?', a: 'Yes. A confirmation lunch or dinner at home or at a venue of your choice. Call early – many confirmations fall on the same spring weekends.' },
        { q: 'Can you do a company Christmas lunch in Holte?', a: 'Yes. A company Christmas lunch at the office or a venue of your choice – menu, scope and price are agreed with you.' },
        { q: 'How many guests can you cook for?', a: 'We adapt to your party. Tell us how many you will be and we will find the right solution.' },
      ],
    },
  },
  gentofte: {
    da: {
      heading: 'Privat kok og catering i Gentofte – derhjemme og i virksomheden',
      text: [
        'Gentofte – med Gentofte Sø, Bernstorffparken og de rolige villaveje – er et af de steder, hvor mange vælger at holde middagen derhjemme. Det gælder både den intime middag for to, familiens konfirmation og firmaets kundearrangement.',
        'Vores kok, Wiktoria R., sammensætter menuen ud fra jeres smag og anledningen, laver maden på stedet og kan stå for vin og servering. Der er ingen faste pakker – omfang og pris aftales med jer, før vi går i gang.',
      ],
      faq: [
        { q: 'Hvad koster catering i Gentofte?', a: 'Prisen afhænger af menu, antal gæster, og om I ønsker servering og vin. Ring til os, så får I en pris på netop jeres arrangement.' },
        { q: 'Kan I lave mad til en reception eller et kundearrangement i Gentofte?', a: 'Ja. Vi laver catering til receptioner, møder og kundemiddage – på kontoret eller et sted efter jeres valg.' },
        { q: 'Kan I tage hensyn til allergier og vegetarer?', a: 'Ja. Menuen tilpasses allergier, vegetarer og andre kostbehov – fortæl os om dem, når I ringer.' },
      ],
    },
    en: {
      heading: 'Private chef and catering in Gentofte – at home and at work',
      text: [
        'Gentofte – with Lake Gentofte, Bernstorff Park and its quiet residential streets – is one of the places where many people choose to hold dinner at home. That goes for an intimate dinner for two, the family confirmation and the company’s client event.',
        'Our chef, Wiktoria R., designs the menu around your taste and the occasion, cooks on site and can handle wine and service. There are no fixed packages – scope and price are agreed with you before we start.',
      ],
      faq: [
        { q: 'What does catering cost in Gentofte?', a: 'It depends on the menu, the number of guests and whether you would like service and wine. Call us and you will get a price for your specific event.' },
        { q: 'Can you cater a reception or client event in Gentofte?', a: 'Yes. We cater receptions, meetings and client dinners – at the office or a venue of your choice.' },
        { q: 'Can you cater for allergies and vegetarians?', a: 'Yes. The menu is adapted to allergies, vegetarians and other dietary needs – just tell us when you call.' },
      ],
    },
  },
  'kongens-lyngby': {
    da: {
      heading: 'Privat kok og firmacatering i Kongens Lyngby',
      text: [
        'Kongens Lyngby er både et sted at bo – omkring Lyngby Sø og Bagsværd Sø – og et travlt erhvervsområde med DTU og mange virksomheder og kontorer. Derfor laver vi både private middage og catering til møder, frokoster og firmafester i Lyngby.',
        'Til virksomheder sammensætter vi menuen efter antal deltagere, tidspunkt og kostbehov, og vi kan stå for anretning, servering og oprydning efter aftale. Til private middage kommer kokken hjem til jer og laver maden i jeres køkken.',
      ],
      faq: [
        { q: 'Laver I firmafrokost og forplejning til møder i Lyngby?', a: 'Ja. Frokost til møder, workshops og hele teamet – anrettet hos jer. Omfang og pris aftales med jer.' },
        { q: 'Kan I lave julefrokost for virksomheden i Lyngby?', a: 'Ja. Firmajulefrokost på kontoret eller et sted efter jeres valg – book gerne i god tid, da december er travl.' },
        { q: 'Kommer kokken også hjem til private i Lyngby?', a: 'Ja. Vores kok laver middagen hjemme hos jer – fra middagen for to til fødselsdagen med familien.' },
      ],
    },
    en: {
      heading: 'Private chef and corporate catering in Kongens Lyngby',
      text: [
        'Kongens Lyngby is both a place to live – around Lake Lyngby and Lake Bagsværd – and a busy business area with DTU and many companies and offices. That is why we cook both private dinners and catering for meetings, lunches and company parties in Lyngby.',
        'For companies we plan the menu around the number of guests, the time of day and dietary needs, and we can handle plating, service and cleanup by arrangement. For private dinners the chef comes to your home and cooks in your kitchen.',
      ],
      faq: [
        { q: 'Do you cater company lunches and meetings in Lyngby?', a: 'Yes. Lunch for meetings, workshops or the whole team – served at your place. Scope and price are agreed with you.' },
        { q: 'Can you do a company Christmas lunch in Lyngby?', a: 'Yes. A company Christmas lunch at the office or a venue of your choice – book early, December gets busy.' },
        { q: 'Does the chef also cook for private homes in Lyngby?', a: 'Yes. Our chef cooks dinner in your home – from a dinner for two to the family birthday.' },
      ],
    },
  },
};
