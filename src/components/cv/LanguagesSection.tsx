import { useTranslations } from "@/hooks/useTranslations";

const LanguagesSection = () => {
  const t = useTranslations();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{t.cv.languages.title}</h2>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-muted-foreground">{t.cv.languages.english}</li>
        <li className="text-muted-foreground">{t.cv.languages.arabic}</li>
        <li className="text-muted-foreground">{t.cv.languages.spanish}</li>
      </ul>
    </div>
  );
};

export default LanguagesSection;