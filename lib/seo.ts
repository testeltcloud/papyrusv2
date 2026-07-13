/*
  ─── Núcleo central de SEO / GEO (Generative Engine Optimization) ───

  Tudo que os buscadores tradicionais (Google/Bing) e os motores de IA
  (ChatGPT, Perplexity, Claude, Gemini/AI Overviews) leem sobre o site
  vive aqui: URL canônica, dados da empresa, dados do app e o FAQ.

  Alterou algo do produto? Atualize AQUI e o site inteiro (metadata,
  JSON-LD, sitemap, llms.txt manual) fica consistente.
*/

import { links } from "@/lib/site";

export const SITE_URL = "https://papyrusads.com";
export const LAST_MODIFIED = "2026-07-13"; // Atualize esta data quando houver mudanças no conteúdo real.

export const org = {
  name: "Papyrus Ads",
  legalName: "Papyrus Ads",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "O Papyrus Ads é um aplicativo brasileiro que reúne os resultados de Google Ads, Meta Ads (Facebook e Instagram) e TikTok Ads em um único painel simples, feito para anunciantes sem conhecimento técnico.",
  email: "papyrusadsofc@gmail.com",
  sameAs: [
    links.appStore,
    links.playStore,
    "https://www.instagram.com/papyrusadsofc/",
    "https://www.facebook.com/profile.php?id=61590830956047&locale=pt_BR",
  ],
} as const;

export const app = {
  name: "Papyrus Ads",
  slogan: "Você no controle dos seus anúncios",
  category: "BusinessApplication",
  operatingSystem: "iOS, Android",
  price: "0", // download gratuito com teste de 15 dias
  currency: "BRL",
  freeTrialDays: 15,
  platforms: ["Google Ads", "Meta Ads (Facebook e Instagram)", "TikTok Ads"],
  features: [
    "Painel único com os resultados de todas as campanhas",
    "Indicadores explicados em linguagem simples (ROAS, CPC, CPM, conversões)",
    "Glossário de termos de tráfego pago",
    "Conexão pelas integrações oficiais do Google, da Meta e do TikTok",
    "Dados criptografados e nunca compartilhados com terceiros",
  ],
} as const;

/*
  FAQ em texto puro (sem JSX) — fonte única usada:
  1. na seção visual do site (components/sections/FAQ.tsx)
  2. no JSON-LD FAQPage (lido por Google AI Overviews)
  3. como conteúdo extraível pelas IAs de busca
*/
export const faqData = [
  {
    q: "Preciso ter conhecimento técnico para usar o Papyrus Ads?",
    a: "De jeito nenhum. O app foi criado justamente para quem quer entender os seus resultados sem complicações técnicas. Tudo é explicado com exemplos simples e linguagem acessível.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Usamos as integrações oficiais do Google e da Meta, com autorização concedida apenas por você. Seus dados são criptografados e nunca compartilhados com terceiros.",
  },
  {
    q: "O que acontece depois do período gratuito?",
    a: "Você testa por 15 dias sem cartão de crédito. Ao final, escolhe um plano para continuar — e se decidir não seguir, é só não assinar. Sem cobranças automáticas ou surpresas.",
  },
  {
    q: "O app mostra dados de quais plataformas?",
    a: "Hoje conectamos Google Ads, Meta Ads (Facebook e Instagram) e TikTok Ads, reunindo tudo em um único painel simples de acompanhar.",
  },
] as const;

/* ─── Construtores de JSON-LD (schema.org) ─── */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: org.name,
    url: org.url,
    logo: {
      "@type": "ImageObject",
      url: org.logo,
      width: 600,
      height: 192,
    },
    description: org.description,
    email: org.email,
    sameAs: org.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-18-99627-2081",
      contactType: "customer service",
      availableLanguage: "Portuguese",
      url: links.whatsapp,
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: org.name,
    description: org.description,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function mobileAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "MobileApplication"],
    "@id": `${SITE_URL}/#app`,
    name: app.name,
    alternateName: app.slogan,
    description: org.description,
    applicationCategory: app.category,
    operatingSystem: app.operatingSystem,
    inLanguage: "pt-BR",
    url: SITE_URL,
    downloadUrl: [links.appStore, links.playStore],
    installUrl: [links.appStore, links.playStore],
    featureList: app.features.join("; "),
    offers: {
      "@type": "Offer",
      price: app.price,
      priceCurrency: app.currency,
      description: `Download gratuito com teste de ${app.freeTrialDays} dias, sem cartão de crédito.`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    /*
      TODO (quando houver avaliações reais nas lojas):
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.8, ratingCount: 120 }
      NUNCA inventar nota — Google penaliza rating sem correspondência real.
    */
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    inLanguage: "pt-BR",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* Serializa com segurança para injetar em <script type="application/ld+json"> */
export function jsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
