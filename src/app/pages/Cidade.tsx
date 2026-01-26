import { SiteLayout } from "../layouts/SiteLayout";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

type CidadeConfig = {
  slug: string;
  cidade: string;
  title: string;
  description: string;
  headline: string;
  subheadline: string;
};

const CIDADES: Record<string, CidadeConfig> = {
  "Santos": {
    slug: "/santos",
    cidade: "Santos",
    title: "Eletricista em Santos | Primus Elétrica",
    description:
      "Eletricista em Santos com atendimento 24h. Instalações, reparos, chuveiro, disjuntor caindo, curto-circuito. Atendimento rápido e garantia.",
    headline: "Eletricista em Santos",
    subheadline: "Problema elétrico agora? Atendimento imediato.",
  },
  "São Vicente": {
    slug: "/sao-vicente",
    cidade: "São Vicente",
    title: "Eletricista em São Vicente | Primus Elétrica",
    description:
      "Eletricista em São Vicente com atendimento 24h. Instalações, reparos e emergências. Atendimento rápido e garantia.",
    headline: "Eletricista em São Vicente",
    subheadline: "Emergência elétrica? Chego rápido.",
  },
  "Praia Grande": {
    slug: "/praia-grande",
    cidade: "Praia Grande",
    title: "Eletricista em Praia Grande | Primus Elétrica",
    description:
      "Eletricista em Praia Grande com atendimento 24h. Instalações, manutenção e emergências. Atendimento rápido e garantia.",
    headline: "Eletricista em Praia Grande",
    subheadline: "Atendimento 24h e garantia.",
  },
  "Cubatão": {
    slug: "/cubatao",
    cidade: "Cubatão",
    title: "Eletricista em Cubatão | Primus Elétrica",
    description:
      "Eletricista em Cubatão com atendimento 24h. Instalações, reparos e emergências. Atendimento rápido e garantia.",
    headline: "Eletricista em Cubatão",
    subheadline: "Serviço rápido, seguro e profissional.",
  },
};

export function Cidade({ cidade }: { cidade: "Santos" | "São Vicente" | "Praia Grande" | "Cubatão" }) {
  const cfg = CIDADES[cidade];

  return (
    <SiteLayout title={cfg.title} description={cfg.description} canonicalPath={cfg.slug}>
      {/* Reusa o mesmo Hero, mas parametrizado */}
      <Hero
        headline={cfg.headline}
        subheadline={cfg.subheadline}
        description={`Atendimento rápido em ${cfg.cidade}. Disjuntor desarmando, tomada queimando, curto-circuito, chuveiros e emergências 24h. Serviço seguro, sem terceirização.`}
      />

      {/* Aqui está o “segredo”: mesmas seções do Home */}
      <Testimonials />
      <Services />
      <WhyChooseUs />

      {/* Se quiser, você pode inserir um bloco curto específico da cidade */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-2">
              Atendimento em {cfg.cidade} e região
            </h2>
            <p className="text-gray-700">
              Chame no WhatsApp, descreva o problema e receba orientação imediata. Em emergências, prioridade de atendimento.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </SiteLayout>
  );
}

