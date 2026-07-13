"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TransitionSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const section = sectionRef.current;
    if (!heading || !section) return;

    gsap.fromTo(
      heading,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-white dark:bg-canvas py-20 md:py-24 lg:py-28"
    >
      <div
        ref={headingRef}
        className="mx-auto max-w-[1240px] px-6 lg:px-10 opacity-0"
      >
        <div className="flex flex-col items-start gap-5 text-left lg:flex-row lg:items-start lg:justify-between lg:gap-0 lg:text-left">
          <div className="flex flex-col items-start lg:items-start max-w-md lg:w-[42%]">
            <div className="mb-4 inline-flex rounded-full border border-[#1d3531]/10 dark:border-white/10 bg-[#1d3531]/5 dark:bg-white/5 px-3 py-1 text-xs font-bold tracking-wider text-[#1d3531] dark:text-white/80 uppercase">
              Transparência
            </div>
            <h2 className="text-[2.25rem] sm:text-[2.5rem] lg:text-[2.75rem] font-bold text-[#1d3531] dark:text-white leading-[1.1] tracking-tight">
              Indicadores claros e <br className="hidden lg:block" />
              <span className="relative inline-block whitespace-nowrap mt-1">
                <span className="relative z-10">direto ao ponto</span>
                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ccec60] rounded-sm"></span>
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:w-[38%] lg:mt-8 lg:text-right">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-body">
              Veja o que realmente importa:{" "}
              <strong className="font-semibold text-[#1d3531] dark:text-white">investimento, vendas, ROAS, CPA</strong>{" "}
              e muito mais — sem precisar de tradução da agência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
