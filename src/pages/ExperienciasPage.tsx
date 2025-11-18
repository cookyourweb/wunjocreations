// src/pages/ExperienciasPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const ExperienciasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Experiences />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default ExperienciasPage;
