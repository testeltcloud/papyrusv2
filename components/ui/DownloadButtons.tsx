import { links } from "@/lib/site";
import { AppleIcon, PlayStoreIcon } from "@/components/icons";

type Props = {
  stacked?: boolean;
  size?: "md" | "lg";
  variant?: "default" | "header" | "white";
  shape?: "pill" | "rect";
  block?: boolean;
  className?: string;
};

export function DownloadButtons({
  stacked = false,
  size = "md",
  variant = "default",
  shape = "pill",
  block = false,
  className = "",
}: Props) {
  const isLg    = size === "lg";
  const isWhite = variant === "white";
  const isRect  = shape === "rect";

  const radius  = isRect ? "rounded-xl" : "rounded-full";
  const pad     = isRect
    ? "px-3 sm:px-5 py-0"
    : isLg ? "px-2 sm:px-6 py-2 sm:py-2.5" : "px-3 sm:px-5 py-1.5 sm:py-2";
  const height  = isRect ? "h-12 sm:h-14" : "";
  const iconSz  = isRect ? "w-4 h-4 sm:w-6 sm:h-6" : isLg ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3.5 h-3.5 sm:w-4 sm:h-4";
  const textSz  = isRect
    ? "text-[clamp(10px,3vw,15px)]"
    : isLg ? "text-[11px] sm:text-[15px]" : "text-[11px] sm:text-[13px]";

  const rowCls  = stacked ? "flex-col" : "flex-row flex-wrap";
  const gapCls  = stacked ? "gap-3" : "gap-2 sm:gap-3";
  const itemFlex = stacked ? "w-full" : "flex-1 min-w-max";

  const iosCls  = isWhite
    ? "bg-white text-navy hover:bg-white/90"
    : "bg-brand text-white hover:bg-brand-dark";
  const droidCls = isWhite
    ? "bg-white text-navy hover:bg-white/90"
    : "bg-green text-white hover:bg-green-dark";

  return (
    <div className={`flex ${rowCls} ${gapCls} ${className}`}>
      <a
        href={links.appStore}
        aria-label="Baixar o Papyrus Ads na App Store"
        className={`inline-flex justify-center items-center gap-2 ${radius} font-extrabold tracking-wide
          transition-all duration-200 active:scale-[0.97]
          ${iosCls} ${pad} ${height} ${textSz} ${itemFlex}`}
      >
        <AppleIcon className={`${iconSz} scale-125 shrink-0`} />
        <span className="whitespace-nowrap">Download para iOS</span>
      </a>

      <a
        href={links.playStore}
        aria-label="Baixar o Papyrus Ads no Google Play"
        className={`inline-flex justify-center items-center gap-2 ${radius} font-extrabold tracking-wide
          transition-all duration-200 active:scale-[0.97]
          ${droidCls} ${pad} ${height} ${textSz} ${itemFlex}`}
      >
        <PlayStoreIcon className={`${iconSz} shrink-0`} />
        <span className="whitespace-nowrap">Download para Android</span>
      </a>
    </div>
  );
}
