import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslations } from "@/hooks/useTranslations";

const About = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <img 
              src="/images/profile.jpg" 
              alt="Mohamed ASLI" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary/10"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">{t.about.title}</h1>
              <h2 className="text-xl text-muted-foreground">{t.about.subtitle}</h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="lead">{t.about.intro}</p>
            <p>{t.about.journey}</p>
            <p>{t.about.experience}</p>
            <p>{t.about.current}</p>

            <ul>
              {t.about.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>

            <p>{t.about.conclusion}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild>
                <Link to="/portfolio">{t.about.viewProjects}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/cv">{t.about.viewCV}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;