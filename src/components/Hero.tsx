import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactDialog from "./ContactDialog";
import { useTranslations } from "@/hooks/useTranslations";

const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const t = useTranslations();

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            {t.hero.title}
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <div className="mb-4">{t.hero.subtitle}</div>
            {t.hero.description}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t.hero.viewPortfolio}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
              {t.hero.getInTouch}
            </button>
          </div>
        </div>
      </div>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Hero;