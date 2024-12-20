import { useTranslations } from "@/hooks/useTranslations";

const HobbiesSection = () => {
  const t = useTranslations();

  return (
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
  );
};

export default HobbiesSection;