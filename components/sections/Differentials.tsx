"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import type { ImageAsset } from "@/lib/images";
import Image from "next/image";
import { links } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Item = {
  image: ImageAsset;
  mobileImage?: string;
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  body: string;
  gradient?: boolean;
};

const items: Item[] = [
  {
    image: images.diffTransparency,
    mobileImage: "/images/adc/homemCortado.png",
    eyebrow: "Transparência real",
     eyebrowColor: "rgba(17,93,140,1)",
    title: "Você vê o que a agência vê.",
    body: "Acesso direto aos dados das plataformas, sem filtros ou interpretações. Nada de relatórios manipulados — aqui a informação é fiel à realidade.",
  },
  {
    image: images.diffClarity,
    mobileImage: "/images/adc/celCorte.png",
    gradient: true,
    eyebrow: "Clareza e simplicidade",
     eyebrowColor: "rgba(17,93,140,1)",
    title: "Tudo explicado de forma simples.",
    body: "Indicadores como ROAS, CAC e CPA aparecem com explicações e exemplos claros. Entenda os resultados do seu negócio com confiança, mesmo sem formação técnica.",
  },
  {
    image: images.diffSecurity,
    eyebrow: "Segurança em primeiro lugar",
    eyebrowColor: "rgba(17,93,140,1)",
    title: "Seus dados, sob sua proteção.",
    body: "Integrações seguras com a autorização oficial do Google e Meta. Seus dados são criptografados e usados apenas por você.",
  },
];

export function Differentials() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".diff-card", {
      opacity: 0,
      scale: 0.82,
      duration: 0.65,
      stagger: 0.14,
      ease: "back.out(1.5)",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".diff-grid",
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="diferencas" className="py-14 md:py-24" ref={containerRef}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <h2 className="text-[clamp(1.5rem,7vw,2.25rem)] leading-tight tracking-tight sm:text-5xl text-left sm:text-center">
            <span className="whitespace-nowrap"><span className="font-light">Por que o </span><span className="font-bold">Papyrus Ads</span></span>
            <br className="sm:hidden" />
            <span className="font-light"> é diferente</span>
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-body sm:whitespace-nowrap">
            Feito para quem quer entender os números — sem depender da agência, sem linguagem difícil, sem surpresas.
          </p>
          {/* Desktop: botões imagem abaixo do subtítulo */}
          <div className="hidden sm:flex justify-center items-stretch gap-3 h-[52px] mt-7">
            <a href={links.appStore} aria-label="Baixar na App Store" className="flex-none">
              <Image src="/images/adc/ButtonAzul.png" alt="Download para iOS" width={620} height={176} className="h-full w-auto object-fill" />
            </a>
            <a href={links.playStore} aria-label="Baixar no Google Play" className="flex-none">
              <Image src="/images/adc/ButtonVerde.png" alt="Download para Android" width={720} height={176} className="h-full w-auto object-fill" />
            </a>
          </div>
        </div>

        <div className="diff-grid mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.eyebrow}
              className="diff-card group cursor-default"
            >
              <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04]">
                {item.mobileImage && (
                  <Image
                    src={item.mobileImage}
                    alt={item.eyebrow}
                    width={1400}
                    height={640}
                    className="sm:hidden w-full h-auto"
                  />
                )}
                <AppImage
                  asset={item.image}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 88vw"
                  className={`h-[220px] sm:h-auto w-full object-cover object-[center_25%] sm:object-center${item.mobileImage ? " hidden sm:block" : ""}`}
                />
                {item.gradient && (
                  <>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-brand/[0.22] via-brand/[0.08] to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-white/70 dark:from-canvas/60 to-transparent" />
                  </>
                )}
              </div>
              <p className="mt-5 text-xs sm:text-base font-medium text-muted" style={item.eyebrowColor ? { color: item.eyebrowColor } : undefined}>
                {item.eyebrow}
              </p>
              <h3 className="mt-1 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-xs sm:text-base leading-relaxed text-body h-[39px] overflow-hidden sm:h-auto">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        {/* Mobile: botões imagem abaixo dos cards */}
        <div className="sm:hidden mt-7 flex items-stretch gap-3">
                        <a href={links.appStore} aria-label="Baixar na App Store" className="flex-1">
                          <Image src="/images/adc/ButtonAzul.png" alt="Download para iOS" width={620} height={176} className="w-full h-full object-fill" />
                        </a>
                        <a href={links.playStore} aria-label="Baixar no Google Play" className="flex-1">
                          <Image src="/images/adc/ButtonVerde.png" alt="Download para Android" width={720} height={176} className="w-full h-full object-fill" />
                        </a>
                      </div>
      </div>
    </section>
  );
}
