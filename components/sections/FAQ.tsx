import Image from "next/image";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { links } from "@/lib/site";
import { faqData } from "@/lib/seo";

/*
  Fonte única: lib/seo.ts. O mesmo texto alimenta o accordion visível e o
  JSON-LD FAQPage (app/page.tsx) — Google exige que os dois sejam idênticos.
*/
const faqs: FaqItem[] = faqData.map((f) => ({ q: f.q, a: f.a }));

export function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
            {/* Coluna esquerda */}
            <div data-reveal="left" className="lg:col-span-5">
              <h2 className="text-[1.6rem] sm:text-5xl font-medium leading-tight tracking-tight">
                Perguntas<br />frequentes
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-body">
                Ainda tem dúvidas?
                <br />
                A gente responde com transparência.
              </p>
              <div className="mt-7 flex flex-row md:flex-col items-stretch gap-3">
                <a href={links.appStore} aria-label="Baixar na App Store" className="flex-1 md:flex-none">
                  <Image src="/images/adc/ButtonAzul.png" alt="Download para iOS" width={620} height={176} className="w-full md:w-[210px] h-auto" />
                </a>
                <a href={links.playStore} aria-label="Baixar no Google Play" className="flex-1 md:flex-none">
                  <Image src="/images/adc/ButtonVerde.png" alt="Download para Android" width={720} height={176} className="w-full md:w-[210px] h-auto" />
                </a>
              </div>
            </div>

            {/* Coluna direita — FAQ accordion */}
            <div data-reveal data-delay="2" className="lg:col-span-7">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
