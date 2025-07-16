import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import("typescript-eslint").Config} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    settings: { react: { version: "detect" } },
  },
  {
    rules: {
      "prettier/prettier": "warn",
    },
  },
];
