import type { Config } from "tailwindcss";

/**
 * The palette is driven by CSS custom properties declared in `app/globals.css`
 * (the `:root` block). Change a value there once and the whole site re-themes.
 * Colors are stored as space-separated RGB channels so Tailwind's
 * `<alpha-value>` opacity modifiers (e.g. `bg-brand/10`) keep working.
 */
const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: withVar("--brand"),
          dark: withVar("--brand-dark"),
        },
        green: {
          DEFAULT: withVar("--green"),
          dark: withVar("--green-dark"),
        },
        mint: withVar("--mint"),
        navy: {
          DEFAULT: withVar("--navy"),
          dark: withVar("--navy-dark"),
        },
        ink: withVar("--ink"),
        body: withVar("--body"),
        muted: withVar("--muted"),
        surface: withVar("--surface"),
        "surface-2": withVar("--surface-2"),
        line: withVar("--line"),
        canvas: withVar("--bg"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1800px",
      },
      borderRadius: {
        card: "20px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgb(16 24 40 / 0.04), 0 12px 32px -12px rgb(16 24 40 / 0.12)",
        soft: "0 8px 30px -10px rgb(16 24 40 / 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--accordion-height)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
