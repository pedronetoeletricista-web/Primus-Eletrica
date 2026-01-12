import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    rating: 5,
    text: 'Serviço excelente! Tive um problema elétrico às 2h da manhã e eles vieram rapidamente. Profissionalismo nota 10!',
    date: 'Há 2 semanas'
  },
  {
    name: 'Maria Santos',
    rating: 5,
    text: 'Muito competentes e preço justo. Fizeram toda a instalação elétrica da minha casa nova. Recomendo!',
    date: 'Há 1 mês'
  },
  {
    name: 'João Oliveira',
    rating: 5,
    text: 'Atendimento rápido e eficiente. Resolveram meu problema de curto-circuito em menos de uma hora.',
    date: 'Há 3 semanas'
  },
  {
    name: 'Ana Paula',
    rating: 5,
    text: 'Profissionais qualificados e educados. Fizeram um ótimo trabalho na manutenção preventiva do meu apartamento.',
    date: 'Há 1 semana'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-gray-600 text-lg">
            Avaliações reais de quem confia no nosso trabalho
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#1E3A5F]">{testimonial.name}</span>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
