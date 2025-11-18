// src/pages/ParaCreadores.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParaMarcas from "@/components/sections/ParaMarcas";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const ParaCreadores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ParaMarcas />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default ParaCreadores;
