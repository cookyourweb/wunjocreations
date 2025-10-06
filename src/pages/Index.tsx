import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/sections/NuestraEsencia";
import Manifiesto from "@/components/sections/Manifiesto";
import Experiences from "@/components/Experiences";
import ParaMarcas from "@/components/sections/ParaMarcas";
import Proceso from "@/components/sections/Proceso";
import Testimonios from "@/components/sections/Testimonios";
import Colabora from "@/components/sections/Colabora";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Historia />
      <Manifiesto />
      <Experiences />
      <ParaMarcas />
      <Proceso />
      <Testimonios />
      <Colabora />
      <Footer />
    </div>
  );
};

export default Index;
