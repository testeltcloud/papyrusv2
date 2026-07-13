"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { platformLogos, logoMark } from "@/lib/images";
import gsap from "gsap";

/*
  "Conexão" hub illustration: a dashed orbit with four platform tiles and the
  Papyrus hexagon in the center. The four tiles continuously orbit the hub, then
  periodically spiral inward — "mixing" into the center hexagon (which pulses) —
  before springing back out and orbiting again. Loops forever.

  Tiles are positioned at the centre (left-1/2 top-1/2) and offset outward with
  GSAP transforms, so the orbit radius scales with the container.
*/
const tiles = [
  platformLogos.googleAds,
  platformLogos.analytics,
  platformLogos.meta,
  platformLogos.tiktok,
];

export function ConnectionIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    const els = tileRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!container || els.length < tiles.length) return;

    // Shared animation state. `angle` spins forever; `radius` (0..1) and `scale`
    // drive the converge/expand; `place()` maps them onto every tile each frame.
    const state = { angle: 0, radius: 1, scale: 1 };
    let R = 0; // orbit radius in px, derived from the container

    const measure = () => {
      R = container.clientWidth * 0.4;
    };

    const place = () => {
      els.forEach((el, i) => {
        const a = (state.angle + 45 + i * 90) * (Math.PI / 180);
        gsap.set(el, {
          x: Math.cos(a) * R * state.radius,
          y: Math.sin(a) * R * state.radius,
          scale: state.scale,
        });
      });
    };

    // Centre each animated element on its anchor point (avoids the CSS
    // -translate / GSAP transform conflict).
    gsap.set(els, { xPercent: -50, yPercent: -50, filter: "blur(0px)" });
    gsap.set(flashRef.current, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.5 });
    measure();

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      gsap.set(els, { opacity: 1 });
      place();
      const roStatic = new ResizeObserver(() => {
        measure();
        place();
      });
      roStatic.observe(container);
      return () => roStatic.disconnect();
    }

    // Drive positions every frame off the shared state.
    gsap.ticker.add(place);
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    // Continuous orbit.
    const spin = gsap.to(state, {
      angle: "+=360",
      duration: 7,
      ease: "none",
      repeat: -1,
    });

    // Intro: pop the tiles out from the centre as they fade in.
    state.radius = 0.18;
    state.scale = 0.4;
    const intro = gsap.timeline();
    intro
      .to(state, { radius: 1, scale: 1, duration: 1.1, ease: "back.out(1.5)" })
      .fromTo(
        els,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.07 },
        0
      );

    // Converge → mix (flash + grow) → expand, on repeat. Positions are absolute
    // seconds within the loop so the flash, blur and grow all peak together.
    const loop = gsap.timeline({ repeat: -1, delay: 2.4 });
    // spiral inward and shrink (they keep spinning, so it swirls in)
    loop.to(state, { radius: 0.04, scale: 0.5, duration: 0.95, ease: "power2.in" }, 0);
    // ring contracts slightly with them, then eases back
    loop.to(
      ringRef.current,
      { scale: 0.9, opacity: 0.5, duration: 0.6, ease: "power2.inOut", yoyo: true, repeat: 1 },
      0.25
    );
    // tiles get a light blur as they fuse
    loop.to(els, { filter: "blur(2.5px)", duration: 0.3, ease: "power1.in" }, 0.6);
    // center logo grows a bit and HOLDS larger while the icons are inside
    loop.to(centerRef.current, { scale: 1.22, duration: 0.6, ease: "power2.out" }, 0.4);
    // soft glow flash at the moment of fusion
    loop.fromTo(
      flashRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 0.85, scale: 1.1, duration: 0.22, ease: "power2.out" },
      0.78
    );
    loop.to(flashRef.current, { opacity: 0, scale: 1.5, duration: 0.55, ease: "power2.out" }, 1.0);
    // expand: icons spring back out, blur clears, center returns to normal
    loop.to(state, { radius: 1, scale: 1, duration: 1.0, ease: "back.out(1.6)" }, 1.3);
    loop.to(els, { filter: "blur(0px)", duration: 0.4, ease: "power1.out" }, 1.3);
    loop.to(centerRef.current, { scale: 1, duration: 0.55, ease: "power2.inOut" }, 1.45);
    // orbit calmly before the next cycle
    loop.to({}, { duration: 1.5 }, 2.3);

    return () => {
      gsap.ticker.remove(place);
      spin.kill();
      intro.kill();
      loop.kill();
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[280px]"
    >
      {/* dashed orbit */}
      <div
        ref={ringRef}
        className="absolute inset-[15%] rounded-full border-2 border-dashed border-brand/25"
      />

      {/* fusion glow flash (sits behind the hexagon) */}
      <div
        ref={flashRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 rounded-full opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(204,236,96,0.55) 38%, rgba(204,236,96,0) 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* center hexagon mark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div ref={centerRef} className="h-12 w-12">
          <Image
            src={logoMark.src}
            alt=""
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* platform tiles (orbiting) */}
      {tiles.map((t, i) => (
        <div
          key={t.alt}
          ref={(el) => {
            tileRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 grid h-[58px] w-[58px] place-items-center rounded-2xl bg-white opacity-0 shadow-card will-change-transform"
        >
          <Image
            src={t.src}
            alt={t.alt}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
