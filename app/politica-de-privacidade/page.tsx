import type { Metadata } from "next";
import { LegalArticle, type LegalSection } from "@/components/LegalArticle";

const DESCRIPTION =
  "Política de privacidade do Papyrus Ads: quais dados coletamos, como usamos, com quem compartilhamos, segurança, retenção e seus direitos conforme a LGPD.";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: DESCRIPTION,
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: "Política de privacidade | Papyrus Ads",
    description: DESCRIPTION,
    url: "/politica-de-privacidade",
  },
};

const sections: LegalSection[] = [
  {
    title: "Informações que Coletamos",
    body: (
      <>
        <h3 className="font-medium text-ink">1.1 Informações fornecidas pelo usuário</h3>
        <ul>
          <li>Nome, e-mail ou outras informações de contato (quando aplicável);</li>
          <li>
            Informações fornecidas voluntariamente por meio de formulários,
            suporte ou cadastro.
          </li>
        </ul>
        <h3 className="pt-2 font-medium text-ink">1.2 Informações coletadas automaticamente</h3>
        <ul>
          <li>Endereço IP;</li>
          <li>Tipo de dispositivo, sistema operacional e versão;</li>
          <li>Identificadores de publicidade (como Advertising ID do Google);</li>
          <li>
            Informações sobre interações com anúncios (impressões, cliques,
            conversões);
          </li>
          <li>Dados de uso do aplicativo (tempo de uso, telas acessadas, eventos).</li>
        </ul>
        <h3 className="pt-2 font-medium text-ink">1.3 Informações de terceiros</h3>
        <p>
          O aplicativo pode utilizar serviços de terceiros para exibição e
          gerenciamento de anúncios, como:
        </p>
        <ul>
          <li>Google Ads;</li>
          <li>Meta Ads;</li>
          <li>Outras plataformas de anúncios ou analytics.</li>
        </ul>
        <p>
          Esses serviços podem coletar dados conforme suas próprias políticas
          de privacidade.
        </p>
      </>
    ),
  },
  {
    title: "Uso das Informações",
    body: (
      <>
        <p>As informações coletadas são utilizadas para:</p>
        <ul>
          <li>Integrar e gerenciar campanhas publicitárias;</li>
          <li>Melhorar a experiência do usuário;</li>
          <li>Analisar métricas de desempenho e uso do aplicativo;</li>
          <li>Corrigir erros, garantir segurança e prevenir fraudes;</li>
          <li>Cumprir obrigações legais.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Compartilhamento de Informações",
    body: (
      <>
        <p>Podemos compartilhar informações apenas quando necessário:</p>
        <ul>
          <li>Com provedores de serviços de anúncios e analytics;</li>
          <li>
            Para cumprimento de obrigações legais, judiciais ou regulatórias;
          </li>
          <li>
            Para proteger direitos, segurança e propriedade do aplicativo ou
            dos usuários.
          </li>
        </ul>
        <p>
          <strong>Não vendemos informações pessoais dos usuários.</strong>
        </p>
      </>
    ),
  },
  {
    title: "Consentimento e Base Legal",
    body: (
      <>
        <p>Tratamos os dados pessoais com base:</p>
        <ul>
          <li>No consentimento do usuário, quando aplicável;</li>
          <li>Na execução dos serviços oferecidos pelo aplicativo;</li>
          <li>No cumprimento de obrigações legais;</li>
          <li>No legítimo interesse, respeitando os direitos do usuário.</li>
        </ul>
        <p>
          Em conformidade com a LGPD (Lei Geral de Proteção de Dados — Lei nº
          13.709/2018) e, quando aplicável, o GDPR.
        </p>
      </>
    ),
  },
  {
    title: "Segurança das Informações",
    body: (
      <>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger as
          informações contra acesso não autorizado, perda, uso indevido ou
          divulgação indevida.
        </p>
        <p>
          No entanto, nenhum sistema é completamente seguro, e não podemos
          garantir segurança absoluta.
        </p>
      </>
    ),
  },
  {
    title: "Retenção dos Dados",
    body: (
      <p>
        Os dados serão armazenados apenas pelo tempo necessário para cumprir
        as finalidades descritas nesta Política, salvo quando houver obrigação
        legal de retenção por período maior.
      </p>
    ),
  },
  {
    title: "Direitos do Usuário",
    body: (
      <>
        <p>O usuário tem o direito de:</p>
        <ul>
          <li>Confirmar a existência de tratamento de dados;</li>
          <li>Acessar, corrigir ou atualizar seus dados;</li>
          <li>Solicitar a exclusão ou anonimização dos dados;</li>
          <li>Revogar o consentimento;</li>
          <li>Solicitar informações sobre compartilhamento de dados.</li>
        </ul>
        <p>
          As solicitações podem ser feitas pelo e-mail{" "}
          <a
            href="mailto:papyrusadsofc@gmail.com"
            className="text-brand underline underline-offset-2 hover:no-underline"
          >
            papyrusadsofc@gmail.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Privacidade de Crianças",
    body: (
      <p>
        O aplicativo não é destinado a crianças menores de 13 anos (ou idade
        mínima exigida por lei). Não coletamos intencionalmente dados de
        crianças.
      </p>
    ),
  },
  {
    title: "Alterações nesta Política",
    body: (
      <>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente.
          Recomendamos que o usuário revise esta página regularmente.
        </p>
        <p>
          O uso contínuo do aplicativo após alterações indica concordância com
          os novos termos.
        </p>
      </>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalArticle
      title="Política de Privacidade"
      updated="12/02/2026"
      path="/politica-de-privacidade"
      description={DESCRIPTION}
      sections={sections}
    />
  );
}
