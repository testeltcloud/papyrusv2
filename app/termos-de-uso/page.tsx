import type { Metadata } from "next";
import { LegalArticle, type LegalSection } from "@/components/LegalArticle";

const DESCRIPTION =
  "Termos de uso das assinaturas do Papyrus Ads: pagamento via App Store, renovação automática, cancelamento, teste gratuito de 15 dias, reembolsos e uso adequado.";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: DESCRIPTION,
  alternates: { canonical: "/termos-de-uso" },
  openGraph: {
    title: "Termos de uso | Papyrus Ads",
    description: DESCRIPTION,
    url: "/termos-de-uso",
  },
};

const sections: LegalSection[] = [
  {
    title: "Sobre a Assinatura",
    body: (
      <>
        <p>
          O aplicativo oferece planos de assinatura que concedem acesso a
          conteúdos, funcionalidades ou serviços exclusivos durante o período
          contratado.
        </p>
        <p>
          Os detalhes sobre valores, periodicidade (mensal, anual ou outro
          período), período de teste gratuito (quando aplicável) e benefícios
          incluídos estarão descritos na página de compra dentro do aplicativo.
        </p>
      </>
    ),
  },
  {
    title: "Processamento do Pagamento",
    body: (
      <>
        <p>
          Todas as assinaturas são processadas pela Apple Inc., por meio do
          sistema de compras dentro do aplicativo (In‑App Purchase).
        </p>
        <p>
          O pagamento será cobrado na conta Apple ID do usuário no momento da
          confirmação da compra.
        </p>
        <p>
          O Desenvolvedor não tem acesso a dados completos de pagamento (como
          número de cartão), sendo essa informação gerenciada exclusivamente
          pela Apple.
        </p>
      </>
    ),
  },
  {
    title: "Renovação Automática",
    body: (
      <>
        <p>
          A assinatura é renovada automaticamente ao final de cada período
          contratado, salvo se o usuário cancelar com pelo menos 24 horas de
          antecedência do término do período vigente.
        </p>
        <p>
          A cobrança da renovação ocorrerá nas 24 horas anteriores ao fim do
          ciclo atual, pelo mesmo valor, salvo alteração previamente informada.
        </p>
      </>
    ),
  },
  {
    title: "Cancelamento",
    body: (
      <>
        <p>
          O cancelamento deve ser realizado diretamente pelo usuário nas
          configurações de sua conta Apple:
        </p>
        <p>
          <strong>Ajustes &gt; [seu nome] &gt; Assinaturas</strong>
        </p>
        <p>
          O cancelamento impede a renovação futura, mas não gera reembolso
          automático do período já pago.
        </p>
      </>
    ),
  },
  {
    title: "Teste Gratuito (Quando Aplicável)",
    body: (
      <p>
        Caso seja oferecido período de teste gratuito, qualquer parte não
        utilizada será perdida quando o usuário adquirir uma assinatura antes
        do término do período de teste.
      </p>
    ),
  },
  {
    title: "Reembolsos",
    body: (
      <>
        <p>
          Pedidos de reembolso devem ser solicitados diretamente à Apple,
          conforme as políticas da App Store.
        </p>
        <p>
          O Desenvolvedor não possui autonomia para realizar reembolsos de
          compras feitas via Apple.
        </p>
      </>
    ),
  },
  {
    title: "Alteração de Preços",
    body: (
      <p>
        O Desenvolvedor poderá alterar os valores da assinatura mediante aviso
        prévio. Em caso de alteração, a Apple notificará o usuário e poderá
        solicitar consentimento para continuidade da renovação.
      </p>
    ),
  },
  {
    title: "Uso Adequado",
    body: (
      <>
        <p>A assinatura é pessoal e intransferível. O usuário compromete‑se a:</p>
        <ul>
          <li>Não compartilhar acesso de forma indevida;</li>
          <li>Não utilizar o serviço para fins ilícitos;</li>
          <li>Não tentar explorar vulnerabilidades do sistema.</li>
        </ul>
        <p>
          O descumprimento poderá resultar em suspensão ou cancelamento da
          conta.
        </p>
      </>
    ),
  },
  {
    title: "Limitação de Responsabilidade",
    body: (
      <p>
        O serviço é fornecido &ldquo;no estado em que se encontra&rdquo;. O
        Desenvolvedor não garante funcionamento ininterrupto ou livre de erros,
        embora empregue esforços razoáveis para manter a estabilidade da
        plataforma.
      </p>
    ),
  },
  {
    title: "Privacidade",
    body: (
      <p>
        O tratamento de dados pessoais é realizado conforme descrito na{" "}
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

export default function TermosDeUsoPage() {
  return (
    <LegalArticle
      title="Termos de uso — Assinaturas"
      updated="12/02/2026"
      path="/termos-de-uso"
      description={DESCRIPTION}
      intro={
        <p>
          Ao contratar uma assinatura por meio da Apple App Store, o usuário
          declara que leu, compreendeu e concorda com estes Termos.
        </p>
      }
      sections={sections}
      outro={
        <p>
          Ao contratar uma assinatura, o usuário declara estar ciente e de
          acordo com estes Termos.
        </p>
      }
    />
  );
}
