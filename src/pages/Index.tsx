// src/pages/Index.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Wunjo Creations | IA que personaliza la experiencia de cada alumno"
        description="Usamos IA para convertir tu curso o mentoría en una experiencia única para cada alumno. Más participación, más retención: tu comunidad se queda contigo."
        path="/"
      />
      <Header />
      <Hero />
      <ProblemSection />
      <CTASection />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default Index;
