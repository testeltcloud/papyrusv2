import Image from "next/image";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/lib/images";
import { links } from "@/lib/site";

export function AboutCTA() {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-canvas">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* About copy */}
        <div data-reveal="left" className="rounded-2xl sm:rounded-3xl bg-surface-2 dark:bg-surface p-6 sm:p-10">
          <h2 className="text-[1.2rem] sm:text-[2.1rem] font-medium tracking-tight whitespace-nowrap text-brand">
            Conheça mais do Papyrus Ads
          </h2>
          <p className="mt-5 text-[0.82rem] sm:text-base leading-relaxed text-body">
            Somos especialistas em performance digital e criamos o Papyrus Ads para resolver um problema real: a dificuldade que empresários têm em entender os resultados dos seus próprios anúncios.
          </p>
          <p className="mt-4 text-[0.82rem] sm:text-base leading-relaxed text-body">
            Nosso propósito é dar <strong className="font-semibold text-[rgba(17,93,140,1)]">autonomia, clareza e tranquilidade</strong> para quem toma decisões todos os dias — sem precisar falar &ldquo;a língua da agência&rdquo;.
          </p>
        </div>

        {/* Download box — mobile: imagem estática */}
        <div data-reveal="right" data-delay="2" className="sm:hidden relative rounded-[28px] overflow-hidden">
          <Image
            src="/images/adc/background.png"
            alt="Baixe o Papyrus Ads"
            width={1400}
            height={1044}
            className="w-full h-auto"
          />
          <div className="absolute bottom-[8%] left-[5%] flex flex-col gap-2 w-[52%]">
            <a href={links.appStore} aria-label="Baixar na App Store" className="block w-[88%]">
              <Image
                src="/images/adc/ButtonCima.png"
                alt="Download para iOS"
                width={620}
                height={160}
                className="w-full h-auto"
              />
            </a>
            <a href={links.playStore} aria-label="Baixar no Google Play">
              <Image
                src="/images/adc/ButtonBaixo.png"
                alt="Download para Android"
                width={720}
                height={160}
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Download box — desktop: componente dinâmico */}
        <div data-reveal="right" data-delay="2" className="hidden sm:block rounded-[28px] text-white overflow-hidden" style={{ backgroundColor: '#105c8b' }}>
          <div className="flex flex-row items-center gap-4 p-6 md:p-10">
            <div className="flex-1 min-w-0">
              <h3 className="text-[1.5rem] sm:text-[1.8rem] font-light leading-snug text-white">
                Baixe agora o app e veja como é simples entender seus
                resultados.
              </h3>
              <DownloadButtons className="mt-3 flex-nowrap [&>a]:text-[11px] [&>a]:px-2 sm:[&>a]:px-3" variant="white" shape="rect" />
            </div>
            <AppImage
              asset={images.phoneAssas}
              sizes="240px"
              className="h-auto w-[240px] shrink-0 -mt-10 -mr-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
