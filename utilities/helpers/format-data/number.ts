import { baseLocale } from "~/utilities/constants/locale";

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat(baseLocale).format(value);
};

export const formatCurrency = (value: number, currency: string) => {
  return new Intl.NumberFormat(baseLocale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
  }).format(value);
};
