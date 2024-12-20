import { useTranslations } from "@/hooks/useTranslations";

const EducationSection = () => {
  const t = useTranslations();

  return (
    <div className="mb-12">
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
            {t.cv.content.education.map((edu, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{edu.program}</td>
                <td className="py-2">{edu.institution}</td>
                <td className="py-2">{edu.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationSection;