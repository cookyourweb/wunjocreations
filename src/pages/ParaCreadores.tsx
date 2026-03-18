// src/pages/ParaCreadores.tsx
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
