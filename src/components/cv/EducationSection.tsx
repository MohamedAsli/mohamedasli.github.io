import { useTranslations } from "@/hooks/useTranslations";

interface Education {
  formation: string;
  organisme: string;
  annee: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  const t = useTranslations();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{t.cv.education.title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">{t.cv.education.headers.program}</th>
              <th className="text-left py-2">{t.cv.education.headers.institution}</th>
              <th className="text-left py-2">{t.cv.education.headers.year}</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{edu.formation}</td>
                <td className="py-2">{edu.organisme}</td>
                <td className="py-2">{edu.annee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationSection;