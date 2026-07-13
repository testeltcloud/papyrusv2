# Papyrus Ads v2 — Otimização para busca por IA (GEO)

Este projeto é uma cópia do `papyrusads` original com todas as otimizações para o site aparecer nas respostas de motores de IA — ChatGPT, Perplexity, Claude, Gemini e Google AI Overviews. A prática se chama **GEO (Generative Engine Optimization)**. O original ficou intacto.

## Como as IAs escolhem quem citar

Diferente do Google clássico (10 links azuis), uma IA cita de 2 a 7 fontes por resposta. Ela decide com base em quatro coisas: se conseguiu **rastrear** o site (crawlers de IA liberados), se encontrou **texto extraível que responde a pergunta diretamente** (não imagens), se a marca tem **sinais de entidade consistentes** (dados estruturados, menções em outros sites, avaliações) e se o conteúdo é **recente**. Estudos de 2025/2026 mostram que a sobreposição entre o top do Google e as fontes citadas por IA caiu de ~70% para menos de 20% — ou seja, GEO é um jogo próprio, e este projeto cobre toda a parte técnica dele.

## O que foi feito (arquivo por arquivo)

### Arquivos novos

| Arquivo | O que faz |
|---|---|
| `lib/seo.ts` | **Núcleo central de SEO/GEO.** URL canônica, dados da empresa, dados do app, FAQ e os geradores de JSON-LD. Mudou algo no produto? Atualize aqui e tudo (metadata, schema, FAQ visível) fica consistente. |
| `app/robots.ts` | Gera o `/robots.txt` liberando explicitamente **17 crawlers de IA** (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot, Amazonbot etc.). Este é o pré-requisito nº 1: site bloqueado para esses bots simplesmente não existe nas respostas de IA. |
| `app/sitemap.ts` | Gera o `/sitemap.xml` com `lastModified` — as IAs usam para descobrir páginas e medir frescor do conteúdo. |
| `public/llms.txt` | Arquivo no padrão [llmstxt.org](https://llmstxt.org): um resumo em Markdown do que é o Papyrus Ads, para quem é, preço, FAQ e links, feito para consumo direto por agentes de IA. Custo zero, adotado por ~10% dos sites em 2026. |
| `app/manifest.ts` | Web App Manifest — reforça identidade da marca (nome, cores, ícone). |
| `components/sections/WhatIs.tsx` | **Nova seção visível "O que é o Papyrus Ads?"** logo após o Hero. As IAs avaliam a relevância de uma página pelos primeiros ~200 palavras de texto real; a landing original era quase só imagem. A seção segue o formato que as IAs preferem: pergunta como título + resposta completa no primeiro parágrafo + fatos objetivos (plataformas, teste de 15 dias sem cartão, iOS/Android). |
| `public/images/og-image.png` | Imagem Open Graph 1200×630 gerada com o logo — usada quando o site é compartilhado ou renderizado em cards por IAs/redes sociais. |

### Arquivos modificados

| Arquivo | Mudança |
|---|---|
| `app/layout.tsx` | Metadata reforçada: canonical, descrição reescrita com os fatos-chave (plataformas + teste grátis), keywords ampliadas para as perguntas reais que as pessoas fazem às IAs ("app para acompanhar anúncios"), Open Graph/Twitter com imagem, `googleBot` com snippet ilimitado, e **JSON-LD de `Organization` e `WebSite`** no `<head>`. |
| `app/page.tsx` | Injeta **JSON-LD de `SoftwareApplication`/`MobileApplication`** (nome, lojas, preço, recursos, teste grátis) e **`FAQPage`** (as 4 perguntas). O FAQPage é o schema com maior correlação com citação em AI Overviews. Adiciona a seção `WhatIs`. |
| `components/sections/FAQ.tsx` | O FAQ agora lê de `lib/seo.ts` — o texto visível e o JSON-LD são sempre idênticos (exigência do Google para rich results). |

### Validação

`tsc --noEmit` passou sem erros. O build completo não pôde rodar no ambiente isolado (sem rede para o binário do compilador), então rode na sua máquina:

```bash
cd ~/Desktop/papyrusads-v2
npm install
npm run build   # deve gerar /robots.txt, /sitemap.xml, /manifest.webmanifest
```

Depois do deploy, confira `https://papyrusads.com/robots.txt`, `/sitemap.xml` e `/llms.txt`, e valide o JSON-LD em [validator.schema.org](https://validator.schema.org) e no [teste de pesquisa aprimorada do Google](https://search.google.com/test/rich-results).

## O que o código sozinho NÃO resolve (e pesa muito)

A parte técnica coloca o site "legível" para as IAs; a autoridade da marca é o que faz elas escolherem citar você. Em ordem de impacto:

**1. Presença em sites de terceiros.** As IAs confiam em fontes que outras fontes confirmam. Cadastre o Papyrus Ads em diretórios e comparadores (Google Business Profile, Product Hunt, Capterra, B2B Stack, AppBrain), e busque menções em portais do nicho de marketing digital brasileiro (Resultados Digitais, Rock Content, blogs de tráfego pago). Uma menção num artigo "melhores apps para acompanhar anúncios" vale mais que qualquer tag no seu próprio site.

**2. Avaliações reais.** Notas na App Store, Google Play e Google aparecem nas respostas de IA ("app bem avaliado, 4,7 estrelas"). Quando houver volume real, adicione o `aggregateRating` no `lib/seo.ts` (o campo já está preparado com instruções — nunca invente nota, o Google pune).

**3. Conteúdo que responde perguntas.** O maior ganho de longo prazo: um blog respondendo o que seu público pergunta às IAs — "o que é ROAS", "quanto investir em tráfego pago", "como saber se meu anúncio está dando lucro", "Google Ads ou Meta Ads para pequeno negócio". Cada artigo no formato resposta-direta-primeiro é uma porta de entrada de citação. Publicação consistente (mesmo 2–4 artigos/mês bem feitos) constrói autoridade temática. Ao criar as páginas, adicione-as em `app/sitemap.ts`.

**4. Cadastros de webmaster.** Google Search Console e Bing Webmaster Tools (Bing alimenta o ChatGPT). Envie o sitemap nos dois e cole os códigos de verificação no `app/layout.tsx` (campo `verification`, já marcado com TODO).

**5. Frescor.** Atualize a página e os futuros artigos periodicamente — conteúdo parado perde espaço para concorrentes mais recentes.

**6. Medir.** No GA4, crie um relatório de tráfego de referência filtrando `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com` — é assim que você vê o GEO funcionando. E teste manualmente: pergunte às IAs "qual app usar para acompanhar Google e Meta Ads no Brasil?" a cada mês.

## Pendências no código (TODOs marcados)

Já preenchidos: e-mail (papyrusadsofc@gmail.com), WhatsApp (+55 18 99627-2081) e perfis do Instagram e Facebook (no `sameAs` do JSON-LD e nos ícones do rodapé, que antes não tinham link). Falta apenas: códigos de verificação do Search Console/Bing em `app/layout.tsx` após o cadastro, e os links de "Termos de uso" e "Política de privacidade" do rodapé, que ainda apontam para `#` (essas páginas também são sinal de confiança para IAs).

## Fontes da pesquisa

- [Search Engine Land — Mastering GEO in 2026](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142)
- [Google — Guia oficial de otimização para IA na Busca](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [LLMrefs — GEO: The 2026 Guide](https://llmrefs.com/generative-engine-optimization)
- [Presenc AI — State of llms.txt 2026](https://presenc.ai/research/state-of-llms-txt-2026)
- [Ahrefs — estudo sobre schema e citações de IA](https://ahrefs.com/blog/schema-ai-citations/) (visão cética: schema ajuda o Google, mas ChatGPT/Perplexity pesam mais o texto — por isso a seção WhatIs e o llms.txt importam tanto quanto o JSON-LD)
- [Digital Strategy Force — Schema que gera citação em 2026](https://digitalstrategyforce.com/journal/what-schema-markup-gets-you-cited-by-chatgpt-and-google-ai-mode-in-2026/)
- [DataImpulse — Robots.txt & AI Crawlers 2026](https://dataimpulse.com/blog/robots-txt-ai-crawlers/)
