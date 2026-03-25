# Inventura WP URL

Zdroj inventury: JSON exporty v `wp_content/pages/*.json` a `wp_content/posts/*.json`.

## Souhrn

- Celkem URL v exportu: `39`
- Stránky: `20`
- Články: `19`
- URL, které v Astro už existují na stejné cestě: `20`
- URL, které v Astro existují, ale na jiné cestě: `19`
- URL chybějící v Astro: `0`

## Hlavní zjištění

- Všechny WordPress stránky mají v Astro odpovídající routu na stejné URL.
- Všech 19 blogových článků v exportu běží na rootu domény, například `/ai-act-2026/`.
- V Astro jsou ty samé články aktuálně pod `/blog/<slug>/`.
- Před přepnutím domény bude potřeba nastavit `301` redirecty ze starých WP URL článků na nové Astro URL, nebo změnit Astro routování tak, aby články zůstaly na původních adresách.
- V Astro navíc existuje stránka `/vibe-coding/`, která v dodaném WP exportu nemá protějšek.

## Stránky

| Typ | Titulek | WP URL | Astro URL | Stav |
| --- | --- | --- | --- | --- |
| page | Domů | `https://pavelkovarik.cz/` | `/` | stejné URL |
| page | AI nástroje pro firmy | `https://pavelkovarik.cz/ai-nastroje/` | `/ai-nastroje/` | stejné URL |
| page | AI pro manažery | `https://pavelkovarik.cz/ai-pro-manazery/` | `/ai-pro-manazery/` | stejné URL |
| page | Praktické školení AI pro města, obce a veřejnou správu | `https://pavelkovarik.cz/ai-pro-verejnou-spravu/` | `/ai-pro-verejnou-spravu/` | stejné URL |
| page | Blog | `https://pavelkovarik.cz/blog/` | `/blog/` | stejné URL |
| page | ChatGPT pro firmy | `https://pavelkovarik.cz/chatgpt-pro-firmy/` | `/chatgpt-pro-firmy/` | stejné URL |
| page | Claude pro firmy | `https://pavelkovarik.cz/claude-pro-firmy/` | `/claude-pro-firmy/` | stejné URL |
| page | Dotace na AI školení - DIGI pro firmu | `https://pavelkovarik.cz/dotace-ai-skoleni-digi-pro-firmu/` | `/dotace-ai-skoleni-digi-pro-firmu/` | stejné URL |
| page | GDPR a ochrana osobních údajů | `https://pavelkovarik.cz/gdpr-ochrana-osobnich-udaju/` | `/gdpr-ochrana-osobnich-udaju/` | stejné URL |
| page | Gemini pro firmy | `https://pavelkovarik.cz/gemini-pro-firmy/` | `/gemini-pro-firmy/` | stejné URL |
| page | Kdo jsem | `https://pavelkovarik.cz/kdo-jsem/` | `/kdo-jsem/` | stejné URL |
| page | Knihovna promptů pro firmy | `https://pavelkovarik.cz/prompty/` | `/prompty/` | stejné URL |
| page | Kontakt | `https://pavelkovarik.cz/kontakt/` | `/kontakt/` | stejné URL |
| page | Marketing a PR s AI | `https://pavelkovarik.cz/marketing-pr-ai/` | `/marketing-pr-ai/` | stejné URL |
| page | Materiály | `https://pavelkovarik.cz/materialy/` | `/materialy/` | stejné URL |
| page | Microsoft Copilot pro firmy | `https://pavelkovarik.cz/microsoft-copilot-pro-firmy/` | `/microsoft-copilot-pro-firmy/` | stejné URL |
| page | Praktické školení AI pro firmy \| Pavel Kovařík | `https://pavelkovarik.cz/prakticke-skoleni-ai-pro-firmy/` | `/prakticke-skoleni-ai-pro-firmy/` | stejné URL |
| page | Právo v AI pro nepravníky | `https://pavelkovarik.cz/pravo-v-ai/` | `/pravo-v-ai/` | stejné URL |
| page | Školení | `https://pavelkovarik.cz/skoleni/` | `/skoleni/` | stejné URL |
| page | Školení na míru | `https://pavelkovarik.cz/skoleni-na-miru/` | `/skoleni-na-miru/` | stejné URL |

## Články

