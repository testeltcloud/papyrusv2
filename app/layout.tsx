import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  organizationJsonLd,
  webSiteJsonLd,
  jsonLdScript,
} from "@/lib/seo";

/*
  The Figma design uses "Degular Display". We use Inter here to give the letters
  a more square and crisp feel as requested.
*/
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const TITLE = "Papyrus Ads — Você no controle dos seus anúncios";
const DESCRIPTION =
  "Papyrus Ads reúne Google, Meta e TikTok Ads num painel simples. Entenda ROAS, CPC e conversões sem termos técnicos. Teste grátis 15 dias, sem cartão.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Papyrus Ads",
  },
  description: DESCRIPTION,
  applicationName: "Papyrus Ads",
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": `${SITE_URL}/llms.txt`,
    },
  },
  keywords: [
    "Papyrus Ads",
    "app para acompanhar anúncios",
    "dashboard de anúncios",
    "relatório de tráfego pago",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "TikTok Ads",
    "ROAS",
    "CPC",
    "métricas de anúncios",
    "tráfego pago para iniciantes",
  ],
  authors: [{ name: "Papyrus Ads", url: SITE_URL }],
  creator: "Papyrus Ads",
  publisher: "Papyrus Ads",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Papyrus Ads",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Papyrus Ads — painel único para Google, Meta e TikTok Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // TODO: após cadastrar o site, colar os códigos de verificação:
  // verification: { google: "...", other: { "msvalidate.01": "..." } },
};

export const viewport: Viewport = {
  themeColor: "#0C2C4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={sans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        {/* JSON-LD: identidade da marca — lido por Google, Bing e motores de IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(webSiteJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
