// src/pages/ExperienciasPage.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const ExperienciasPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Experiencias | Wunjo Creations"
        description="Descubre experiencias de aprendizaje personalizadas con IA: contenido adaptado a cada persona que transforma cómo tu comunidad aprende, participa y avanza contigo."
        path="/experiencias"
      />
      <Header />
      <Experiences />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default ExperienciasPage;
