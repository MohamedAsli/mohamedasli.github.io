import { useTranslations } from "@/hooks/useTranslations";

const WorkshopsSection = () => {
  const t = useTranslations();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{t.cv.workshops.title}</h2>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-muted-foreground">{t.cv.workshops.adana}</li>
        <li className="text-muted-foreground">{t.cv.workshops.rosario}</li>
      </ul>
    </div>
  );
};

export default WorkshopsSection;