const { defineConfig } = require("html-validate");

module.exports = defineConfig({
  extends: ["html-validate:recommended", "html-validate:a11y"],
  rules: {
    // From html-validate:document. The demo pages are the framework's own
    // accessibility showcase, so unlabelled controls and skipped heading
    // levels are bugs, not demo licence.
    "input-missing-label": "error",
    "heading-level": "error",

    // Demo pages intentionally use inline styles for showcasing
    "no-inline-style": "off",
    // Demo pages showcase all input types including deprecated ones
    "prefer-button": "off",
    "prefer-native-element": "off",
    // Trailing whitespace is cosmetic
    "no-trailing-whitespace": "off",
    // Demo forms don't need submit buttons
    "wcag/h32": "off",
    // Demo password fields don't need autocomplete
    "autocomplete-password": "off",
    // Demo buttons don't need explicit type
    "no-implicit-button-type": "off",
    // Allow raw characters in demo content
    "no-raw-characters": "off",
    // Prettier emits lowercase doctype and self-closing void tags
    "doctype-style": "off",
    "void-style": "off",
  },
});
