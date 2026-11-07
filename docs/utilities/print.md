---
title: Print
---

# Print styles

Under `@media print`, the class-based builds and `bullframe-utilities.css` apply print styles adapted from [HTML5 Boilerplate `main.css`](https://github.com/h5bp/main.css). They need no class. Classless builds ship no print styles.

| Rule                                              | Applies to                                    |
| ------------------------------------------------- | --------------------------------------------- |
| Black text on white, no box or text shadows       | Every element                                 |
| Underline, then the URL in parentheses            | `a[href]`, except `#` and `javascript:` links |
| Title in parentheses after the text               | `abbr[title]`                                 |
| Wrapped lines and a 1px border                    | `pre`, plus the border on `blockquote`        |
| No page break inside                              | `pre`, `blockquote`, `tr`, `img`              |
| No page break after                               | `h2`, `h3`                                    |
| At least three lines on each side of a page break | `p`, `h2`, `h3`                               |
| Minimum width of 992px                            | `body`, `.bf-container`                       |
| Auto-width inner table                            | `.bf-table-responsive`                        |
| Collapsed borders                                 | `.bf-table`, `.bf-table-responsive table`     |

Check the result with the browser's print preview: Cmd+P on macOS, Ctrl+P on Windows and Linux.
