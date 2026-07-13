import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL, jsonLdScript } from "@/lib/seo";

/*
  ─── Layout compartilhado das páginas legais ───

  Server component puro (zero JavaScript no cliente → nota máxima de
  performance). Recebe o conteúdo como children e cuida de:
  - Header/Footer do site (links internos extras, bom para o Seobility)
  - JSON-LD de BreadcrumbList + WebPage (Google e motores de IA)
  - Tipografia consistente com o resto do site
*/

export type LegalSection = {
  title: string;
  body: React.ReactNode;
};

export function LegalArticle({
  title,
  updated,
  path,
  description,
  intro,
  sections,
  outro,
}: {
  title: string;
  updated: string; // ex.: "12/02/2026"
  path: string; // ex.: "/termos-de-uso"
  description: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
  outro?: React.ReactNode;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}${path}` },
    ],
  };
  const [d, m, y] = updated.split("/");
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: title,
    description,
    inLanguage: "pt-BR",
    dateModified: `${y}-${m}-${d}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(webPage) }}
      />

      <Header />
      <main className="overflow-x-clip">
        <article className="py-28 md:py-36">
          <div className="container-page">
            <div className="mx-auto max-w-[820px]">
              <nav aria-label="Trilha de navegação" className="text-sm text-muted">
                <a href="/" className="hover:underline">Home</a>
                <span aria-hidden> / </span>
                <span>{title}</span>
              </nav>

              <h1 className="mt-4 text-[1.9rem] sm:text-5xl font-medium leading-tight tracking-tight text-brand">
                {title}
              </h1>
              <p className="mt-3 text-sm text-muted">
                Última atualização: <time dateTime={`${y}-${m}-${d}`}>{updated}</time>
              </p>

              {intro ? (
                <div className="mt-8 text-base leading-relaxed text-body">{intro}</div>
              ) : null}

              {/* Sumário — links internos de âncora ajudam leitores e crawlers */}
              <nav aria-label="Sumário" className="mt-8 rounded-2xl bg-surface-2 p-5 ring-1 ring-line">
                <h2 className="text-sm font-semibold text-ink">Nesta página</h2>
                <ol className="mt-3 grid gap-2 sm:grid-cols-2 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.title}>
                      <a href={`#secao-${i + 1}`} className="text-body hover:text-brand hover:underline">
                        {String(i + 1).padStart(2, "0")} — {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {sections.map((s, i) => (
                <section key={s.title} id={`secao-${i + 1}`} className="mt-10 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-ink">
                    {i + 1}. {s.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-body [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
                    {s.body}
                  </div>
                </section>
              ))}

              {outro ? (
                <div className="mt-10 rounded-2xl bg-surface-2 p-5 text-base leading-relaxed text-body ring-1 ring-line">
                  {outro}
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
