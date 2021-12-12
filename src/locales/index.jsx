import moment from "moment";
import localizationEn from "moment/locale/en-au";
import localizationHe from "moment/locale/he";
import en from "./en.json";
import he from "./he.json";

const Locales = {
  en,
  he,
};

const localization = { en: localizationEn, he: localizationHe };

export const setMomentLocale = (locale) => {
   moment.locale(locale, localization[locale]);
};

export default Locales;
