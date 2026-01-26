import { SiteLayout } from "../layouts/SiteLayout";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export function Privacidade() {
  return (
    <SiteLayout
      title="Política de Privacidade | Primus Elétrica"
      description="Política de Privacidade da Primus Elétrica. Saiba como tratamos dados e informações de contato."
      canonicalPath="/privacidade"
    >
      <Hero
        headline="Política de Privacidade"
        subheadline="Transparência sobre dados e atendimento"
        description="A Primus Elétrica respeita sua privacidade. Veja abaixo como coletamos e utilizamos informações."
        painPoints={["Atendimento via WhatsApp", "Formulário de contato", "Medição e melhoria do site", "Conformidade e segurança"]}
        cities={["Santos", "São Vicente", "Praia Grande", "Cubatão"]}
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">1. Coleta de informações</h2>
            <p className="text-gray-700 mb-6">
              Podemos coletar informações quando você entra em contato via WhatsApp, formulário do site ou outros canais,
              como nome, telefone e detalhes do serviço solicitado.
            </p>

            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">2. Uso das informações</h2>
            <p className="text-gray-700 mb-6">
              Utilizamos as informações para responder solicitações, enviar orçamentos, agendar atendimento e melhorar a experiência no site.
            </p>

            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">3. Compartilhamento</h2>
            <p className="text-gray-700 mb-6">
              Não vendemos dados. Podemos compartilhar informações apenas quando necessário para prestação do serviço,
              cumprimento legal ou proteção contra fraudes.
            </p>

            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">4. Cookies e métricas</h2>
            <p className="text-gray-700 mb-6">
              Podemos usar ferramentas de análise e publicidade para entender performance do site e campanhas.
              Você pode gerenciar cookies pelo navegador.
            </p>

            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-4">5. Contato</h2>
            <p className="text-gray-700">
              Para dúvidas sobre privacidade, chame no WhatsApp: <strong>(13) 99717-7485</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </SiteLayout>
  );
}

