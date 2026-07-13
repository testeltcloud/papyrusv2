/*
  IMAGE MANIFEST
  ----------------------------------------------------------------------------
  Every image on the site is declared here once: its public path, intrinsic
  size (width/height — real pixel dimensions, used to reserve space and avoid
  layout shift) and alt text. Components read paths from this map; they never
  hard-code them.

  All assets were exported from the Papyrus Ads Figma. To swap one, drop the new
  file in `public/images/` and update its `src` (and `width`/`height` if the
  aspect ratio changes).
*/
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const dir = "/images";

export const images = {
  logo: {
    src: `${dir}/logo.png`,
    width: 600,
    height: 192,
    alt: "Papyrus Ads",
  },
  heroApp: {
    src: `${dir}/hero-app.png`,
    width: 1056,
    height: 1432,
    alt: "Aplicativo Papyrus Ads exibindo o dashboard de anúncios",
  },
  featureDashboard: {
    src: `${dir}/feature-dashboard.png`,
    width: 2452,
    height: 887,
    alt: "Filtros do dashboard por plataforma e período",
  },
  featureIndicators: {
    src: `${dir}/feature-indicators.png`,
    width: 508,
    height: 637,
    alt: "Lista de indicadores: investimento, vendas, ROAS e CPA",
  },
  featureTodos: {
    src: `${dir}/todos/todosJuntos.png`,
    width: 1016,
    height: 1139,
    alt: "Lista de indicadores do app: investimento, vendas, ROAS, CPA e mais",
  },
  featureGlossary: {
    src: `${dir}/feature-glossary.png`,
    width: 572,
    height: 717,
    alt: "Glossário integrado explicando os termos de tráfego pago",
  },
  featureGift: {
    src: `${dir}/imagesPersonas/3.svg`,
    width: 1000,
    height: 1000,
    alt: "15 dias grátis para testar, sem cartão de crédito",
  },
  diffTransparency: {
    src: `${dir}/imagesPersonas/2.svg`,
    width: 1000,
    height: 1000,
    alt: "Empresário acompanhando os anúncios pelo celular",
  },
  diffClarity: {
    src: `${dir}/semfundopapyrus.svg`,
    width: 1000,
    height: 1000,
    alt: "Tela do app explicando indicadores de forma simples",
  },
  diffSecurity: {
    src: `${dir}/imagesPersonas/1.svg`,
    width: 1000,
    height: 1000,
    alt: "Cliente tranquila com a segurança dos próprios dados",
  },
  specialistPhones: {
    src: `${dir}/specialist-phones.png`,
    width: 734,
    height: 975,
    alt: "Dois celulares exibindo telas do Papyrus Ads",
  },
  ctaPhone: {
    src: `${dir}/cta-phone.png`,
    width: 625,
    height: 793,
    alt: "Celular com o app Papyrus Ads aberto",
  },
  phoneAssas: {
    src: `${dir}/adc/phoneAssas.png`,
    width: 822,
    height: 876,
    alt: "Celular exibindo dashboard do Papyrus Ads com métricas",
  },
  metricCard1: {
    src: `${dir}/metric-card-1.png`,
    width: 508,
    height: 191,
    alt: "Metric Card 1",
  },
  metricCard2: {
    src: `${dir}/metric-card-2.png`,
    width: 508,
    height: 191,
    alt: "Metric Card 2",
  },
  metricCard3: {
    src: `${dir}/metric-card-3.png`,
    width: 508,
    height: 191,
    alt: "Metric Card 3",
  },
  metricCard4: {
    src: `${dir}/metric-card-4.png`,
    width: 508,
    height: 191,
    alt: "Metric Card 4",
  },
  metricCard5: {
    src: `${dir}/metric-card-5.png`,
    width: 508,
    height: 191,
    alt: "Metric Card 5",
  },
  metricCard6: {
    src: `${dir}/metric-card-6.png`,
    width: 508,
    height: 258,
    alt: "Metric Card 6",
  },
  metricCard7: {
    src: `${dir}/metric-card-7.png`,
    width: 508,
    height: 238,
    alt: "Metric Card 7",
  },
  metricCard8: {
    src: `${dir}/metric-card-8.png`,
    width: 508,
    height: 191,
    alt: "Metric Card 8",
  },
  metricCard9: {
    src: `${dir}/metric-card-9.png`,
    width: 508,
    height: 258,
    alt: "Metric Card 9",
  },
  mockupBorder: {
    src: `${dir}/mockup-border.svg`,
    width: 329,
    height: 663,
    alt: "Borda de Mockup Celular",
  },
  mockupMain: {
    src: `${dir}/mockup-main.svg`,
    width: 329,
    height: 663,
    alt: "Mockup Celular Central",
  },
  foto1: {
    src: `${dir}/foto1.svg`,
    width: 210,
    height: 430,
    alt: "Mockup Celular lateral esquerdo",
  },
  foto2: {
    src: `${dir}/foto2.svg`,
    width: 210,
    height: 430,
    alt: "Mockup Celular lateral direito",
  },
  /* "Dashboard simples e visual" pieces (trimmed from /images/adc). */
  dashTodos: {
    src: `${dir}/adc/t5.png`,
    width: 841,
    height: 213,
    alt: "Filtro por todas as plataformas",
  },
  dashGoogle: {
    src: `${dir}/adc/t8.png`,
    width: 841,
    height: 213,
    alt: "Filtro por Google Ads",
  },
  dashMeta: {
    src: `${dir}/adc/t6.png`,
    width: 841,
    height: 213,
    alt: "Filtro por Meta Ads",
  },
  dashTiktok: {
    src: `${dir}/adc/t7.png`,
    width: 841,
    height: 213,
    alt: "Filtro por TikTok Ads",
  },
  dashFiltro: {
    src: `${dir}/adc/t9.png`,
    width: 823,
    height: 637,
    alt: "Filtro de período do dashboard",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

/* Platform logos used in the "Conexão" illustration (referenced directly). */
export const platformLogos = {
  googleAds: { src: `${dir}/icon-googleads.png`, alt: "Google Ads" },
  analytics: { src: `${dir}/icon-analytics.png`, alt: "Google Analytics" },
  meta: { src: `${dir}/icon-meta.png`, alt: "Meta Ads" },
  tiktok: { src: `${dir}/icon-tiktok.png`, alt: "TikTok Ads" },
} as const;

export const logoMark = { src: `${dir}/logo-mark.png`, alt: "Papyrus" } as const;
