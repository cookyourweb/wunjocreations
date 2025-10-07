// src/components/ExperienceCard.tsx
// src/components/ExperienceCard.tsx
import { ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  description: string;
  status: string;
  link?: string;
}

const ExperienceCard = ({ title, description, status, link }: ExperienceCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl p-8 md:p-12 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[0_8px_30px_-8px_hsl(30_8%_20%_/_0.15)]">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <span className="text-sm font-medium text-accent tracking-wider uppercase">
            {status}
          </span>
          
          {link && (
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
          )}
        </div>
        
        <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground">
          {title}
        </h3>
        
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
