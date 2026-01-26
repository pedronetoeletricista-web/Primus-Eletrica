import { SiteLayout } from "../layouts/SiteLayout";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

type Produto = {
  id: string;
  nome: string;
  categoria: "Chuveiros" | "Ventiladores de Teto" | "Outros";
  precoAPartirDe: number;
  destaque?: string;
};

const produtos: Produto[] = [
  {
    id: "chuveiro-01",
    nome: "Chuveiros (diversos modelos)",
    categoria: "Chuveiros",
    precoAPartirDe: 210,
    destaque: "Instalação inclusa + 1 ano de garantia",
  },
  {
    id: "vent-01",
    nome: "Ventilador de teto (diversos modelos)",
    categoria: "Ventiladores de Teto",
    precoAPartirDe: 0,
    destaque: "Venda + instalação",
  },
];

function formatBRL(v: number) {
  if (!v) return "Consultar";
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Produtos() {
  return (
    <SiteLayout
      title="Produtos com Instalação | Primus Elétrica"
      description="Catálogo de chuveiros e ventiladores de teto com instalação inclusa. Atendimento em Santos, São Vicente, Praia Grande e Cubatão."
      canonicalPath="/produtos"
    >
      <Hero
        headline="Produtos com Instalação"
        subheadline="Chuveiros e ventiladores de teto com montagem profissional."
        description="Catálogo com opções e instalação. Atendimento na Baixada Santista com garantia."
      />

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1E3A5F] mb-4">Catálogo</h2>
            <p className="text-gray-600 text-lg">
              Escolha o produto e peça orçamento no WhatsApp. Instalação feita por eletricista.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-40 bg-gray-100 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-1">{p.nome}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.categoria}</p>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-gray-600">A partir de</span>
                  <span className="text-2xl font-bold text-[#1E3A5F]">{formatBRL(p.precoAPartirDe)}</span>
                </div>

                {p.destaque && <p className="text-gray-700 mb-4">{p.destaque}</p>}

                <a
                  href={`https://wa.me/5513997177485?text=${encodeURIComponent(
                    `Olá! Quero orçamento para: ${p.nome}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center bg-[#FBBF24] hover:bg-[#f5b517] text-[#1E3A5F] px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Pedir orçamento no WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuso das mesmas seções do Home */}
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </SiteLayout>
  );
}

