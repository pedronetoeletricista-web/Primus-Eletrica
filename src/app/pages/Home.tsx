import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

