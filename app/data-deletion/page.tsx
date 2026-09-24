import type { Metadata } from "next";
import { LegalArticle, type LegalSection } from "@/components/LegalArticle";
import { links } from "@/lib/site";

const EMAIL_SUBJECT = "Exclusão de conta e dados";
const EMAIL_LINK = `mailto:${links.email}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

const DESCRIPTION =
  "Como solicitar a exclusão da sua conta e dos seus dados no Papyrus Ads.";

export const metadata: Metadata = {
  title: "Exclusão de dados",
  description: DESCRIPTION,
  alternates: { canonical: "/data-deletion" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const sections: LegalSection[] = [
  {
    title: "Excluir pelo aplicativo",
    body: (
      <>
        <p>A forma mais rápida, e o pedido é processado na hora:</p>
        <ol className="list-decimal space-y-1.5 pl-6">
          <li>Abra o Papyrus Ads e entre na sua conta.</li>
          <li>
            Toque no menu e vá em <strong>Configurações</strong>.
          </li>
          <li>
            Toque em <strong>Conta</strong> e depois em{" "}
            <strong>Excluir minha conta</strong>.
          </li>
          <li>
            Confirme. Você recebe um email avisando que a exclusão foi iniciada.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Excluir por email",
    body: (
      <>
        <p>
          Se você não consegue mais acessar o aplicativo, mande um pedido para{" "}
          <a
            href={EMAIL_LINK}
            className="text-brand underline underline-offset-2 hover:no-underline"
          >
            {links.email}
          </a>{" "}
          com o assunto <strong>&ldquo;{EMAIL_SUBJECT}&rdquo;</strong>, escrevendo do
          mesmo email cadastrado no Papyrus Ads.
        </p>
        <p>
          Respondemos em até 5 dias úteis e concluímos a exclusão em até 30 dias
          corridos, conforme a LGPD.
        </p>
        <p>
          <a
            href={EMAIL_LINK}
            className="btn mt-1 rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Solicitar exclusão por email
          </a>
        </p>
      </>
    ),
  },
  {
    title: "O que é apagado",
    body: (
      <>
        <ul>
          <li>Seu cadastro: nome, email, telefone e senha.</li>
          <li>
            As conexões com suas contas de anúncio do Google Ads e da Meta,
            cujos tokens de acesso são revogados imediatamente.
          </li>
          <li>
            Os dados de campanhas, métricas e relatórios importados para o
            Papyrus Ads.
          </li>
          <li>Preferências, alertas e histórico de uso do aplicativo.</li>
        </ul>

        <div className="mt-6 rounded-xl border border-line border-l-4 border-l-green bg-surface-2 p-5">
          <p>
            <strong>Importante:</strong> a exclusão apaga os dados guardados no
            Papyrus Ads. Ela não apaga nada dentro do Google Ads nem da Meta.
            Suas campanhas continuam intactas nessas plataformas.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "O que continua guardado, e por quanto tempo",
    body: (
      <>
        <p>
          A lei nos obriga a manter alguns registros mesmo depois da exclusão:
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-line">
          <table className="w-full border-collapse text-left text-sm sm:text-[0.95rem]">
            <thead className="hidden bg-surface-2 text-ink sm:table-header-group">
              <tr>
                <th className="px-4 py-3 font-semibold">Dado</th>
                <th className="px-4 py-3 font-semibold">Prazo</th>
                <th className="px-4 py-3 font-semibold">Motivo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="block border-b border-line p-4 last:border-0 sm:table-row sm:p-0">
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Dado</span>
                  Registros de acesso ao sistema
                </td>
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Prazo</span>
                  6 meses
                </td>
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Motivo</span>
                  Artigo 15 do Marco Civil da Internet
                </td>
              </tr>
              <tr className="block border-b border-line p-4 last:border-0 sm:table-row sm:p-0">
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Dado</span>
                  Documentos fiscais de assinaturas pagas
                </td>
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Prazo</span>
                  5 anos
                </td>
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Motivo</span>
                  Obrigação fiscal e contábil
                </td>
              </tr>
              <tr className="block p-4 sm:table-row sm:p-0">
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Dado</span>
                  Backups
                </td>
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Prazo</span>
                  Até 90 dias
                </td>
                <td className="block py-1 sm:table-cell sm:border-t sm:border-line sm:px-4 sm:py-3">
                  <span className="block font-semibold text-ink sm:hidden">Motivo</span>
                  Rotina de segurança, sobrescritos automaticamente
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5">
          Esses registros ficam isolados, não são usados para nada além da
          obrigação legal e são descartados no fim do prazo.
        </p>
      </>
    ),
  },
  {
    title: "Dá para voltar atrás?",
    body: (
      <p>
        Não. A exclusão é definitiva e os dados não podem ser recuperados
        depois de concluída. Se quiser usar o Papyrus Ads novamente, será
        preciso criar uma conta nova e reconectar suas contas de anúncio.
      </p>
    ),
  },
  {
    title: "Dúvidas",
    body: (
      <p>
        Fale com a gente em{" "}
        <a
          href={`mailto:${links.email}`}
          className="text-brand underline underline-offset-2 hover:no-underline"
        >
          {links.email}
        </a>
        . Para entender como tratamos seus dados no dia a dia, leia a{" "}
        <a
          href="/politica-de-privacidade"
          className="text-brand underline underline-offset-2 hover:no-underline"
        >
          Política de Privacidade
        </a>
        .
      </p>
    ),
  },
];

export default function DataDeletionPage() {
  return (
    <LegalArticle
      title="Exclusão da conta e dos dados"
      updated="22/09/2026"
      path="/data-deletion"
      description={DESCRIPTION}
      intro={
        <p>
          Esta página explica como excluir a sua conta do Papyrus Ads, quais
          dados são apagados e em quanto tempo isso acontece.
        </p>
      }
      sections={sections}
    />
  );
}
