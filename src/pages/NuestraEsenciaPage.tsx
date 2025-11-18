// src/pages/NuestraEsenciaPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Historia from "@/components/sections/NuestraEsencia";

const NuestraEsenciaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Historia />
      <Footer />
    </div>
  );
};

export default NuestraEsenciaPage;
