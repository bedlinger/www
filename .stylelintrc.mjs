/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-astro",
    "stylelint-prettier/recommended",
    "stylelint-config-tailwindcss",
  ],
  rules: {
    "at-rule-empty-line-before": "never",
    "at-rule-no-deprecated": false,
  },
};
