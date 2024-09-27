import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // tarjimalarni yuklash uchun backend
  .use(LanguageDetector) // brauzer tilini aniqlash uchun
  .use(initReactI18next) // React uchun integratsiya
  .init({
    fallbackLng: "en", // agar tanlangan til bo'lmasa
    debug: true,
    interpolation: {
      escapeValue: false, // React escape qilishiga yo'l qo'ymaslik uchun
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // tarjima fayllari joylashgan joy
    },
  });

export default i18n;
