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
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>{t.about.intro}</p>
            <p>{t.about.impact}</p>
            <p>{t.about.career}</p>
            
            <ul>
              {t.about.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>

            <p>{t.about.philosophy}</p>
            <p>{t.about.personal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;