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
  },
};
