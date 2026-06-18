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
              className="flex items-center gap-1.5 hover:text-[hsl(38,75%,55%)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/wunjocreations/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[hsl(38,75%,55%)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
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
