// src/pages/ProcesoPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import Proceso from "@/components/sections/Proceso";
import CTASection from "@/components/CTASection";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const ProcesoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProcessSection />
      <Proceso />
      <CTASection />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default ProcesoPage;
