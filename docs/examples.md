# Examples

Standalone HTML templates for common layouts. Open a card for the live page and view its source to copy the markup. To see every element on one page, use the [Kitchen sink](/kitchen-sink/).

<ExamplesGallery />

## Add or update an example

Templates live in `src/docs/examples/<slug>/index.html`, and the gallery reads `src/docs/examples/examples.json`. Regenerate the card screenshots after a change:

```bash
npm run build
npm run docs:sync-public
npm run examples:shots
```
