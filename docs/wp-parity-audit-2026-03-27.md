# WP -> Astro parity audit (2026-03-27)

Zdroj pravdy:
- `wp_source/*`
- zvlášť použité podklady:
  - `wp_source/menu-widget.rtf`
  - `wp_source/footer-widget.rtf`
  - `wp_source/homepage/homepage-widget.rtf`
  - `wp_source/AI školení pro firmy _ Přehled školení _ Pavel Kovařík.html`
  - `wp_source/elementor-sigle-page-styles.rtf`

## Priority 1: favicon

### Zjištěný stav
- WordPress export používá favicon jako rastrové WEBP varianty:
  - `32x32`
  - `192x192`
  - `180x180` pro Apple touch icon
  - `270x270` pro MS tile
- V Astro layoutu se teď používá jiná sada souborů `*-v5` a SVG/ICO reference:
  - `src/layouts/Base.astro:24`
  - `src/layouts/Base.astro:28`
- To není 1:1 podle WP exportu.

### Konkrétní rozdíl
- WP: raster favicon set z `cropped-fav-icon-pavel-kovarik-*.webp`
- Astro: `favicon-v5.ico`, `favicon-v5.svg`, `favicon-32x32-v5.png`, `apple-touch-icon-v5.png`

### Co opravit
- Přepnout head assety na sadu odpovídající původnímu WP favicon setu.
- Upravit i `site.webmanifest`, pokud bude potřeba sladit názvy a velikosti ikon.

### Co chybí v podkladech
- V `wp_source` chybí samotné originální favicon assety, jsou tam jen jejich URL v exportovaném HTML.
- Pro přesnou 1:1 opravu potřebuji buď:
  - stáhnout originální `cropped-fav-icon-pavel-kovarik-32x32.webp`, `180x180.webp`, `192x192.webp`, `270x270.webp`
  - nebo potvrdit, že můžeme vycházet z aktuálních lokálních `public/favicon*` souborů, pokud se ukáže, že jsou identické.

## Priority 2: homepage

### Zjištěný stav
- Aktuální homepage v Astro (`src/pages/index.astro`) neodpovídá původní WP homepage ani strukturou, ani obsahem.
- Astro homepage je postavená jako samostatný marketingový landing s hero fotografií, benefity, blogem a referencemi.
- Původní WP homepage je rozcestník kurzů s tímto pořadím:
  1. hero "PŘEHLED ŠKOLENÍ"
  2. verified card s hvězdičkami
  3. intro odstavec
  4. přehled kurzů v kartách
  5. box "Školení na míru"
  6. loga klientů
  7. FAQ
  8. finální CTA

### Největší konkrétní rozdíly

#### Hero sekce
- WP hero:
  - badge `PŘEHLED ŠKOLENÍ`
  - H1 `Kurzy AI pro firmy`
  - jeden CTA button `Zobrazit všechna školení`
  - bez profilové fotky
- Astro hero:
  - H1 `Školení AI pro firmy`
  - profilová fotka
  - statistiky `1000+` a `100%`
  - dva CTA buttony
- Soubory:
  - zdroj: `wp_source/AI školení pro firmy _ Přehled školení _ Pavel Kovařík.html`
  - implementace: `src/pages/index.astro:33`

#### Verified card úplně chybí
- WP má hned pod hero ověřovací box s textem o souladu s doporučeními České asociace umělé inteligence.
- Astro tento blok nemá vůbec.

#### Intro odstavec úplně chybí
- WP má samostatný intro blok vysvětlující, že stránka slouží jako přehled školení.
- Astro místo toho přechází do log klientů.

#### Hlavní obsah homepage je jiný typ stránky
- WP hlavní část je grid kurzových karet s konkrétními cenami, délkou, kapacitou, badge a CTA.
- Astro místo toho používá:
  - sekci "Co vašemu týmu školení přinese"
  - samostatný zvýrazněný blok pro jedno školení
  - sekci "Školení podle zaměření"
- To není vizuální detail, ale jiná informační architektura.

#### Chybí kurzové karty podle WP
- V WP jsou na homepage konkrétní karty:
  - Praktické školení AI pro firmy
  - Praktické školení AI pro města, obce a veřejnou správu
  - Microsoft Copilot školení pro firmy
  - Marketing & PR s AI
  - AI pro manažery
  - AI bezpečnost a pravidla pro firmy
- Astro tyto karty v tomto formátu nemá.

#### Box "Školení na míru" je jinde a jinak
- WP má samostatný široký box s badge `✓ INDIVIDUÁLNÍ PŘÍSTUP`.
- Astro má "Školení na míru" jen jako jednu kartu mezi ostatními.

