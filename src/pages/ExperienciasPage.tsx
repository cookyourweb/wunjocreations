// src/pages/ExperienciasPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const ExperienciasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Experiences />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default ExperienciasPage;
