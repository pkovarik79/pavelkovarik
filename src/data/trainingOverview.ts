export interface TrainingCourse {
  badge: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  description: string;
  meta: string[];
  href: string;
  featured?: boolean;
  note?: string;
}

export interface TrainingFaq {
  question: string;
  answer: string;
}

export interface TrainingLogo {
  src: string;
  alt: string;
}

export const trainingCourses: TrainingCourse[] = [
  {
    badge: 'NEJPOPULÁRNĚJŠÍ',
    badgeClass: 'popular',
    title: 'Praktické školení AI pro firmy',
    subtitle: 'Osmihodinový kurz, který skutečně funguje',
    description: 'Pro úplné začátečníky i mírně pokročilé. Věci, které okamžitě využijete v práci. Součástí jsou i základní pravidla pro práci s AI s ohledem na GDPR a AI Act.',
    meta: ['🕐 8 hodin', '👥 Až 15 osob', '💰 19 900 Kč'],
    href: '/prakticke-skoleni-ai-pro-firmy/',
    featured: true,
  },
  {
    badge: 'PRO ÚŘADY',
    badgeClass: 'verejna-sprava',
    title: 'Praktické školení AI pro města, obce a veřejnou správu',
    subtitle: 'AI pro úřady, města a obce bezpečně',
    description: 'Praktické použití AI v agendách úřadů, důraz na bezpečnost dat, postupy a příklady z české praxe.',
    meta: ['🕐 8 hodin', '👥 Až 15 osob', '💰 19 900 Kč'],
    href: '/ai-pro-verejnou-spravu/',
    featured: true,
  },
  {
    badge: 'COPILOT',
    badgeClass: 'copilot',
    title: 'Microsoft Copilot školení pro firmy',
    subtitle: 'Využijte potenciál nástrojů Microsoft 365 s pomocí AI',
    description: 'Excel, Word, Outlook, PowerPoint a Teams s podporou AI. Praktické ukázky na firemních scénářích.',
    meta: ['🕐 8 hodin', '👥 Až 15 osob', '💰 24 900 Kč'],
    href: '/microsoft-copilot-pro-firmy/',
  },
  {
    badge: 'MARKETING',
    badgeClass: 'marketing',
    title: 'Marketing & PR s AI – expertní školení pro firmy',
    subtitle: 'Zautomatizujte firemní marketing',
    description: 'Texty, reklamy, sociální sítě, grafika, video a SEO s pomocí AI nástrojů. Praktické ukázky na vašem obsahu.',
    meta: ['🕐 8 hodin', '👥 Až 10 osob', '💰 29 900 Kč'],
    href: '/marketing-pr-ai/',
  },
  {
    badge: 'MANAŽEŘI',
    badgeClass: 'manazery',
    title: 'AI pro manažery – rozhodování a řízení rizik (online)',
    subtitle: 'Rychlý přehled pro vedení firmy',
    description: 'Školení pro vedení firem, které chce rychle pochopit, kde AI opravdu pomůže, jaká jsou rizika a jak začít bez zbytečných chyb.',
    meta: ['🕐 4 hodiny', '👥 Až 10 osob', '💰 9 800 Kč'],
    href: '/ai-pro-manazery/',
    note: '✨ Bonus: 30minutová konzultace do 30 dnů\nForma: online přes Microsoft Teams nebo Google Meet. Po domluvě i u vás ve firmě.',
  },
  {
    badge: 'BEZPEČNOST',
    badgeClass: 'pravo',
    title: 'AI bezpečnost a pravidla pro firmy (online)',
    subtitle: 'Praktické minimum pro bezpečnější práci s AI',
    description: 'Stručné a praktické školení k tomu, co do AI patří, co už ne, jak pracovat s daty a jak si ve firmě nastavit rozumná pravidla bez zbytečné byrokracie.',
    meta: ['🕐 2 hodiny', '👥 Až 30 osob', '💰 9 800 Kč'],
    href: '/pravo-v-ai/',
    note: 'Forma: online přes Microsoft Teams nebo Google Meet. Pokud vám to dává větší smysl, připravím i prezenční variantu ve vaší firmě.',
  },
];

export const trainingLogos: TrainingLogo[] = [
  { src: '/images/loga/ceska-sporitelna.webp', alt: 'Česká spořitelna' },
  { src: '/images/loga/partners.webp', alt: 'Partners' },
  { src: '/images/loga/ptacek.webp', alt: 'Ptáček' },
  { src: '/images/loga/dopravni-podnik-pardubice.webp', alt: 'Dopravní podnik města Pardubice' },
  { src: '/images/loga/broker-consulting.webp', alt: 'Broker Consulting' },
  { src: '/images/loga/proventiacz.webp', alt: 'Proventia' },
  { src: '/images/loga/dt-vyhybkarna.webp', alt: 'DT Výhýbkárna a strojírna' },
  { src: '/images/loga/khk-pardubicky-kraj.webp', alt: 'Krajská hospodářská komora Pardubického kraje' },
  { src: '/images/loga/rubikon.webp', alt: 'Rubikon' },
  { src: '/images/loga/narodni-strojirenskyy-klastr.webp', alt: 'Národní strojírenský klastr' },
  { src: '/images/loga/mm-reality.webp', alt: 'M&M Reality' },
  { src: '/images/loga/matikon.webp', alt: 'Matikon' },
  { src: '/images/loga/vak-hodonin.webp', alt: 'VAK Hodonín' },
  { src: '/images/loga/veacom.webp', alt: 'VEACOM' },
  { src: '/images/loga/ibv-nbs.webp', alt: 'IBV NBS' },
  { src: '/images/loga/makovec.webp', alt: 'Makovec' },
];

export const trainingFaqs: TrainingFaq[] = [
  {
    question: 'Jak dlouho školení trvá?',
    answer: 'Standardní kurz má 8 hodin, ale délku můžu přizpůsobit vašim potřebám. Nabízím i kratší online bloky nebo delší varianty na míru.',
  },
  {
    question: 'Kolik školení stojí?',
    answer: 'Základní program stojí 19 900 Kč pro skupinu do 15 osob. U specializovaných školení se cena liší podle tématu, formátu a rozsahu.',
  },
  {
    question: 'Je školení vhodné pro úplné začátečníky?',
    answer: 'Ano. Většina účastníků přichází bez předchozích zkušeností s AI nástroji. Tempo i obsah přizpůsobím úrovni vašeho týmu.',
  },
  {
    question: 'Kde školení probíhá?',
    answer: 'Většinu školení vedu přímo u vás ve firmě kdekoli v České republice. Vybrané programy nabízím i online přes Microsoft Teams nebo Google Meet.',
  },
  {
    question: 'Nevíme, které školení vybrat',
    answer: 'To je běžné. Stačí mi stručně popsat, co ve firmě řešíte, a doporučím vám vhodný formát. Ozvat se mi můžete přes stránku Kontakt.',
  },
];
