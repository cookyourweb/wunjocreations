// src/pages/NuestraEsenciaPage.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Historia from "@/components/sections/NuestraEsencia";
import QuienSomos from "@/components/sections/QuienSomos";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const NuestraEsenciaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nuestra Esencia | Wunjo Creations"
        description="Conoce a Verónica Serna y la esencia de Wunjo Creations: 20 años de experiencia uniendo psicología e IA para transformar comunidades con propósito."
        path="/nuestra-esencia"
      />
      <Header />
      <Historia />
      <QuienSomos />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default NuestraEsenciaPage;
