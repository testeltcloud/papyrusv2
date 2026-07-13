# Papyrus Ads — Landing Page

Landing page institucional do **Papyrus Ads**, construída com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**. Totalmente responsiva (mobile-first) e otimizada para PageSpeed.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de produção
npm run start    # serve o build
```

## Estrutura

```
app/
  layout.tsx        # fontes (next/font), metadata/SEO, tema
  page.tsx          # composição das seções
  globals.css       # variáveis de tema + estilos base
components/
  Header.tsx        MobileNav.tsx (client)   Footer.tsx   Logo.tsx
  FaqAccordion.tsx  (client)
  sections/         Hero, Features, Differentials, SpecialistCTA, FAQ, AboutCTA
  ui/               AppImage, DownloadButtons, WhatsAppButton
  icons.tsx         # ícones SVG inline
lib/
  images.ts         # MANIFESTO de imagens (caminho + dimensões + alt)
  site.ts           # links (stores, WhatsApp) + itens de navegação
public/images/      # imagens (placeholders .svg por enquanto)
scripts/            # gerador de placeholders
```

## Trocando os placeholders pelas imagens reais

As imagens são gerenciadas em um único lugar: [`lib/images.ts`](lib/images.ts).

1. Coloque seu arquivo em `public/images/` (ex.: `hero-app.webp`).
2. Aponte o `src` correspondente em `lib/images.ts` para ele.
3. Ajuste `width`/`height` para a proporção real do arquivo (evita _layout shift_).

O `alt` de cada imagem já está preenchido em português para acessibilidade e SEO.

> Os placeholders atuais são `.svg`. Como SVG via `next/image` exige
> `dangerouslyAllowSVG`, isso está habilitado em `next.config.mjs`. Quando todas
> as imagens forem raster (png/webp/jpg), você pode remover esse bloco.

Para regenerar os placeholders: `node scripts/gen-placeholders.mjs`.

## Tema

Toda a paleta vive no bloco `:root` de [`app/globals.css`](app/globals.css) como
canais RGB e é mapeada no Tailwind ([`tailwind.config.ts`](tailwind.config.ts)).
Trocar uma cor lá re-tematiza o site inteiro. Cores principais:

| Token        | Uso                                    |
| ------------ | -------------------------------------- |
| `brand`      | verde/teal — botões, destaques         |
| `navy`       | azul escuro — seções CTA, FAQ aberto   |
| `ink`        | títulos                                |
| `body`       | texto de parágrafo                     |

## Links

App Store, Google Play e WhatsApp são configurados em
[`lib/site.ts`](lib/site.ts). Atualize com as URLs reais.

## Performance

- Componentes de servidor por padrão; JS no cliente só onde há interação
  (menu mobile e accordion do FAQ).
- `next/image` com `sizes` responsivo, `next/font` self-hosted (sem CLS).
- CSS utilitário com purge (Tailwind) e zero runtime de estilização.
