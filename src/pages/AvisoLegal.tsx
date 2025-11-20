// src/pages/AvisoLegal.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvisoLegal from "@/components/AvisoLegal";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const AvisoLegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AvisoLegal />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default AvisoLegalPage;
