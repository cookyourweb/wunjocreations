import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AvisoLegal from "@/components/AvisoLegal";
import PoliticaPrivacidad from "@/components/PoliticaPrivacidad";

const Footer = () => {
  const [openAviso, setOpenAviso] = useState(false);
  const [openPolitica, setOpenPolitica] = useState(false);

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-display text-xl font-medium text-foreground">
              Wunjo Creations
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              La runa de la felicidad hecha experiencia.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://www.instagram.com/wunjocreations/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="mailto:wunjocreations@gmail.com" className="hover:text-primary transition-colors">Contacto</a>
            <button onClick={() => setOpenAviso(true)} className="hover:text-primary transition-colors">Aviso legal</button>
            <button onClick={() => setOpenPolitica(true)} className="hover:text-primary transition-colors">Política de privacidad</button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Wunjo Creations by <a href="https://cookyourweb.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cookyourweb.es</a> © {new Date().getFullYear()}</p>
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
