import type { MetadataRoute } from "next";
import { SITE_URL, LAST_MODIFIED } from "@/lib/seo";

/*
  Gera /sitemap.xml. Ao criar novas páginas (ex.: /blog, /precos, /sobre),
  adicione-as aqui — motores de IA usam o sitemap para descobrir conteúdo
  e o campo lastModified para avaliar o frescor da informação.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
