/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "no-descending-specificity": null,
    "value-keyword-case": null,
    "selector-class-pattern": null,
    "rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "declaration-empty-line-before": null,
    "media-feature-range-notation": "prefix",
    "no-duplicate-selectors": null,
    "declaration-block-single-line-max-declarations": null,
    "selector-id-pattern": null,

    // Allow string import notation (postcss-import convention)
    "import-notation": "string",

    // Cross-browser CSS intentionally uses deprecated properties
    "property-no-deprecated": null,

    // Vendor prefixes are intentional for cross-browser support
    "property-no-vendor-prefix": null,

    // Allow vendor-specific values (e.g., -webkit-match-parent)
    "declaration-property-value-no-unknown": null,

    // Allow legacy :not() notation for broader browser support
    "selector-not-notation": null,

    // Allow shorthand/longhand overlap (intentional in normalization CSS)
    "declaration-block-no-redundant-longhand-properties": null,

    // Allow missing generic font families in utility classes
    "font-family-no-missing-generic-family-keyword": null,

    // Allow legacy color notations and alpha values
    "alpha-value-notation": null,
    "hue-degree-notation": null,

    // Allow unquoted font family names
    "font-family-name-quotes": null,

    // Allow unknown media feature values (browser-specific hacks)
    "media-feature-name-value-no-unknown": null,
  },
};
