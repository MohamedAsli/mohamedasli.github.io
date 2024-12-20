import { useTranslations } from "@/hooks/useTranslations";
import { hardSkills } from "@/data/cv";

const SkillsSection = () => {
  const t = useTranslations();

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">{t.cv.skills.softSkills}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t.cv.content.softSkills.map((skill, index) => (
            <li key={index} className="text-muted-foreground">{skill}</li>
          ))}
        </ul>
      </div>

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
    </div>
  );
};

export default SkillsSection;