"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    // 1. Revelar imediatamente elementos já visíveis no viewport
    els.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        el.classList.add("revealed");
      }
    });

    // 2. Agora ativa o CSS (os já revelados ficam visíveis, os outros somem)
    document.body.classList.add("js-reveal-ready");

    // 3. Observar os que ainda não estão visíveis
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els
      .filter((el) => !el.classList.contains("revealed"))
      .forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.classList.remove("js-reveal-ready");
    };
  }, []);

  return null;
}
