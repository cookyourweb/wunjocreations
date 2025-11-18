// src/App.tsx
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ParaCreadores from "./pages/ParaCreadores";
import ExperienciasPage from "./pages/ExperienciasPage";
import NuestraEsenciaPage from "./pages/NuestraEsenciaPage";
import ProcesoPage from "./pages/ProcesoPage";
import ContactoPage from "./pages/ContactoPage";
import CRM from "./pages/CRM";
import PoliticaPrivacidadPage from "./pages/PoliticaPrivacidad";
import AvisoLegalPage from "./pages/AvisoLegal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/para-creadores" element={<ParaCreadores />} />
          <Route path="/experiencias" element={<ExperienciasPage />} />
          <Route path="/nuestra-esencia" element={<NuestraEsenciaPage />} />
          <Route path="/proceso" element={<ProcesoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/politicadeprivacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="/avisolegal" element={<AvisoLegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
