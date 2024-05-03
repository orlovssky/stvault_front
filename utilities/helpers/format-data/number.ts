import { BASE_LOCALE } from "~/utilities/constants/LOCALES";

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat(BASE_LOCALE).format(value);
};

export const formatCurrency = (value: number, currency: string) => {
  return new Intl.NumberFormat(BASE_LOCALE, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
  }).format(value);
};
