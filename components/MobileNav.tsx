"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/Logo";
import { MenuIcon, CloseIcon, ChevronRightIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { nav, links } from "@/lib/site";
import Image from "next/image";

export function MobileNav() {
  const [open, setOpen]       = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-canvas dark:bg-[#0B0F1A]"
    >
      {/* blobs decorativos */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand/[0.06] dark:bg-brand/[0.12] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-40 -left-16 h-48 w-48 rounded-full bg-mint/[0.07] dark:bg-mint/[0.06] blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex h-20 items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-2">
          {/* Box do tema */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface dark:bg-surface-2 shadow-sm ring-1 ring-line/40">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex items-center gap-1.5 rounded-xl bg-surface dark:bg-surface-2 px-4 py-2.5 text-sm font-semibold text-ink shadow-sm ring-1 ring-line/40 transition-all active:scale-95"
          >
            <CloseIcon className="h-4 w-4" />
            Fechar
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

      {/* Nav items */}
      <nav className="relative z-10 mt-6 flex flex-col gap-2 px-6" aria-label="Principal">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
          Navegação
        </p>
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between rounded-2xl bg-white/70 dark:bg-surface/60 px-5 py-4 shadow-sm ring-1 ring-line/30 transition-all hover:bg-brand hover:ring-brand active:scale-[0.98]"
          >
            <span className="text-lg font-semibold text-ink transition-colors group-hover:text-white">
              {item.label}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface dark:bg-surface-2 shadow-sm transition-all group-hover:bg-white/20">
              <ChevronRightIcon className="h-4 w-4 text-muted transition-colors group-hover:text-white" />
            </span>
          </a>
        ))}
      </nav>

      {/* Botões de download */}
      <div className="relative z-10 mt-auto px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-4">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
          Baixe o app
        </p>
        <div className="flex gap-3">
          <a href={links.appStore} aria-label="Baixar na App Store" className="block flex-1 min-w-0">
            <Image
              src="/images/adc/ButtonAzul.png"
              alt="Download para iOS"
              width={620}
              height={176}
              className="w-full h-12 object-fill"
            />
          </a>
          <a href={links.playStore} aria-label="Baixar no Google Play" className="block flex-1 min-w-0">
            <Image
              src="/images/adc/ButtonVerde.png"
              alt="Download para Android"
              width={720}
              height={176}
              className="w-full h-12 object-fill"
            />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid h-11 w-11 place-items-center rounded-xl text-navy transition-colors hover:bg-surface"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </div>
  );
}
