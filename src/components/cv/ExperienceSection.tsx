import { useTranslations } from "@/hooks/useTranslations";

const ExperienceSection = () => {
  const t = useTranslations();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{t.cv.experience.title}</h2>
      <div className="space-y-8">
        {t.cv.content.experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <h3 className="text-xl font-bold text-primary">
              {exp.title} | {exp.company} | {exp.period}
            </h3>
            {exp.projects && (
              <p className="text-muted-foreground mt-1 italic">
                {exp.projects}
              </p>
            )}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.description.map((item, i) => (
                <li key={i} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;