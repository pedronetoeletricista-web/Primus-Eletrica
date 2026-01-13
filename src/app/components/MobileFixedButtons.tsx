import { Phone, MessageCircle } from 'lucide-react';

export function MobileFixedButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50 md:hidden">
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:13997177485"
          className="flex items-center justify-center gap-2 bg-[#1E3A5F] hover:bg-[#152d4a] text-white py-4 font-semibold transition-all active:scale-95"
        >
          <Phone className="w-5 h-5" />
          Ligar Agora
        </a>
        
        <a
          href="https://wa.me/5513997177485"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 font-semibold transition-all active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}