"use client";

import React, { useId, useState } from "react";
import { ChevronRightIcon } from "@/components/icons";

export type FaqItem = { q: React.ReactNode; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  // Single-open accordion; the first question starts expanded (as in the design).
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const open = i === openIndex;
        const isLast = i === items.length - 1;
        const headingId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;

        return (
          <div
            key={i}
            style={{ zIndex: i }}
            className={`relative transition-colors duration-200
              rounded-t-[20px] ${isLast ? "rounded-b-[20px]" : "rounded-b-none"}
              ${i > 0 ? "-mt-4" : ""}
              ${open ? "bg-brand text-white" : "bg-surface-2 text-ink ring-1 ring-line"}
            `}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className={`flex w-full justify-between gap-4 px-5 text-left md:px-6 ${open ? "items-start py-5" : "items-center py-7 min-h-[96px]"}`}
              >
                <span className={`${open ? "text-[1.05rem] font-medium text-white" : "text-[0.92rem] font-medium text-ink"}`}>
                  {item.q}
                </span>
                <ChevronRightIcon
                  className={`h-5 w-5 shrink-0 mt-0.5 transition-transform duration-200 ${
                    open ? "rotate-90 text-white" : "text-muted"
                  }`}
                />
              </button>
            </h3>

            {/* grid 0fr → 1fr gives a smooth, JS-free height transition.
                The panel stays in the DOM (no `hidden`) so the collapse can
                animate; aria-expanded on the button conveys state to AT. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[0.88rem] leading-relaxed text-white/75 md:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
