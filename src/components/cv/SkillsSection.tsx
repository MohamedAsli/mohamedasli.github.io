import { useTranslations } from "@/hooks/useTranslations";
import { hardSkills } from "@/data/cv";

const SkillsSection = () => {
  const t = useTranslations();

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {/* Soft Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-4">{t.cv.skills.softSkills}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t.cv.content.softSkills.map((skill, index) => (
            <li key={index} className="text-muted-foreground">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-4">{t.cv.skills.hardSkills}</h2>
        <ul className="list-disc list-inside space-y-2">
          {hardSkills.map((skill) => (
            <li key={skill.name} className="text-muted-foreground">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages and Hobbies */}
      <div className="space-y-8">
        {/* Languages */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t.cv.languages.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-muted-foreground">{t.cv.languages.english}</li>
            <li className="text-muted-foreground">{t.cv.languages.arabic}</li>
            <li className="text-muted-foreground">{t.cv.languages.spanish}</li>
          </ul>
        </div>

        {/* Hobbies */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t.cv.hobbies.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {t.cv.hobbies.items.map((hobby, index) => (
              <li key={index} className="text-muted-foreground">
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;