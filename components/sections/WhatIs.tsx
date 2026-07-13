import { app, org } from "@/lib/seo";

/*
  ─── Seção "O que é o Papyrus Ads" (GEO / AI search) ───

  Motores de IA (ChatGPT, Perplexity, AI Overviews) decidem se citam uma
  página principalmente pelo TEXTO extraível dela. A landing original é
  forte em imagens, mas pobre em texto — esta seção resolve isso com uma
  resposta direta, no padrão que as IAs preferem:

  1. Pergunta explícita como heading ("O que é...?")
  2. Resposta completa e autossuficiente logo no primeiro parágrafo
  3. Fatos objetivos (plataformas, preço, prazo do teste) em texto puro

  É conteúdo VISÍVEL (texto oculto = cloaking, punido pelo Google).
*/
export function WhatIs() {
  return (
    <section id="o-que-e" aria-labelledby="whatis-title" className="py-14 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-[820px]" data-reveal>
          <h2
            id="whatis-title"
            className="text-[1.6rem] sm:text-4xl font-medium leading-tight tracking-tight text-brand"
          >
            O que é o Papyrus Ads?
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-body">
            {org.description} Você conecta suas contas em poucos minutos,
            pelas integrações oficiais de cada plataforma, e passa a
            acompanhar investimento, ROAS, CPC, cliques e conversões em um
            só lugar — com cada métrica explicada em linguagem simples.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-body">
            O app é gratuito para baixar (iOS e Android) e oferece{" "}
            <strong>{app.freeTrialDays} dias de teste completo, sem cartão
            de crédito</strong>. É feito para donos de negócio e anunciantes
            que investem em tráfego pago e querem decidir com clareza, sem
            depender de planilhas ou relatórios técnicos.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {app.features.map((f) => (
              <li
                key={f}
                className="rounded-2xl bg-surface-2 px-4 py-3 text-sm leading-relaxed text-body ring-1 ring-line"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
