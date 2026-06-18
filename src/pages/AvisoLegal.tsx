// src/pages/AvisoLegal.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvisoLegal from "@/components/AvisoLegal";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const AvisoLegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Aviso Legal | Wunjo Creations"
        description="Aviso legal de Wunjo Creations: información sobre el titular del sitio web, condiciones de uso y datos identificativos conforme a la normativa vigente."
        path="/avisolegal"
      />
      <Header />
      <AvisoLegal />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default AvisoLegalPage;
