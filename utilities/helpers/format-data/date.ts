import { BASE_LOCALE } from "~/utilities/constants/LOCALES";

export const formatDate = (value: number) => {
  if (!value) return "-";

  const date = new Date(value);

  return new Intl.DateTimeFormat(BASE_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatChartDate = (value: number) => {
  if (!value) return "-";

  const date = new Date(value);

  return new Intl.DateTimeFormat(BASE_LOCALE, {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};
