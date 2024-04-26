import { baseLocale } from "~/utilities/constants/locale";

export const formatDate = (value: number) => {
  if (!value) return "-";
  const date = new Date(value);

  return new Intl.DateTimeFormat(baseLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
