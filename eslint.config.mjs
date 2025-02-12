// eslint.config.js (без @eslint/js)
import ts from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ["**/node_modules/**", "**/static/**", "**/staticfiles/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": ts
    },
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: true,
      },
    },
    rules: ts.configs.recommended.rules
  }
];
