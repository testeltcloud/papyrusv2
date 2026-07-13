import type { MetadataRoute } from "next";

/* Web App Manifest — reforça a identidade da marca para navegadores e buscadores. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Papyrus Ads",
    short_name: "Papyrus Ads",
    description:
      "Acompanhe Google Ads, Meta Ads e TikTok Ads em um único painel simples.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0C2C4A",
    lang: "pt-BR",
    icons: [{ src: "/images/logo-mark.png", sizes: "any", type: "image/png" }],
  };
}
