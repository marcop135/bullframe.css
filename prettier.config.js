/** @type {import('prettier').Config} */
export default {
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 98,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.html",
      options: { printWidth: 9999 },
    },
    {
      files: "*.md",
      options: { printWidth: 9999 },
    },
  ],
};
