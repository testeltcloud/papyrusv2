"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import { links } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SpecialistCTA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    /* texto entra de baixo em cascata */
    gsap.from(".specialist-text > *", {
      opacity: 0,
      y: 28,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".specialist-card",
        start: "top 82%",
        once: true,
      },
    });

    /* imagem desliza da esquerda */
    gsap.from(".specialist-image", {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ".specialist-card",
        start: "top 82%",
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section className="py-14 md:py-24" ref={containerRef}>
      <div className="container-page">
        <div data-reveal className="specialist-card overflow-hidden rounded-[28px] bg-navy text-white">
          <div className="grid lg:grid-cols-2 lg:items-center overflow-hidden">

            {/* Imagem — segunda no mobile (abaixo do texto), primeira (esquerda) no desktop */}
            <div className="specialist-image order-1 lg:order-1 group flex items-end justify-center px-8 pt-6 pb-0 sm:px-14 lg:px-0 lg:pt-0 lg:self-stretch lg:items-end">
              {/* Mobile: imagem específica sem corte */}
              <Image
                src="/images/adc/phonemobile.png"
                alt="Papyrus Ads no celular"
                width={1272}
                height={776}
                className="sm:hidden mx-auto h-auto w-full max-w-[280px] mt-4"
              />
              {/* Desktop: imagem original com hover */}
              <AppImage
                asset={images.specialistPhones}
                sizes="(min-width: 1024px) 480px, 80vw"
                className="hidden sm:block mx-auto h-auto w-full max-w-[300px] lg:max-w-[370px]
                           my-4 lg:my-6
                           transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </div>

            {/* Texto — primeiro no mobile, segundo (direita) no desktop */}
            <div className="specialist-text order-2 lg:order-2 min-w-0 p-7 sm:p-10 md:p-12 lg:p-14">
              <h2 className="text-[1.35rem] font-bold leading-[1.15] tracking-tight text-white whitespace-nowrap sm:text-[2rem] md:text-[2.25rem]">
                Fale com um especialista.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                Nossa equipe está pronta para te ajudar a entender como o Papyrus
                Ads pode transformar a forma como você acompanha seus resultados.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/75 sm:mt-4 sm:text-lg">
                Se quiser tirar dúvidas ou ver o app em ação, é só chamar a gente
                no WhatsApp.
              </p>

              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-7 block w-full sm:w-auto">
                <Image
                  src="/images/adc/whatsappespecilista.png"
                  alt="Falar com um especialista no WhatsApp"
                  width={1272}
                  height={192}
                  className="w-full sm:w-auto sm:h-14 h-auto"
                />
              </a>

              <p className="mt-6 font-bold text-white sm:mt-7">Sem robôs, sem enrolação.</p>
              <p className="mt-1 text-sm text-white/70 sm:text-base">
                Uma conversa de verdade com quem entende do assunto.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
