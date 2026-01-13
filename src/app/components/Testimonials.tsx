import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Yuri Ferreira',
    rating: 5,
    text: 'Empresa idônea, atendimento impecável e máximo respeito com o contratante. O profissional Pedro, foi o melhor prestador de serviço com quem já trabalhei. Responsável, íntegro e indubitavelmente confiável. Seu conhecimento técnico, transparência e caráter, refletem no alto padrão de qualidade dos seus serviços.',
    date: '20/11/2025'
  },
  {
    name: 'Caroline Coutinho',
    rating: 5,
    text: 'Ótimo profissional….podem pedir sem medo! Eu indico!',
    date: '23/11/2025'
  },
  {
    name: 'Sueli Rodrigues',
    rating: 5,
    text: 'Correspondeu às minhas espectativas... O eletricista Pedro é impecável... gostei muito!!! Obrigado Pedro....',
    date: '05/12/2025'
  },
  {
    name: 'Geovanna Ferreira',
    rating: 5,
    text: 'Excelente profissional! Me atendeu em emergência, foi extremamente atencioso e solícito desde o primeiro contato, demonstrando total disposição para resolver o problema. Explicou tudo com clareza e executou o serviço com muita competência e agilidade. Trabalho muito bem feito! Nota 10, recomendo!!',
    date: '05/01/2025'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#1E3A5F] mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-gray-600 text-lg">
            Avaliações reais do Google Meu Negócio
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
        
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/search?sca_esv=83052c8b1ac74795&sxsrf=ANbL-n5XBxXq5iZpvtCidQoVPiD5CB4DTw:1768306288894&q=avalia%C3%A7%C3%B5es+sobre+primus+el%C3%A9trica&uds=ALYpb_n8wi_sjkuO1KmjOcgr3OaALKgjZlN40Z5c73HgPptggtQFeN7omROVKRDpY6BPsfT3SxLrSf9-o0OZrmWnxX9pnx1RZgzOOFjyNq2NZYnHFGOEMTw9E6N64t9hB5GFHA5VfN3Dlp5pINNqqLugJ9DapgebAuTDQuBBSepmoztFS2W_UNMvL-bZ8-n4ZyC-67aGqNILxLrqe6dsx9dcN2GNOYKQfMM3NdllZYmNx4WIiNOvtKTJP9dliIAaQlVaNJF-06Rcg885WUU4luNST3_s3wJrl7YKs15JSbKGS1V5-g8zQHhqJHCPeHNN-m-1mdTKfpUhJ1KjcBI3-IvbfQfa3PfIslu6r9TTh7pHmYKpK_ssKVeIq85WA_tccoOu991uQCTOhVy0OixNn2luBWvDdl6rjD0R2esFsd_0vqku8Je207lc_tC-Qsw28s2NmwLq66-7vUigb_6N2LYcyZ6DSpFvTvNKMTHIKi67f_uD756msUiyy_6zU7neb8BTkCL-TQddhiTF-JXUrmvtt7sMosp09oKTEpRJlrhXSfIfDqMkv5Uwq5wH301lRu6SUuvF32_Q&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZN8BKU9Zb2ZsiRDix6XDxWd7CBTNRv1Nvnr9L3APY43-8T3OQJ6S4iNzIOm2KDv71HwVkzkJoMJ79TVhR-9Y8zFeRI5vEt9IM9pUh_jFJa7Jdg6mQ%3D%3D&sa=X&ved=2ahUKEwjWg9ChvoiSAxXvFLkGHXhsLPwQk8gLegQIFxAB&ictx=1&biw=392&bih=822&dpr=2.75&aic=0#sbfbu=1&pi=avalia%C3%A7%C3%B5es%20sobre%20primus%20el%C3%A9trica" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A5F] hover:text-[#FBBF24] font-semibold underline"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
