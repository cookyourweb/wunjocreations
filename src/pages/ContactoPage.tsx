// src/pages/ContactoPage.tsx
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Colabora from "@/components/sections/Colabora";
import AIPoweredBadge from "@/components/AIPoweredBadge";
import MobileHomeNav from "@/components/MobileHomeNav";

const ContactoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contacto | Wunjo Creations"
        description="Hablemos de tu comunidad. Cuéntanos sobre tu curso o mentoría y descubre cómo la IA puede personalizar la experiencia de tus alumnos. Colabora con Wunjo Creations."
        path="/contacto"
      />
      <Header />
      <Colabora />
      <Footer />
      <AIPoweredBadge />
      <MobileHomeNav />
    </div>
  );
};

export default ContactoPage;
