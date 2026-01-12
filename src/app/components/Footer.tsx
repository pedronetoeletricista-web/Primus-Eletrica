import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1E3A5F] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FBBF24]">
              Eletricista Profissional
            </h3>
            <p className="text-gray-300 mb-4">
              Serviços elétricos de qualidade com atendimento 24 horas para emergências. 
              Sua segurança é nossa prioridade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FBBF24] transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#FBBF24] transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#FBBF24] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FBBF24]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-[#FBBF24] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-[#FBBF24] transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FBBF24] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FBBF24] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FBBF24]">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-[#FBBF24]" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-[#FBBF24]" />
                contato@eletricista.com.br
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-[#FBBF24] mt-1" />
                São Paulo, SP - Região Metropolitana
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Eletricista Profissional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
