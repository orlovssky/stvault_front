export const LOCALES = {
  RU: "ru",
  GB: "en-GB",
  US: "en-US",
} as const;

export const BASE_LOCALE = LOCALES.GB as keyof typeof LOCALES;

export default LOCALES;
