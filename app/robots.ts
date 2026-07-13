import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/*
  Gera /robots.txt.

  A regra { userAgent: "*", allow: "/" } já permite TODOS os crawlers
  (tradicionais e de IA).

  Bots de BUSCA por IA notáveis (já incluídos no "*"):
    OAI-SearchBot (busca do ChatGPT), ChatGPT-User (navegação ao vivo),
    Claude-SearchBot / Claude-User (Claude), PerplexityBot / Perplexity-User,
    Google-Extended (Gemini/AI Overviews usa o Googlebot normal),
    Applebot (Siri/Apple Intelligence), Amazonbot (Alexa), cohere-ai, Bytespider.

  Bots de TREINAMENTO notáveis (já incluídos no "*"):
    GPTBot, ClaudeBot, CCBot, meta-externalagent.
    Se um dia quiser bloquear treino mas manter busca, basta adicionar
    regras explícitas de "disallow" para esses bots específicos.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
