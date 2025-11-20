// src/pages/Index.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default Index;
