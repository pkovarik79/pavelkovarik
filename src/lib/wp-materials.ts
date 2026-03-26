import fs from 'node:fs';
import path from 'node:path';

type WpPageExport = {
  content: string;
};

export type MaterialHubCard = {
  title: string;
  href: string;
  description: string;
  linkLabel: string;
  icon: string;
};

export type PromptCategory = {
  title: string;
  slug: string;
  introHtml: string;
  prompts: PromptItem[];
};

export type PromptItem = {
  title: string;
  description: string;
  content: string;
};

export type ToolCategory = {
  key: string;
  label: string;
};

export type ToolItem = {
  category: string;
  badge: string;
  title: string;
  href: string;
  description: string;
};

const rootDir = process.cwd();

function readWpPage(fileName: string): string {
  const filePath = path.join(rootDir, 'wp_content', 'pages', fileName);
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = JSON.parse(raw) as WpPageExport;
  return parsed.content;
}

function stripBoilerplate(html: string): string {
  return html
    .replace(/<link[^>]*>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .trim();
}

function stripTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function toSlug(label: string): string {
  return stripTags(label)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getMaterialHubData() {
  const content = stripBoilerplate(readWpPage('materialy.json'));
  const cardMatches = [
    ...content.matchAll(
      /<h2><a href="([^"]+)">([^<]+)<\/a><\/h2>\s*<p>([\s\S]*?)<\/p>\s*<a href="([^"]+)">([^<]+)<\/a>/g,
    ),
  ];

  const cards: MaterialHubCard[] = cardMatches.slice(0, 2).map((match, index) => ({
    href: match[1].replace('/materialy/prompty/', '/prompty/').replace('/materialy/ai-nastroje/', '/ai-nastroje/'),
    title: stripTags(match[2]),
    description: stripTags(match[3]),
    linkLabel: stripTags(match[5]),
    icon: index === 0 ? 'layers' : 'terminal',
  }));

  const prepMatch = content.match(
    /<h3>([^<]+)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>[\s\S]*?Checklisty pro zavádění AI[\s\S]*?E-booky[\s\S]*?Legislativa[\s\S]*?<a href="([^"]+)"/,
  );

  return {
    cards,
    upcomingTitle: prepMatch ? stripTags(prepMatch[1]) : 'Další materiály připravuji',
    upcomingDescription: prepMatch
      ? stripTags(prepMatch[2])
      : 'Obsah webu neustále rozšiřuji. Brzy přibudou další sekce, na kterých pracuji.',
    linkedinHref: prepMatch?.[3] ?? 'https://www.linkedin.com/in/pkovarik/',
    upcomingTags: ['Checklisty pro zavádění AI', 'E-booky', 'Legislativa'],
  };
}

export function getPromptLibraryData() {
  const content = stripBoilerplate(readWpPage('prompty.json'));
  const categoryMatches = [...content.matchAll(/<h3>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3>|$)/g)];
  const filterMatches = [...content.matchAll(/<button data-cat="([^"]+)">([^<]+)<\/button>/g)];

  const filters = filterMatches.map((match) => ({
    key: match[1],
    label: stripTags(match[2]),
  }));

  const categoryKeys = filters
    .map((filter) => filter.key)
    .filter((key) => key !== 'all');

  const categories: PromptCategory[] = categoryMatches.map((match, index) => {
    const title = stripTags(match[1]);
    const body = match[2];
    const promptMatches = [
      ...body.matchAll(
        /<details>\s*<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>\s*([\s\S]*?)<button>[\s\S]*?<\/button>\s*<\/details>/g,
      ),
    ];

    const introHtml = body
      .replace(/<details>[\s\S]*?<\/details>/g, '')
      .trim();

    const prompts = promptMatches.map((item) => ({
      title: stripTags(item[1]),
      description: stripTags(item[2]),
      content: stripTags(item[3]),
    }));

    return {
      title,
      slug: categoryKeys[index] ?? toSlug(title),
      introHtml,
      prompts,
    };
  });

  return { filters, categories };
}

export function getAiToolsData() {
  const content = stripBoilerplate(readWpPage('ai-nastroje.json'));
  const filterMatches = [...content.matchAll(/<button data-cat="([^"]+)">([^<]+)<\/button>/g)];
  const articleMatches = [
    ...content.matchAll(
      /<article data-cat="([^"]+)">\s*([\s\S]*?)\s*<h4><a href="([^"]+)"[^>]*>([\s\S]*?)<\/a><\/h4>\s*<p>([\s\S]*?)<\/p>\s*<\/article>/g,
    ),
  ];

  const filters: ToolCategory[] = filterMatches.map((match) => ({
    key: match[1],
    label: stripTags(match[2]),
  }));

  const tools: ToolItem[] = articleMatches.map((match) => ({
    category: match[1],
    badge: stripTags(match[2]),
    href: match[3],
    title: stripTags(match[4]),
    description: stripTags(match[5]),
  }));

  return { filters, tools };
}
