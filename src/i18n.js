import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const supportedLanguages = ["de", "en", "es", "fr", "ja", "pt"];
const lang = supportedLanguages.includes(navigator.language)
  ? navigator.language
  : "en";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: lang,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "./locales/{{lng}}.json",
    },
  });

export default i18next;
