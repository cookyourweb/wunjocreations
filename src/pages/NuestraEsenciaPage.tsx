// src/pages/NuestraEsenciaPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Historia from "@/components/sections/NuestraEsencia";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const NuestraEsenciaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Historia />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default NuestraEsenciaPage;
