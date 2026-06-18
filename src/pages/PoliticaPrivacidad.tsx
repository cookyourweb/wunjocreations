// src/pages/PoliticaPrivacidad.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PoliticaPrivacidad from "@/components/PoliticaPrivacidad";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const PoliticaPrivacidadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Privacidad | Wunjo Creations"
        description="Política de privacidad de Wunjo Creations: cómo tratamos y protegemos tus datos personales conforme al RGPD y la normativa española de protección de datos."
        path="/politicadeprivacidad"
      />
      <Header />
      <PoliticaPrivacidad />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default PoliticaPrivacidadPage;