| Typ | Titulek | WP URL | Astro URL | Stav |
| --- | --- | --- | --- | --- |
| post | AI Act 2026: co musí české firmy vědět, než začnou platit pokuty | `https://pavelkovarik.cz/ai-act-2026/` | `/blog/ai-act-2026/` | redirect nebo změna routy |
| post | Claude AI pro prezentace: jak připravit přesvědčivý obsah a ušetřit čas | `https://pavelkovarik.cz/claude-ai-prezentace/` | `/blog/claude-ai-prezentace/` | redirect nebo změna routy |
| post | Co když nás nahradí umělá inteligence? Od strachu k příležitosti | `https://pavelkovarik.cz/umela-inteligence-prace-a-zmena/` | `/blog/umela-inteligence-prace-a-zmena/` | redirect nebo změna routy |
| post | Co umělá inteligence nikdy nepochopí a proč je lidské vědění nenahraditelné | `https://pavelkovarik.cz/umela-inteligence-lidske-vedeni/` | `/blog/umela-inteligence-lidske-vedeni/` | redirect nebo změna routy |
| post | Dotace na školení AI a digitálních dovedností: jak funguje program DIGI pro firmu | `https://pavelkovarik.cz/dotace-na-skoleni-ai-digi-pro-firmu/` | `/blog/dotace-na-skoleni-ai-digi-pro-firmu/` | redirect nebo změna routy |
| post | Etická správa dat v době umělé inteligence: Proč záleží na tom, jaká data sbíráte | `https://pavelkovarik.cz/eticka-sprava-dat-ai/` | `/blog/eticka-sprava-dat-ai/` | redirect nebo změna routy |
| post | Jak dlouhé AI školení vybrat pro firmu? Co rozhoduje o tom, co si lidé ze školení doopravdy odnesou | `https://pavelkovarik.cz/jak-dlouhe-ai-skoleni-pro-firmu/` | `/blog/jak-dlouhe-ai-skoleni-pro-firmu/` | redirect nebo změna routy |
| post | Jak v roce 2026 úspěšně zavést AI ve firmě a proměnit investice do technologií ve skutečné výsledky | `https://pavelkovarik.cz/zavedeni-ai-2026/` | `/blog/zavedeni-ai-2026/` | redirect nebo změna routy |
| post | Jak vybrat AI školení pro firmy, které přinese reálnou změnu | `https://pavelkovarik.cz/jak-vybrat-ai-skoleni-pro-firmy/` | `/blog/jak-vybrat-ai-skoleni-pro-firmy/` | redirect nebo změna routy |
| post | Kolik stojí AI školení pro firmu a jak v roce 2026 poznat smysluplnou investici | `https://pavelkovarik.cz/cena-ai-skoleni/` | `/blog/cena-ai-skoleni/` | redirect nebo změna routy |
| post | Konec práce? Ne tak rychle. Jak umělá inteligence transformuje pracovní trh | `https://pavelkovarik.cz/umela-inteligence-a-prace/` | `/blog/umela-inteligence-a-prace/` | redirect nebo změna routy |
| post | Microsoft Copilot a bezpečnost dat: mýty a realita pro firmy | `https://pavelkovarik.cz/microsoft-copilot-a-bezpecnost-dat-myty-a-realita-pro-firmy/` | `/blog/microsoft-copilot-a-bezpecnost-dat-myty-a-realita-pro-firmy/` | redirect nebo změna routy |
| post | Nejlepší AI asistent 2026: srovnání ChatGPT, Gemini, Claude a dalších | `https://pavelkovarik.cz/nejlepsi-ai-asistent-2026-srovnani-chatgpt-gemini-claude-a-dalsich/` | `/blog/nejlepsi-ai-asistent-2026-srovnani-chatgpt-gemini-claude-a-dalsich/` | redirect nebo změna routy |
| post | Paradox AI: Kdy konečně uvidíme ekonomický boom? | `https://pavelkovarik.cz/paradox-ai-kdy-konecne-uvidime-ekonomicky-boom/` | `/blog/paradox-ai-kdy-konecne-uvidime-ekonomicky-boom/` | redirect nebo změna routy |
| post | Proč už nestačí být první na Googlu: SEO, AEO a GEO v roce 2026 | `https://pavelkovarik.cz/seo-aeo-geo-2026/` | `/blog/seo-aeo-geo-2026/` | redirect nebo změna routy |
| post | Umělá inteligence v HR 2026: Od chytrého náboru až po bezpečnou datovou analytiku | `https://pavelkovarik.cz/ai-v-hr-2026-pruvodce/` | `/blog/ai-v-hr-2026-pruvodce/` | redirect nebo změna routy |
| post | Vliv ChatGPT na mozek: Studie MIT potvrzuje kognitivní dluh a ztrátu paměti | `https://pavelkovarik.cz/vliv-chatgpt-na-mozek-studie-mit-potvrzuje-kognitivni-dluh-a-ztratu-pameti/` | `/blog/vliv-chatgpt-na-mozek-studie-mit-potvrzuje-kognitivni-dluh-a-ztratu-pameti/` | redirect nebo změna routy |
| post | Za hranice excelových tabulek: Skutečný přínos AI v každodenní praxi | `https://pavelkovarik.cz/za-hranice-excelovych-tabulek-skutecny-prinos-ai-v-kazdodenni-praxi/` | `/blog/za-hranice-excelovych-tabulek-skutecny-prinos-ai-v-kazdodenni-praxi/` | redirect nebo změna routy |
| post | Školení umělé inteligence ve firmách: Jaký byl můj rok 2025? | `https://pavelkovarik.cz/muj-rok-2025-ai-skoleni/` | `/blog/muj-rok-2025-ai-skoleni/` | redirect nebo změna routy |

## Doporučené další kroky

1. Rozhodnout, jestli články necháte pod `/blog/slug/`, nebo je vrátíte na původní rootové URL.
2. Pokud zůstanou pod `/blog/slug/`, připravit redirect mapu pro všech 19 článků.
3. Opravit interní odkazy v Astro tak, aby odpovídaly finální URL strategii.
