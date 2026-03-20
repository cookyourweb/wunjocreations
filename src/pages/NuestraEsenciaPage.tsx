// src/pages/NuestraEsenciaPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Historia from "@/components/sections/NuestraEsencia";
import QuienSomos from "@/components/sections/QuienSomos";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const NuestraEsenciaPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
