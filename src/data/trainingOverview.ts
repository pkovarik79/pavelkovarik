export interface TrainingCourse {
  category: 'primary' | 'workshop' | 'supplement' | 'tool';
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
    category: 'primary',
    badge: 'AI PRO FIRMY',
    badgeClass: 'popular',
    title: 'AI pro firmy',
    subtitle: 'Základní praktické školení pro firemní týmy',
    description: 'Praktický kurz pro týmy, které chtějí AI začít používat bezpečně, srozumitelně a hned v každodenní práci.',
    meta: ['8 hodin', 'do 15 osob', 'u vás ve firmě', '19 900 Kč'],
    href: '/prakticke-skoleni-ai-pro-firmy/',
  },
  {
    category: 'primary',
    badge: 'VEŘEJNÁ SPRÁVA',
    badgeClass: 'verejna-sprava',
    title: 'AI pro veřejnou správu',
    subtitle: 'Školení přizpůsobené prostředí veřejné správy',
    description: 'Praktické využití AI v agendách úřadů s důrazem na bezpečnost dat, pravidla a českou praxi.',
    meta: ['8 hodin', 'do 15 osob', 'prezenčně', '19 900 Kč'],
    href: '/ai-pro-verejnou-spravu/',
  },
  {
    category: 'primary',
    badge: 'MICROSOFT COPILOT',
    badgeClass: 'copilot',
    title: 'Microsoft Copilot pro firmy',
    subtitle: 'Word, Excel, Outlook, Teams a Copilot Chat',
    description: 'Specializované školení pro firmy, které chtějí začít Microsoft 365 Copilot využívat naplno a smysluplně.',
    meta: ['8 hodin', 'do 15 osob', 'prezenčně', '24 900 Kč'],
    href: '/microsoft-copilot-pro-firmy/',
  },
  {
    category: 'workshop',
    badge: 'MARKETING',
    badgeClass: 'marketing',
    title: 'Marketing & PR s AI – expertní školení pro firmy',
    subtitle: 'Obsah, kampaně, sociální sítě, grafika i video',
    description: 'Pokročilejší školení pro marketingové a komunikační týmy, které chtějí AI zapojit do tvorby a výkonu.',
    meta: ['8 hodin', 'do 10 osob', 'prezenčně', '29 900 Kč'],
    href: '/marketing-pr-ai/',
  },
  {
    category: 'tool',
    badge: 'CHATGPT',
    badgeClass: 'chatgpt',
    title: 'ChatGPT školení pro firmy',
    subtitle: 'Praktická práce s texty, daty a soubory',
    description: 'Stručný kurz zaměřený na to, co lidé ve firmě používají nejčastěji.',
    meta: ['8 hodin', 'u vás ve firmě'],
    href: '/chatgpt-pro-firmy/',
  },
  {
    category: 'tool',
    badge: 'CLAUDE',
    badgeClass: 'claude',
    title: 'Claude školení pro firmy',
    subtitle: 'Delší texty, workflow a kvalitní výstupy',
    description: 'Kurz pro týmy, které chtějí lepší texty a práci s dokumenty.',
    meta: ['8 hodin', 'u vás ve firmě'],
    href: '/claude-pro-firmy/',
  },
  {
    category: 'tool',
    badge: 'GEMINI',
    badgeClass: 'gemini',
    title: 'Gemini školení pro firmy',
    subtitle: 'Rešerše, zdroje a ekosystém Google',
    description: 'Stručné školení pro práci s podklady a vyhledáváním informací.',
    meta: ['8 hodin', 'u vás ve firmě'],
    href: '/gemini-pro-firmy/',
  },
  {
    category: 'workshop',
    badge: 'VIBE CODING',
    badgeClass: 'vibe',
    title: 'Workshop vibe codingu pro firmy',
    subtitle: 'Weby, interní nástroje, automatizace a rychlé prototypy s AI',
    description: 'Celodenní workshop pro týmy, které chtějí s AI rychle navrhovat weby, interní nástroje a prototypy.',
    meta: ['celý den', 'do 15 osob', 'online / ve firmě', '29 000 Kč'],
    href: '/workshop-vibe-codingu-pro-firmy/',
  },
];

export const trainingLogos: TrainingLogo[] = [
  { src: '/images/loga/ceska-sporitelna.webp', alt: 'Česká spořitelna' },
  { src: '/images/loga/partners.webp', alt: 'Partners' },
  { src: '/images/loga/uzis.webp', alt: 'ÚZIS' },
  { src: '/images/loga/cis.webp', alt: 'Česká internistická společnost' },
  { src: '/images/loga/broker-consulting.webp', alt: 'Broker Consulting' },
  { src: '/images/loga/ptacek.webp', alt: 'Ptáček' },
  { src: '/images/loga/mm-reality.webp', alt: 'M&M Reality' },
  { src: '/images/loga/dopravni-podnik-pardubice.webp', alt: 'Dopravní podnik města Pardubice' },
  { src: '/images/loga/narodni-strojirenskyy-klastr.webp', alt: 'Národní strojírenský klastr' },
  { src: '/images/loga/khk-pardubicky-kraj.webp', alt: 'Krajská hospodářská komora Pardubického kraje' },
  { src: '/images/loga/vak-hodonin.webp', alt: 'VAK Hodonín' },
  { src: '/images/loga/matikon.webp', alt: 'Matikon' },
  { src: '/images/loga/proventiacz.webp', alt: 'Proventia' },
  { src: '/images/loga/rubikon.webp', alt: 'Rubikon' },
  { src: '/images/loga/veacom.webp', alt: 'VEACOM' },
  { src: '/images/loga/aurel.webp', alt: 'Aurel' },
  { src: '/images/loga/linamar.webp', alt: 'Linamar Structures Czechia' },
  { src: '/images/loga/dt-vyhybkarna.webp', alt: 'DT Výhýbkárna a strojírna' },
  { src: '/images/loga/ibv-nbs.webp', alt: 'IBV NBS' },
  { src: '/images/loga/makovec.webp', alt: 'Makovec' },
];

export const trainingFaqs: TrainingFaq[] = [
  {
    question: 'Jak dlouho školení trvá?',
    answer: 'Standardní školení trvá obvykle 8 hodin. U kratších briefingů nebo školení na míru záleží na tématu a domluvě.',
  },
  {
    question: 'Kolik školení stojí?',
    answer: 'Základní program stojí 19 900 Kč pro skupinu do 15 osob. U specializovaných školení se cena liší podle tématu, formátu a rozsahu.',
  },
  {
    question: 'Je školení vhodné pro úplné začátečníky?',
    answer: 'Ano. Většina týmů začíná bez větších zkušeností. Obsah i tempo přizpůsobím tomu, jakou úroveň už účastníci mají.',
  },
  {
    question: 'Kde školení probíhá?',
    answer: 'Nejčastěji přímo u vás ve firmě, po celé České republice. Vybrané formáty je možné vést i online.',
  },
  {
    question: 'Lze školení upravit na míru?',
    answer: 'Ano. Obsah upravuji podle vašeho oboru, rolí účastníků, používaných nástrojů i konkrétních situací, které ve firmě řešíte. Více na stránce <a href="/skoleni-na-miru/">Školení na míru</a>.',
  },
];
