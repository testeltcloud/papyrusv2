import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { WhatIs } from "@/components/sections/WhatIs";
import { Features } from "@/components/sections/Features";
import { Differentials } from "@/components/sections/Differentials";
import { SpecialistCTA } from "@/components/sections/SpecialistCTA";
import { FAQ } from "@/components/sections/FAQ";
import { AboutCTA } from "@/components/sections/AboutCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { mobileAppJsonLd, faqPageJsonLd, jsonLdScript } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD da página: o app (SoftwareApplication) e o FAQ (FAQPage).
          Lidos por Google/Bing e pelos motores de resposta por IA. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(mobileAppJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageJsonLd()) }}
      />

      <ScrollReveal />
      <Header />
      {/* overflow-x-clip stops the rotated hero phones from widening the page
          (horizontal only — vertical overflow stays visible for the phone z-index
          effect, and the sticky Header lives outside <main> so it's unaffected). */}
      <main className="overflow-x-clip">
        <Hero />
        {/* <TransitionSection /> */}
        <WhatIs />
        <Features />
        <Differentials />
        <SpecialistCTA />
        <FAQ />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
