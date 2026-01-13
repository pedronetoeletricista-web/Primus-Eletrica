import { Phone, Clock } from 'lucide-react';
import logo from 'https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk2NWI2YjgwY2UwODE5MTg1MTFmZTQ1NDVhOTViNTg6ZmlsZV8wMDAwMDAwMDkwZDQ3MWY1YWM5MjVhNWFmMjQwNDUwOCIsInRzIjoiMjA0NjYiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjRjNzMwNmVjYTM4N2EzMWUwMzQyMGQzOTBkOTAwMGNhYjY5NTE5YWM0OGVkZjhlZjgwOTJiMGFiZDE2NzM5MjgiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0f1e33] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={logo} 
              alt="Primus Elétrica" 
              className="w-32 h-32 mx-auto"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#FBBF24] text-[#1E3A5F] px-4 py-2 rounded-full mb-6">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Atendimento 24 Horas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="text-[#FBBF24]">Primus Elétrica</span>
            <br />
            Quando Você Mais Precisa
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Atendimento emergencial 24h para resolver seus problemas elétricos com segurança, 
            rapidez e profissionalismo na Baixada Santista.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://wa.me/5513997177485" 
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
          
          {/* Área de Cobertura */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3 text-[#FBBF24]">Área de Cobertura</h3>
            <p className="text-lg text-gray-300 mb-4">
              Atendemos a região da Baixada Santista
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Praia Grande', 'São Vicente', 'Cubatão', 'Santos'].map((city) => (
                <span key={city} className="bg-white/20 px-4 py-2 rounded-full text-white font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">24/7</div>
            <div className="text-gray-300">Disponível sempre</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">+100</div>
            <div className="text-gray-300">Clientes satisfeitos</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#FBBF24] mb-2">3 Anos</div>
            <div className="text-gray-300">De experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
}
