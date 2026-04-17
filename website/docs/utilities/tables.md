---
sidebar_position: 5
title: Tables
---

# Table Utilities

Utilities for styled and responsive tables.

## Basic Table

Add `.bf-table` to style table cells with padding and borders:

```html
<table class="bf-table">
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
```

## Responsive Table

Wrap your table in a `.bf-table-responsive` container to enable horizontal scrolling on small screens:

```html
<div class="bf-table-responsive">
  <table class="bf-table">
    <!-- Wide table content -->
  </table>
</div>
```

## Zebra Striping

Add alternating row backgrounds for improved readability:

```html
<!-- Standard table -->
<table class="bf-table bf-table--zebra">
  <!-- ... -->
</table>

<!-- Responsive table -->
<div class="bf-table-responsive bf-table-responsive--zebra">
  <table>
    <!-- ... -->
  </table>
</div>
```

## Class Reference

| Class | Description |
|---|---|
| `.bf-table` | Adds padding and bottom borders to `th` and `td` |
| `.bf-table-responsive` | Enables horizontal scrolling for wide tables |
| `.bf-table--zebra` | Adds alternating row background colors |
| `.bf-table-responsive--zebra` | Zebra striping for responsive tables |
