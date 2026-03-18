// src/components/AIPoweredBadge.tsx
import { Brain } from "lucide-react";

const AIPoweredBadge = () => {
  return (
    <div className="fixed bottom-20 lg:bottom-6 right-6 z-[60]">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[hsl(25,12%,12%)] border border-[hsl(38,75%,55%,0.4)] backdrop-blur-sm shadow-warm transition-transform duration-300 animate-[scale_3s_ease-in-out_infinite]">
        <Brain className="w-4 h-4 lg:w-5 lg:h-5 text-[hsl(38,75%,55%)]" />
        <span className="text-[hsl(38,75%,55%)] font-sans font-semibold text-xs lg:text-sm">Powered by IA</span>
      </div>
    </div>
  );
};

export default AIPoweredBadge;
