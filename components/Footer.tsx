import Image from "next/image";
import { Logo } from "@/components/Logo";
import { links } from "@/lib/site";

const usefulLinks = [
  { label: "Sobre o Papyrus Ads", href: "#home" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos", href: "#download-ios" },
  { label: <>Fale com um<br />especialista</>, href: links.whatsapp },
];
//teste"

const legalLinks = [
  { label: "Termos de uso", href: "/termos-de-uso" },
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
];

const socials = [
  { label: "Instagram", src: "/images/adc/instagram-3d.png", href: links.instagram },
  { label: "Facebook",  src: "/images/adc/facebook-3d.png",  href: links.facebook  },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-canvas">
      <div className="container-page py-8 sm:py-14">
        {/* ── Card wrapper ── */}
        <div
          data-reveal
          className="rounded-2xl sm:rounded-3xl bg-surface-2 dark:bg-surface p-6 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Brand — full width on mobile, 5 cols on desktop */}
            <div className="lg:col-span-5">
              <Logo className="scale-110 origin-left sm:scale-125 sm:mb-2" />
              <p className="mt-4 text-[clamp(7px,2.15vw,15px)] leading-relaxed text-body whitespace-nowrap sm:whitespace-normal">
                Simples, confiável e feito para CEOs que querem entender seus<br />
                anúncios sem complicação.
              </p>
              <ul className="mt-5 flex items-center gap-1.5 sm:gap-2">
                {socials.map(({ label, src, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                      className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-xl sm:rounded-2xl bg-surface-2 dark:bg-surface-2 transition-opacity hover:opacity-75"
                    >
                      <Image src={src} alt={label} width={56} height={56} className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom columns — merges into 12-col grid on lg */}
            <div className="grid grid-cols-12 gap-x-3 gap-y-8 sm:gap-x-8 lg:col-span-7 lg:grid-cols-7">
              {/* Useful links — left column */}
              <nav className="col-span-5 lg:col-span-3" aria-label="Links úteis">
                <h2 className="text-sm font-semibold text-ink">
                  Links úteis
                </h2>
                <ul className="mt-4 space-y-5 sm:space-y-5 text-[0.75rem] min-[400px]:text-[0.85rem] sm:text-[0.95rem]">
                  {usefulLinks.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-muted transition-colors hover:text-brand whitespace-nowrap" target="_blank" rel="noopener noreferrer nofollow">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-3.5 text-[0.75rem] min-[400px]:text-[0.85rem] sm:text-[0.95rem]">
                  {legalLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="text-muted transition-colors hover:text-brand" target="_blank" rel="noopener noreferrer nofollow">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Download + contact — right column */}
              <div className="col-span-7 lg:col-span-4">
                <h2 className="text-sm font-semibold text-ink">
                  Baixe agora mesmo
                </h2>
                <div className="mt-4 flex flex-col sm:flex-row items-stretch gap-2 sm:h-12">
                  <a href={links.appStore} aria-label="Baixar na App Store Footer 1" className="flex-none" target="_blank" rel="noopener noreferrer nofollow">
                    <Image src="/images/adc/ButtonAzul.png" alt="Download para iOS" width={620} height={176} className="h-12 sm:h-full w-auto" />
                  </a>
                  <a href={links.playStore} aria-label="Baixar no Google Play Footer 1" className="flex-none" target="_blank" rel="noopener noreferrer nofollow">
                    <Image src="/images/adc/ButtonVerde.png" alt="Download para Android" width={720} height={176} className="h-12 sm:h-full w-auto" />
                  </a>
                </div>

                <h2 className="mt-6 sm:mt-8 text-sm font-semibold text-ink">
                  Dúvidas?
                </h2>
                <p className="mt-2 sm:mt-3 text-[0.65rem] min-[400px]:text-[0.75rem] sm:text-[0.95rem] text-body whitespace-nowrap">
                  Fale com a gente pelo WhatsApp:
                </p>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  
                  className="btn mt-3 h-11 sm:h-12 w-full rounded-xl border border-brand bg-white px-2 min-[400px]:px-3 sm:px-5 font-extrabold tracking-wide text-[0.65rem] min-[400px]:text-[0.8rem] sm:text-[0.95rem] text-ink shadow-sm hover:bg-surface-2 dark:bg-surface-2 dark:hover:bg-surface"
                 rel="noopener noreferrer nofollow">
                  <Image src="/images/adc/Vector.png" alt="WhatsApp" width={20} height={20} className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  Entrar em contato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright — outside the card */}
        <div className="mt-8 sm:mt-10 pb-2 text-left sm:text-center text-xs sm:text-sm text-muted">
          © {new Date().getFullYear()} Papyrus Ads — Todos os direitos
          reservados. | Desenvolvido por{" "}
          <a
            href="https://ltcloud.com.br/"
            target="_blank"
            
            className="font-medium text-ink hover:underline"
           rel="noopener noreferrer nofollow">
            Lt Cloud
          </a>{" "}
          <span aria-hidden>🩵</span>
        </div>
      </div>
    </footer>
  );
}
