"use client";

import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";

export function Logo({ className = "" }: { className?: string }) {
  const toggle = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Papyrus Ads — alternar tema"
      className={`inline-flex items-center cursor-pointer ${className}`}
    >
      <AppImage
        asset={images.logo}
        className="h-10 w-auto"
        sizes="150px"
        priority
      />
    </button>
  );
}
