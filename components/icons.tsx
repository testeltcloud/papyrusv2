import type { SVGProps } from "react";

/*
  Inline SVG icons. Inlining keeps them zero-request, tree-shakeable, and
  recolorable with `currentColor`. All are decorative by default
  (aria-hidden); wrappers provide the accessible label.
*/
type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
  ...props,
});

export function AppleIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M16.06 12.6c-.02-1.94 1.58-2.87 1.65-2.92-.9-1.32-2.3-1.5-2.8-1.52-1.19-.12-2.32.7-2.93.7-.6 0-1.53-.68-2.52-.66-1.3.02-2.49.75-3.16 1.91-1.35 2.34-.35 5.8.97 7.7.64.93 1.41 1.97 2.41 1.93.97-.04 1.34-.62 2.51-.62 1.17 0 1.5.62 2.52.6 1.04-.02 1.7-.94 2.34-1.88.73-1.08 1.04-2.12 1.05-2.18-.02-.01-2.02-.78-2.04-3.06zM14.2 6.8c.53-.64.89-1.53.79-2.42-.76.03-1.69.51-2.24 1.15-.49.56-.92 1.47-.81 2.33.85.07 1.72-.43 2.26-1.06z" />
    </svg>
  );
}

export function PlayStoreIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none">
      <path
        d="M3.6 2.5 13.4 12 3.6 21.5a1.3 1.3 0 0 1-.6-1.1V3.6c0-.45.23-.85.6-1.1z"
        fill="currentColor"
        opacity="0.95"
      />
      <path d="m16.3 9.1 2.9 1.65c.96.55.96 1.95 0 2.5L16.3 14.9 13.4 12l2.9-2.9z" fill="currentColor" />
      <path d="M3.6 2.5c.2-.14.46-.2.74-.16l11.96 6.76L13.4 12 3.6 2.5z" fill="currentColor" opacity="0.75" />
      <path d="M3.6 21.5 13.4 12l2.9 2.9L4.34 21.66c-.28.04-.54-.02-.74-.16z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c2.16 0 4.18.84 5.71 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.45-3.62 8.07-8.08 8.07a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.04 8.04 0 0 1-1.26-4.32c0-4.46 3.62-8.07 8.08-8.07zm-4.55 4.4c-.18 0-.46.06-.7.31-.24.25-.92.9-.92 2.19 0 1.3.94 2.55 1.07 2.72.13.18 1.84 2.81 4.46 3.94 2.18.94 2.62.75 3.1.71.48-.04 1.54-.63 1.76-1.24.22-.6.22-1.12.16-1.23-.07-.11-.24-.18-.5-.31-.27-.13-1.55-.77-1.79-.85-.24-.09-.42-.13-.59.13-.18.25-.68.85-.83 1.03-.15.18-.31.2-.57.07-.27-.13-1.11-.41-2.11-1.31a7.9 7.9 0 0 1-1.46-1.82c-.15-.26-.02-.4.11-.53.12-.12.27-.31.4-.46.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45h-.5z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M14 8.5V7c0-.8.2-1.2 1.4-1.2H17V3.1C16.6 3 15.6 3 14.5 3 12 3 10.6 4.3 10.6 7v1.5H8V11h2.6v8h3.1v-8h2.3l.4-2.5H14z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M6.1 5.1A1.6 1.6 0 1 1 6 8.3a1.6 1.6 0 0 1 .1-3.2zM4.7 9.6h2.9V19H4.7V9.6zm5 0h2.78v1.28h.04c.39-.7 1.34-1.45 2.76-1.45 2.95 0 3.5 1.85 3.5 4.25V19h-2.9v-4.18c0-1 0-2.28-1.43-2.28-1.43 0-1.65 1.08-1.65 2.2V19H9.7V9.6z" />
    </svg>
  );
}
