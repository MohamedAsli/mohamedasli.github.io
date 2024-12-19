import { useTranslations } from "@/hooks/useTranslations";

interface Skill {
  name: string;
}

interface SkillSectionProps {
  title: "softSkills" | "hardSkills";
  skills: Skill[];
}

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  const t = useTranslations();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{t.cv.skills[title]}</h2>
      <ul className="list-disc list-inside space-y-2">
        {skills.map((skill) => (
          <li key={skill.name} className="text-muted-foreground">
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;