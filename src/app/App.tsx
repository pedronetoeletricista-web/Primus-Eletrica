import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileFixedButtons } from './components/MobileFixedButtons';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Testimonials />  
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <MobileFixedButtons />
    </div>
  );
}
