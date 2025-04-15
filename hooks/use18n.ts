import { useLocales } from "expo-localization";
import en from '../i18n/en.json';
import es from '../i18n/es.json';

const translations = {
  en,
  es,
};

export function useI18n() {
  const locales = useLocales();

  const deviceLanguage = locales[0]?.languageCode || "en";

  const t =
    translations[deviceLanguage as keyof typeof translations] ||
    translations.en;

  return { t, language: deviceLanguage };
}
