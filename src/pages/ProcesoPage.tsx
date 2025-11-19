// src/pages/ProcesoPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Proceso from "@/components/sections/Proceso";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const ProcesoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Proceso />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default ProcesoPage;
