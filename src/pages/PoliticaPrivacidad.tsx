// src/pages/PoliticaPrivacidad.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PoliticaPrivacidad from "@/components/PoliticaPrivacidad";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const PoliticaPrivacidadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PoliticaPrivacidad />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default PoliticaPrivacidadPage;
