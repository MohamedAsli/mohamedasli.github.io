import { useTranslations } from "@/hooks/useTranslations";
import SkillsSection from "@/components/cv/SkillsSection";
import ExperienceSection from "@/components/cv/ExperienceSection";
import EducationSection from "@/components/cv/EducationSection";
import WorkshopsSection from "@/components/cv/WorkshopsSection";

const CV = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-center mb-12">{t.cv.title}</h1>
          
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <WorkshopsSection />
        </div>
      </div>
    </div>
  );
};

export default CV;