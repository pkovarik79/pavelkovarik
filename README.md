# pavelkovarik.cz — Astro + Cloudflare Pages

## Struktura projektu

```
src/
├── layouts/
│   ├── Base.astro          # Hlavní layout (nav, footer)
│   └── BlogPost.astro      # Layout pro blog články
├── pages/
│   ├── index.astro         # Homepage (HOTOVO - reálný obsah)
│   ├── skoleni.astro       # Přehled školení (HOTOVO)
│   ├── blog/
│   │   ├── index.astro     # Výpis článků (HOTOVO)
│   │   └── *.mdx           # 19 blog článků (HOTOVO - převedeno z WP)
│   └── *.astro             # 17 podstránek (STUB - čeká na doplnění obsahu)
├── styles/
│   └── global.css          # Design systém (HOTOVO)
└── components/             # Sdílené komponenty (připraveno)
public/
└── images/                 # Sem patří obrázky z WP uploads
```

## Co je hotovo

- [x] Astro projekt s konfigurací pro Cloudflare Pages
- [x] Design systém (CSS) s dark mode
- [x] Layout s navigací a footerem
- [x] Homepage se skutečným obsahem z WP
- [x] Stránka Školení (přehled)
- [x] Blog listing + 19 článků převedených z WP do MDX
- [x] 17 stub stránek připravených k doplnění obsahu

## Co zbývá

- [ ] Doplnit obsah do 17 podstránek (texty jsou v wp_content/pages/*.json)
- [ ] Přenést obrázky z WP hostingu do public/images/
- [ ] Nasadit na Cloudflare Pages

## Nasazení na Cloudflare Pages

1. Nahraj projekt na GitHub
2. V Cloudflare dashboard: Workers & Pages → Create → Connect to Git
3. Nastavení:
   - Framework: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
4. Připoj doménu pavelkovarik.cz

## Obrázky

Obrázky z WP jsou zatím jako placeholder. Stáhni složku `wp-content/uploads/` z hostingu a přesuň obrázky do `public/images/`.

## Lokální vývoj

```bash
npm install
npm run dev
```
