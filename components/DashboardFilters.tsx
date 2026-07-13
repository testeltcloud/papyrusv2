"use client";

import { useEffect, useRef } from "react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import gsap from "gsap";

// DOM order of the 2×2 grid: Todos, Google (top) · Meta, TikTok (bottom)
const buttons = [
  images.dashTodos,
  images.dashGoogle,
  images.dashMeta,
  images.dashTiktok,
];

export function DashboardFilters() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const btns = btnRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cursor || btns.length < 4) return;

    // Target = the right ">" tip of a button, relative to the grid. The hand's
    // fingertip sits ~(11, 5)px from its top-left, so subtract that to land it there.
    const tipFor = (el: HTMLDivElement) => ({
      x: el.offsetLeft + el.offsetWidth * 0.9 - 11,
      y: el.offsetTop + el.offsetHeight * 0.5 - 5,
    });

    const start = tipFor(btns[0]);
    gsap.set(cursor, { x: start.x, y: start.y, opacity: 1 });
    gsap.set(btns, { filter: "drop-shadow(0 1px 2px rgba(11,59,90,0.05))" });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Walk the perimeter clockwise: Todos → Google → TikTok → Meta → repeat.
    const order = [btns[0], btns[1], btns[3], btns[2]];

    // repeatRefresh re-reads the function-based positions each loop (responsive).
    const tl = gsap.timeline({ repeat: -1, repeatRefresh: true, delay: 0.5 });
    order.forEach((el) => {
      // move the cursor to this button's ">" tip
      tl.to(cursor, {
        x: () => tipFor(el).x,
        y: () => tipFor(el).y,
        duration: 0.6,
        ease: "power3.inOut",
      });
      // the button reacts (lifts + scales + shadow) as the hand lands
      tl.to(
        el,
        { scale: 1.07, y: -3, filter: "drop-shadow(0 12px 20px rgba(11,59,90,0.24))", duration: 0.26, ease: "back.out(2)", overwrite: "auto" },
        ">-0.1"
      );
      // the hand "presses" (taps) as it lands
      tl.to(cursor, { scale: 0.8, duration: 0.11, yoyo: true, repeat: 1, ease: "power2.inOut" }, "<");
      // dwell on the item
      tl.to({}, { duration: 0.75 });
      // release the button
      tl.to(el, { scale: 1, y: 0, filter: "drop-shadow(0 1px 2px rgba(11,59,90,0.05))", duration: 0.3, ease: "power2.inOut" });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center gap-4 px-6 pt-4 pb-6 md:gap-6 md:px-8 md:pb-8">
      {/* 2×2 platform filter buttons + animated cursor */}
      <div ref={gridRef} className="relative grid flex-1 grid-cols-2 gap-3 md:gap-4">
        {buttons.map((b, i) => (
          <div
            key={b.alt}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            className="will-change-transform"
          >
            <AppImage asset={b} sizes="(min-width: 1024px) 17vw, 40vw" className="h-auto w-full" />
          </div>
        ))}

        {/* animated hand cursor that hovers each button's ">" */}
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-10 origin-top opacity-0 will-change-transform drop-shadow-md"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff" stroke="#0B3B5A" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
            <path d="M9 11.5V5.4a1.55 1.55 0 0 1 3.1 0v4.9m0-1.4a1.55 1.55 0 0 1 3.1 0v2m0-1.3a1.55 1.55 0 0 1 3.1 0V16c0 3.2-2.1 5.4-5.4 5.4h-1.3c-1.7 0-2.8-.6-4-1.9l-3.1-3.4a1.55 1.55 0 0 1 2.2-2.2l1.6 1.5V11.5Z" />
          </svg>
        </div>
      </div>

      {/* Period filter panel */}
      <div className="w-[34%] shrink-0">
        <AppImage asset={images.dashFiltro} sizes="(min-width: 1024px) 20vw, 32vw" className="h-auto w-full" />
      </div>
    </div>
  );
}
