---
title: Tables
---

# Table utilities

Classes for cell padding, horizontal scrolling and zebra rows. Base `table` styles need no class.

| Class                                                                               | Effect                                                                       |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `.bf-table`                                                                         | `--bf-spacing-lg` cell padding and a `--bf-color-table-border` bottom border |
| `.bf-table--zebra`                                                                  | `--bf-color-table-stripe` background on odd body rows                        |
| `.bf-table-responsive`                                                              | Wrapper that scrolls horizontally; the inner table is full width             |
| `.bf-table-responsive--zebra` Zebra rows, set on the `.bf-table-responsive` wrapper |

```html
<div class="bf-table-responsive">
  <table class="bf-table bf-table--zebra">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>Designer</td>
      </tr>
    </tbody>
  </table>
</div>
```
