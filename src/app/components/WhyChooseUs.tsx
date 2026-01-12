import { Clock, Shield, Award, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Chegamos em até 1 hora em casos de emergência'
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Profissionais certificados e equipamentos de qualidade'
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Mais de 15 anos de atuação no mercado'
  },
  {
    icon: HeartHandshake,
    title: 'Preço Justo',
    description: 'Orçamento transparente sem custos ocultos'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">Por Que Nos Escolher?</h2>
          <p className="text-gray-600 text-lg">
            Compromisso com excelência e satisfação do cliente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FBBF24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#1E3A5F]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-[#1E3A5F] to-[#0f1e33] rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl mb-4">Área de Cobertura</h3>
          <p className="text-xl text-gray-300 mb-6">
            Atendemos toda a região metropolitana e cidades vizinhas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {['São Paulo', 'Guarulhos', 'Osasco', 'Santo André', 'São Bernardo', 'Diadema', 'Mauá', 'Barueri'].map((city) => (
              <span key={city} className="bg-white/10 px-4 py-2 rounded-full">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
