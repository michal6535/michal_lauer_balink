import Locales from "../locales";

export const defaultLocale = "he";

const translate = (key, variables, locale) => {
  let translatedKey = Locales[locale || defaultLocale][key] || key;

  if (translatedKey && variables) {
    Object.entries(variables).forEach(([key, value]) => {
      translatedKey = translatedKey.replace(`{${key}}`, value);
    });
  }

  return translatedKey;
};

export default translate;
