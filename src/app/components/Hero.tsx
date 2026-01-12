import { Phone, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0f1e33] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FBBF24] text-[#1E3A5F] px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Atendimento 24 Horas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6">
            Serviços de <span className="text-[#FBBF24]">Eletricista</span>
            <br />
            Quando Você Mais Precisa
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Atendimento emergencial 24h para resolver seus problemas elétricos com segurança, 
            rapidez e profissionalismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FBBF24] hover:bg-[#f5b517] text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora - Emergência
            </a>
            
            <a 
              href="#contato"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E3A5F] px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">24/7</div>
            <div className="text-gray-300">Disponível sempre</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">+500</div>
            <div className="text-gray-300">Clientes satisfeitos</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">15 Anos</div>
            <div className="text-gray-300">De experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
}
