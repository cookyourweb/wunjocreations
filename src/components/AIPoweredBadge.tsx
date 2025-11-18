// src/components/AIPoweredBadge.tsx
import { Brain } from "lucide-react";

const AIPoweredBadge = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/40 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
        <Brain className="w-5 h-5 text-primary" />
        <span className="text-primary font-bold text-sm">Powered by IA</span>
      </div>
    </div>
  );
};

export default AIPoweredBadge;