#### Loga klientů jsou obsahově blízko, ale vizuálně ne 1:1
- Seznam log odpovídá skoro plně.
- WP má každé logo uvnitř `.logo-item` boxu s borderem, paddingem, min-height a hoverem.
- Astro rendruje jen samotné `img` bez wrapperu.
- Rozdíl je i v alt textech u některých značek.

#### FAQ je obsahově jiné
- WP FAQ obsahuje 5 konkrétních otázek a odpovědí o délce, ceně, začátečnících, místě konání a volbě školení.
- Astro FAQ existuje, ale je potřeba ověřit otázky a wording proti WP, protože homepage je celkově jiná.

#### Finální CTA nesedí
- WP závěr homepage je CTA "Nejste si jistí, které školení vybrat?" s kontaktní linkou a dvěma tlačítky.
- Astro má jiné závěrečné sekce, včetně blogu a referencí, které v tomto pořadí na původní homepage nejsou.

### Co opravit
- Přestavět `src/pages/index.astro` podle WP rozcestníku, ne podle současného Astro landingu.
- Přidat chybějící verified card, intro, grid kurzů, custom box, FAQ a final CTA.
- U log vrátit wrapper boxy a spacing podle WP.

## Priority 3: šablona článků a další stránky

### Zjištěný stav
- Blog post layout v Astro je typograficky blízko modernímu stylu, ale není podložený plnými WP single post podklady.
- Máme jen dílčí podklad `wp_source/elementor-sigle-page-styles.rtf`, který potvrzuje hlavně styl H1.
- Aktuální Astro článek:
  - `src/layouts/BlogPost.astro`
  - H1, datum, cover image, body
- Potenciální rozdíly:
  - šířka a vertikální rytmus titulku
  - horní spacing
  - případné mezibloky mezi titulkem a obsahem
  - archiv blogu má v Astro jinou hero/intro strukturu než WP

### Konkrétní rozdíly už teď potvrzené
- WP single-post H1 cílí na:
  - max-width `1000px`
  - font-size `50px`
  - font-weight `900`
  - margin top `44px`
- Astro layout má vlastní obecný titulek:
  - `src/layouts/BlogPost.astro:9`
  - styling v `src/styles/global.css` pod `.article-header h1`
- To je potřeba dorovnat proti WP podkladu.

### Co chybí v podkladech
- V `wp_source` teď nevidím plný export jedné konkrétní single-post stránky se všemi wrappery, spacingem a meta bloky.
- Máme obsahové RTF exporty jednotlivých článků, ale ne kompletní HTML šablonu jedné single-post stránky.
- Pro přesnou 1:1 shodu článků bude potřeba:
  - buď najít/exportovat jednu plnou HTML stránku konkrétního článku z WP
  - nebo potvrdit, že jako základ máme použít jen `elementor-sigle-page-styles.rtf` + obsah článků

## Priority 4: header/footer a globální chrome

### Header
- Struktura je podobná, ale ne 1:1.
- Rozdíly:
  - WP header je fixed, Astro sticky
  - WP má přesněji definované wrappery, dropdown box, hover bridge a CTA styly
  - WP logo má výšku `45px`, Astro `55px`
  - WP mobile chování u "Školení" a "Materiály" je specifičtější než současný Astro toggle
- Soubory:
  - zdroj: `wp_source/menu-widget.rtf`
  - implementace: `src/layouts/Base.astro`, `src/styles/global.css`

### Footer
- Footer je funkčně blízko, ale ne 1:1.
- Rozdíly:
  - WP používá ikony u kontaktů
  - v rychlých odkazech jsou ve WP URL na `/materialy/ai-nastroje/` a `/materialy/prompty/`, zatímco Astro používá `/ai-nastroje/` a `/prompty/`
  - spacing, typografie a button radius jsou jiné
- Soubory:
  - zdroj: `wp_source/footer-widget.rtf`
  - implementace: `src/layouts/Base.astro:80`

## Doporučené pořadí oprav

1. Favicon head + assety
2. Přestavba homepage podle WP rozcestníku
3. Header/footer dorovnání podle widgetů
4. Blog archive a single-post template
5. Ostatní landing pages podle jednotlivých HTML/RTF podkladů

## První sada změn, kterou dává smysl udělat teď

1. Opravit `Base.astro` tak, aby nepoužíval `*-v5` favicon varianty.
2. Přepsat `src/pages/index.astro` na strukturu z WP homepage.
3. Dorovnat globální styly pro header/footer/logo grid podle widget podkladů.

