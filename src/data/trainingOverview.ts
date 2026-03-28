export interface TrainingCourse {
  category: 'core' | 'specialized';
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
    category: 'core',
    badge: 'NEJPOPULÁRNĚJŠÍ',
    badgeClass: 'popular',
    title: 'Praktické školení AI pro firmy',
    subtitle: 'Základní a nejžádanější firemní školení',
    description: 'Praktický kurz pro týmy, které chtějí AI začít používat bezpečně, srozumitelně a hned v každodenní práci.',
    meta: ['8 hodin', 'do 15 osob', 'u vás ve firmě', '19 900 Kč'],
    href: '/prakticke-skoleni-ai-pro-firmy/',
    featured: true,
  },
  {
    category: 'core',
    badge: 'PRO ÚŘADY',
    badgeClass: 'verejna-sprava',
    title: 'Praktické školení AI pro města, obce a veřejnou správu',
    subtitle: 'Školení přizpůsobené prostředí veřejné správy',
    description: 'Praktické využití AI v agendách úřadů s důrazem na bezpečnost dat, pravidla a českou praxi.',
    meta: ['8 hodin', 'do 15 osob', 'prezenčně', '19 900 Kč'],
    href: '/ai-pro-verejnou-spravu/',
  },
  {
    category: 'specialized',
    badge: 'COPILOT',
    badgeClass: 'copilot',
    title: 'Microsoft Copilot školení pro firmy',
    subtitle: 'Word, Excel, Outlook, Teams a Copilot Chat',
    description: 'Specializované školení pro firmy, které chtějí začít Microsoft 365 Copilot využívat naplno a smysluplně.',
    meta: ['8 hodin', 'do 15 osob', 'prezenčně', '24 900 Kč'],
    href: '/microsoft-copilot-pro-firmy/',
  },
  {
    category: 'core',
    badge: 'MARKETING',
    badgeClass: 'marketing',
    title: 'Marketing & PR s AI – expertní školení pro firmy',
    subtitle: 'Obsah, kampaně, sociální sítě, grafika i video',
    description: 'Pokročilejší školení pro marketingové a komunikační týmy, které chtějí AI zapojit do tvorby a výkonu.',
    meta: ['8 hodin', 'do 10 osob', 'prezenčně', '29 900 Kč'],
    href: '/marketing-pr-ai/',
  },
  {
    category: 'core',
    badge: 'MANAŽEŘI',
    badgeClass: 'manazery',
    title: 'AI pro manažery – rozhodování a řízení rizik',
    subtitle: 'Rychlý strategický přehled pro vedení firmy',
    description: 'Kurz pro CEO, management a vedoucí, kteří potřebují pochopit přínosy, rizika a rozumné další kroky.',
    meta: ['4 hodiny', 'do 10 osob', 'online / ve firmě', 'od 9 800 Kč'],
    href: '/ai-pro-manazery/',
  },
  {
    category: 'core',
    badge: 'BEZPEČNOST',
    badgeClass: 'pravo',
    title: 'AI - právo, bezpečnost a autorská práva',
    subtitle: 'GDPR, AI Act, autorská práva a práce s daty v běžné praxi',
    description: 'Dvouhodinové školení pro firmy, které chtějí dát lidem srozumitelný rámec pro bezpečnější práci s AI bez zbytečného právnického balastu.',
    meta: ['2 hodiny', 'do 30 osob', 'online / ve firmě', 'od 9 800 Kč'],
    href: '/pravo-v-ai/',
  },
  {
    category: 'specialized',
    badge: 'CHATGPT',
    badgeClass: 'chatgpt',
    title: 'ChatGPT školení pro firmy',
    subtitle: 'Psaní, shrnutí, rešerše, soubory, data i obrázky',
    description: 'Specializované školení pro firmy, které chtějí z ChatGPT udělat skutečný pracovní nástroj pro běžnou agendu.',
    meta: ['8 hodin', 'do 15 osob', 'u vás ve firmě', '19 900 Kč'],
    href: '/chatgpt-pro-firmy/',
  },
  {
    category: 'specialized',
    badge: 'CLAUDE',
    badgeClass: 'claude',
    title: 'Claude školení pro firmy',
    subtitle: 'Projects, Artifacts, Skills a kvalitní výstupy',
    description: 'Praktické školení zaměřené na Claude a jeho silné stránky v každodenní firemní práci a opakovaných scénářích.',
    meta: ['8 hodin', 'do 15 osob', 'u vás ve firmě', '19 900 Kč'],
    href: '/claude-pro-firmy/',
  },
  {
    category: 'specialized',
    badge: 'GEMINI',
    badgeClass: 'gemini',
    title: 'Gemini školení pro firmy',
    subtitle: 'Rešerše, dokumenty, NotebookLM a práce se zdroji',
    description: 'Kurz pro firmy, které chtějí Gemini využít při práci s podklady, souhrny, dokumenty a Google prostředím.',
    meta: ['8 hodin', 'do 15 osob', 'u vás ve firmě', '19 900 Kč'],
    href: '/gemini-pro-firmy/',
  },
  {
    category: 'specialized',
    badge: 'VIBE CODING',
    badgeClass: 'vibe',
    title: 'Workshop vibe codingu pro firmy',
    subtitle: 'Weby, interní nástroje, automatizace a rychlé prototypy s AI',
    description: 'Celodenní workshop pro týmy, které chtějí s AI navrhovat a stavět weby, interní nástroje a prototypy, vyznat se v Claude Code, Codex, Cursor, Lovable, GitHubu, Vercelu i Supabase a vědět, kde má vibe coding skutečný přínos. Od nápadu k funkčnímu prototypu bez zdlouhavého vývoje. Vhodné pro týmy, které chtějí rychleji ověřovat nápady a méně čekat na externí vývoj.',
    meta: ['celý den', 'do 15 osob', 'online / ve firmě', '29 000 Kč'],
    href: '/workshop-vibe-codingu-pro-firmy/',
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
