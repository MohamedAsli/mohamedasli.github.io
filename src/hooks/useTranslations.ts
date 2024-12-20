import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { cvTranslations } from "@/data/cv/translations";

export function useTranslations() {
  const { language } = useLanguage();
  
  return {
    ...translations[language],
    cv: {
      ...translations[language].cv,
      content: cvTranslations[language]
    }
  };
}