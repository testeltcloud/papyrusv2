"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppImage } from "@/components/ui/AppImage";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { ConnectionIllustration } from "@/components/ConnectionIllustration";
import { DashboardFilters } from "@/components/DashboardFilters";
import { images } from "@/lib/images";
import Image from "next/image";
import { links } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const card = "group rounded-[2.5rem] bg-white dark:bg-surface border border-gray-200 dark:border-line shadow-md flex flex-col transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 relative overflow-hidden";
const cardFlat = "group rounded-[2.5rem] bg-white dark:bg-surface flex flex-col transition-all duration-700 ease-out relative overflow-hidden";
const heading = "text-2xl lg:text-[1.75rem] font-medium leading-tight tracking-tight text-ink dark:text-white transition-colors duration-500";
const body = "mt-4 text-[1.125rem] leading-relaxed text-gray-600 dark:text-[rgba(209,213,219,1)] font-medium";

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".feature-header > *", {
      opacity: 0,
      y: 40,
      rotationX: -20,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".feature-header",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    const cards = gsap.utils.toArray(".bento-card");

    cards.forEach((card: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      tl.from(card, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
      });

      const contentElements = card.querySelectorAll(".bento-card-content > *");
      if (contentElements.length > 0) {
        tl.from(contentElements, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
        }, "-=0.4");
      }
    });
  }, { scope: containerRef });

  return (
    <section id="funcionalidades" className="pt-8 pb-14 md:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-[#e6f2ef]/50 dark:from-[#1d3531]/15 to-transparent blur-3xl -z-10 rounded-full" />

      <div className="container-page relative z-10">
        <div className="feature-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-8">
          <h2 className="text-[2rem] sm:text-[3rem] font-medium text-brand dark:text-white leading-[1.1] tracking-[-0.03em] lg:text-[3.2rem] xl:text-[3.5rem] lg:whitespace-nowrap">
            O que o Papyrus Ads faz por você
          </h2>
          <p className="w-full lg:max-w-[340px] text-base lg:text-[1.05rem] leading-relaxed text-gray-600 dark:text-body font-medium lg:text-right">
            Todas as funcionalidades que você precisa para acompanhar seus
            anúncios com clareza, segurança e sem complicações.
          </p>
        </div>

        <div className="bento-grid mt-8 md:mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-12">
          <article className="group rounded-2xl sm:rounded-[2.5rem] bg-[rgba(243,244,246,1)] sm:bg-white dark:bg-surface border border-gray-200 dark:border-line shadow-md flex flex-col transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 relative overflow-hidden bento-card p-8 md:p-10 lg:col-span-5">
            <div className="bento-card-content relative z-10">
              <h3 className={heading}>
                Conexão com Google, Meta Ads e TikTok Ads
              </h3>
              <p className={body}>
                Importe automaticamente métricas das principais plataformas de tráfego pago com segurança e confidencialidade.
              </p>
            </div>
            <div className="mt-10 flex flex-1 items-center justify-center relative">
              <ConnectionIllustration />
            </div>
          </article>

          {/* Mobile: imagem acima do card Dashboard */}
          <div className="sm:hidden col-span-1">
            <Image
              src="/images/adc/Background+Border.png"
              alt="Dashboard"
              width={1400}
              height={900}
              className="w-full h-auto"
            />
          </div>

          <article className="group rounded-2xl sm:rounded-[2.5rem] bg-[#115D8C] sm:bg-white dark:bg-surface border-0 sm:border sm:border-gray-200 dark:border-line shadow-md flex flex-col transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 relative overflow-hidden bento-card lg:col-span-7">
            <div className="bento-card-content p-8 pb-0 md:p-10 md:pb-0 relative z-10">
              <h3 className={`${heading} hidden sm:block`}>Dashboard simples e visual</h3>
              <p className="mt-4 text-[14px] font-normal leading-none tracking-normal text-white sm:text-[#0B0B0A] sm:dark:text-[rgba(209,213,219,1)] sm:leading-relaxed sm:text-[1.125rem]">
                Entre em poucos segundos como suas campanhas estão performando. Ideal para consultar o relatório no sofá, ou nos intervalos entre reuniões.
              </p>
            </div>
            <div className="relative mt-4 flex flex-1 flex-col">
              <DashboardFilters />
            </div>
          </article>

          {/* Mobile: layout de imagens (oculto em sm+) */}
          <div className="sm:hidden col-span-1 flex gap-3">
            {/* Esquerda: imagemEsqueda */}
            <div className="flex-1 min-w-0">
              <Image
                src="/images/adc/imagemEsqueda.png"
                alt="Indicadores claros"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            {/* Direita: imagemDireitaSuperior + botões */}
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <Image
                src="/images/adc/imagemDireitaSuperior.png"
                alt="15 dias grátis"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <a href={links.appStore} aria-label="Baixar na App Store" className="block">
                <Image
                  src="/images/adc/ButtonAzul.png"
                  alt="Download para iOS"
                  width={620}
                  height={176}
                  className="w-full h-auto"
                />
              </a>
              <a href={links.playStore} aria-label="Baixar no Google Play" className="block">
                <Image
                  src="/images/adc/ButtonVerde.png"
                  alt="Download para Android"
                  width={720}
                  height={176}
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>

          {/* Indicadores card (oculto no mobile) */}
          <article className={`${cardFlat} bento-card overflow-hidden hidden sm:flex lg:col-span-4 flex-col`}>
            <div className="bento-card-content p-8 pb-0 md:p-10 md:pb-0 relative z-10">
              <h3 className={heading}>Indicadores claros e direto ao ponto</h3>
              <p className={body}>
                Veja o que realmente importa: investimento, vendas, ROAS, CPA e muito mais — sem precisar de tradução da agência.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center pb-0 relative group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden">
              <AppImage
                asset={images.featureTodos}
                sizes="(min-width: 1024px) 280px, 80vw"
                className="h-auto w-full max-w-[260px] lg:max-w-[280px] drop-shadow-xl"
              />
            </div>
          </article>

          {/* Glossário card (oculto no mobile) */}
          <article className={`${card} bento-card overflow-hidden hidden sm:flex lg:col-span-4 flex-col`}>
            <div className="bento-card-content p-8 pb-0 md:p-10 md:pb-0 relative z-10">
              <h3 className={heading}>Glossário integrado</h3>
              <p className={body}>
                Não sabe o que é CAC ou ROAS? O app te explica. Com definições simples e exemplos, você aprende enquanto usa.
              </p>
            </div>
            <div className="mt-6 flex flex-1 items-end justify-center pb-0 relative group-hover:scale-105 transition-transform duration-700 ease-out overflow-hidden">
              <AppImage
                asset={images.featureGlossary}
                sizes="(min-width: 1024px) 280px, 80vw"
                className="h-auto w-full max-w-[260px] lg:max-w-[280px] drop-shadow-2xl"
              />
            </div>
          </article>

          {/* 15 dias grátis + download (oculto no mobile) */}
          <div className="bento-card hidden sm:flex lg:col-span-4 flex-col justify-between gap-6">
            <article className={`${cardFlat} flex flex-col flex-1 overflow-hidden group`}>
              <div className="flex flex-1 items-center justify-center px-0 pt-0 relative min-h-[160px] md:min-h-[200px] overflow-hidden">
                <AppImage
                  asset={images.featureGift}
                  sizes="(min-width: 1024px) 220px, 70vw"
                  className="h-auto w-full max-w-[180px] md:max-w-[220px] scale-100 md:scale-[1.1] origin-center transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-[1.18]"
                />
              </div>
              <div className="bento-card-content p-8 pt-0 md:p-10 md:pt-0 relative z-20">
                <h3 className={heading}>15 dias grátis para testar</h3>
                <p className={`${body} mt-3`}>
                  Experimente agora, sem cartão de crédito. Descubra como o app vai facilitar sua rotina de anúncios na prática.
                </p>
              </div>
            </article>
            <div className="flex justify-center items-stretch gap-3 h-[52px]">
              <a href={links.appStore} aria-label="Baixar na App Store" className="flex-none">
                <Image src="/images/adc/ButtonAzul.png" alt="Download para iOS" width={620} height={176} className="h-full w-auto" />
              </a>
              <a href={links.playStore} aria-label="Baixar no Google Play" className="flex-none">
                <Image src="/images/adc/ButtonVerde.png" alt="Download para Android" width={720} height={176} className="h-full w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
