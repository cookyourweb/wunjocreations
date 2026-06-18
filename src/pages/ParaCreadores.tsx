// src/pages/ParaCreadores.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ParaMarcas from "@/components/sections/ParaMarcas";
import CTASection from "@/components/CTASection";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const ParaCreadores = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Para Creadores | Wunjo Creations"
        description="Servicios con IA para creadores de contenido, mentores y marcas: personaliza la experiencia de tu curso, sube la participación y multiplica el impacto en tu comunidad."
        path="/para-creadores"
      />
      <Header />
      <ServicesSection />
      <ParaMarcas />
      <CTASection />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default ParaCreadores;
