import { type Config } from "prettier";

const config: Config = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: "none",
};

export default config;
