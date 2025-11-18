// src/pages/ContactoPage.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Colabora from "@/components/sections/Colabora";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const ContactoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Colabora />
      <Footer />
      <AIPoweredBadge />
    </div>
  );
};

export default ContactoPage;
