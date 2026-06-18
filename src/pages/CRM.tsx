
// src/pages/CRM.tsx
import SEO from "@/components/SEO";
import CRMDashboard from "@/components/crm/CRMDashboard";
import AIPoweredBadge from "@/components/AIPoweredBadge";

const CRM = () => {
  return (
    <>
      <SEO
        title="CRM | Wunjo Creations"
        description="Panel interno de gestión de Wunjo Creations."
        path="/crm"
        noindex
      />
      <CRMDashboard />
      <AIPoweredBadge />
    </>
  );
};

export default CRM;