// src/components/Footer.tsx
// src/components/Footer.tsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AvisoLegal from "@/components/AvisoLegal";
import PoliticaPrivacidad from "@/components/PoliticaPrivacidad";

const Footer = () => {
  const [openAviso, setOpenAviso] = useState(false);
  const [openPolitica, setOpenPolitica] = useState(false);

  return (
    <footer className="py-12 px-6 border-t border-[hsl(38,15%,15%)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Línea decorativa */}
          <div className="w-16 h-px bg-gradient-warm opacity-50 rounded-full" />

          <div>
            <p className="font-display text-xl font-medium text-foreground tracking-wide">
              Wunjo Creations
            </p>
            <p className="font-sans text-sm text-muted-foreground mt-1">
              Psicología + IA para creadores de comunidades.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-sans">
            <a
              href="https://www.instagram.com/wunjocreations/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(38,75%,55%)] transition-colors"
            >
              Instagram
            </a>
            <a href="/contacto" className="hover:text-[hsl(38,75%,55%)] transition-colors">Contacto</a>
            <button onClick={() => setOpenAviso(true)} className="hover:text-[hsl(38,75%,55%)] transition-colors">Aviso legal</button>
            <button onClick={() => setOpenPolitica(true)} className="hover:text-[hsl(38,75%,55%)] transition-colors">Política de privacidad</button>
          </div>

          <div className="font-sans text-xs text-muted-foreground">
            <p>
              Wunjo Creations by{" "}
              <a
                href="https://cookyourweb.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(38,75%,55%)] hover:underline"
              >
                cookyourweb.es
              </a>{" "}
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <Dialog open={openAviso} onOpenChange={setOpenAviso}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Aviso Legal</DialogTitle>
          </DialogHeader>
          <AvisoLegal />
        </DialogContent>
      </Dialog>

      <Dialog open={openPolitica} onOpenChange={setOpenPolitica}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Política de Privacidad</DialogTitle>
          </DialogHeader>
          <PoliticaPrivacidad />
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
