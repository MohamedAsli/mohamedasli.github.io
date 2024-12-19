import { useTranslations } from "@/hooks/useTranslations";
import { hardSkills } from "@/data/cv";

const CV = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-center mb-12">{t.cv.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
          </div>

          {/* Professional Experience */}
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

          {/* Education */}
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

          {/* Languages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{t.cv.languages.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-muted-foreground">{t.cv.languages.english}</li>
              <li className="text-muted-foreground">{t.cv.languages.arabic}</li>
              <li className="text-muted-foreground">{t.cv.languages.spanish}</li>
            </ul>
          </div>

          {/* Workshops */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{t.cv.workshops.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-muted-foreground">{t.cv.workshops.adana}</li>
              <li className="text-muted-foreground">{t.cv.workshops.rosario}</li>
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
    </div>
  );
};

export default CV;