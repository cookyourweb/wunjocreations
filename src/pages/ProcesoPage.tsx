// src/pages/ProcesoPage.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import Proceso from "@/components/sections/Proceso";
import CTASection from "@/components/CTASection";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const ProcesoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Proceso | Wunjo Creations"
        description="Así trabajamos en Wunjo Creations: cómo integramos IA en tu curso o mentoría paso a paso para personalizar el aprendizaje y mejorar la retención de tu comunidad."
        path="/proceso"
      />
      <Header />
      <ProcessSection />
      <Proceso />
      <CTASection />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default ProcesoPage;
