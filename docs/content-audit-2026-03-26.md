# Audit obsahu WP -> Astro

Datum auditu: `2026-03-26`

Zdroj porovnani:
- WordPress exporty v `wp_content/pages/*.json` a `wp_content/posts/*.json`
- Astro soubory v `src/pages/`

Metoda:
- overeni existence kazde WP URL v Astro
- porovnani struktury nadpisu `h1-h3`
- rucni kontrola drive oznacenych nekompletnich stranek
- doplneni chybejiciho obsahu primo z WP exportu u stranek, kde chybel rozsah nebo puvodni vzhled

## Verdikt

- Vsechny WP URL maji v Astro protistranu: `ANO`
- Vsechny blogove clanky jsou prevedene: `ANO`
- Vsechny podstranky jsou obsahove doplnene podle WP exportu: `ANO`

## Souhrn

- Celkem auditovano URL: `39`
- Stranky: `20`
- Clanky: `19`
- URL bez protistrany v Astro: `0`
- URL s chybejicimi hlavickami po doplneni: `0`

## Co bylo doplneno

Nasledujici stranky byly doplnene primo z puvodniho WP obsahu tak, aby sedel obsah i vzhled co nejblize originalu:

- `/ai-nastroje/`
- `/prompty/`
- `/pravo-v-ai/`
- `/skoleni-na-miru/`
- `/dotace-ai-skoleni-digi-pro-firmu/`
- `/materialy/`
- `/blog/`

U dalsich stranek byly dorovnane chybejici sekce, nazvy nebo drobne obsahove rozdily:

- `/`
- `/skoleni/`
- `/prakticke-skoleni-ai-pro-firmy/`
- `/ai-pro-verejnou-spravu/`
- `/microsoft-copilot-pro-firmy/`
- `/marketing-pr-ai/`
- `/kdo-jsem/`
- `/kontakt/`

## Blogove clanky

Vsech `19/19` clanku ma odpovidajici Astro soubor a po kontrole sedi proti WP exportu:

- `/ai-act-2026/`
- `/ai-v-hr-2026-pruvodce/`
- `/cena-ai-skoleni/`
- `/claude-ai-prezentace/`
- `/dotace-na-skoleni-ai-digi-pro-firmu/`
- `/eticka-sprava-dat-ai/`
- `/jak-dlouhe-ai-skoleni-pro-firmu/`
- `/jak-vybrat-ai-skoleni-pro-firmy/`
- `/microsoft-copilot-a-bezpecnost-dat-myty-a-realita-pro-firmy/`
- `/muj-rok-2025-ai-skoleni/`
- `/nejlepsi-ai-asistent-2026-srovnani-chatgpt-gemini-claude-a-dalsich/`
- `/paradox-ai-kdy-konecne-uvidime-ekonomicky-boom/`
- `/seo-aeo-geo-2026/`
- `/umela-inteligence-a-prace/`
- `/umela-inteligence-lidske-vedeni/`
- `/umela-inteligence-prace-a-zmena/`
- `/vliv-chatgpt-na-mozek-studie-mit-potvrzuje-kognitivni-dluh-a-ztratu-pameti/`
- `/za-hranice-excelovych-tabulek-skutecny-prinos-ai-v-kazdodenni-praxi/`
- `/zavedeni-ai-2026/`

## Poznamka

Obsahovy audit po doplneni vysel bez chybejicich polozek. To znamena, ze proti dodanemu WP exportu uz po obsahove strance neni identifikovana zadna chybejici stranka ani chybejici hlavni sekce.
