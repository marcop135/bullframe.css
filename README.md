# bullframe.css

![bullframe.css logo](./docs/images-readme/logo-full.png)

[https://github.com/marcop135/bullframe.css](https://github.com/marcop135/bullframe.css)

bullframe.css is an (S)CSS framework that works on every browser, modern or not.

It's a cross-browser, responsive, IE8+ collection of default HTML UI elements ([atoms](https://atomicdesign.bradfrost.com/chapter-2/#atoms)) for your Sass project.

1. Add a good HTML template
2. Write semantic HTML5
3. Add a few utility classes (optional)
4. Add JS polyfills (optional)
5. Drop the custom styles you need
6. _...ready to go everywhere!_

**Jump to:**

Getting started:

- [Download](#download)
- [CDN](#CDN)
- [npm](#npm)
- [HTML template IE8+](#ie8-and-old-browsers)
- [HTML template IE11+](#ie11-and-modern-browsers)
- [Codepen](#codepen)

Customization:

- [No classes (Classless)](#no-classes-classless)
- [Dark theme](#dark-mode)
- [Utilities only](#just-utilities)

More:

- [Test page](https://marcop135.github.io/bullframe.css/)
- [Browser compatibility](#browser-compatibility)
- [Utilities overview](#utilities---a-quick-overview)
- [Screenshots](#screenshots)
- [Changelog](#changelog)
- _[Sponsor me!](#become-a-sponsor)_

## Best features

- IE8+ support and a wide range of desktop and mobile browsers
- Add responsive-ness and normalize as much as possible HTML elements *out-of-the-box*
- Progressive responsive web design focused
- Responsive, cross-browser, HTML5 form elements by default
- A simple 12-columns fluid grid system with IE8+ support
- Sass architecture
- CSS BEM
- Responsive typography
- Dark mode
- Get utility classes (e.g. `<h2 class="bf-h1">`) or not (no-class / classless framework)
- Isolated utility classes to avoid conflicts between frameworks' classes
- [`bullframe-classless.min.css`](https://github.com/marcop135/bullframe.css/blob/master/dist/css/bullframe-classless.min.css) is just 10KB~ min+gzip 🎉

## Internet Explorer usage and support

Do people still use Internet Explorer?

Short answer: **yes!** Enterprise-level companies, legacy business applications, accessibility-focused projects and some non-tech-savvy older people.
[Long answer](https://www.quora.com/Do-people-still-use-Internet-Explorer-in-2020)

[Browser worldwide usage comparison](https://gs.statcounter.com/browser-market-share/desktop/worldwide#monthly-201904-202004-bar)

Read this [Lea Verou’s Twitter thread](https://twitter.com/LeaVerou/status/1246252696602128384) to get more developers' points of view.

! Bootstrap v5 [will drop IE10 and IE11 support](https://github.com/twbs/bootstrap/pull/30377). Read the [Hacker News thread](https://news.ycombinator.com/item?id=22802003).

---

## What's included

You'll see something like this:

```text
bullframe.css/
└── dist/
    ├── css/
    │   ├── bullframe-classless.css
    │   ├── bullframe-classless.min.css
    │   ├── bullframe-dark-prefers.css
    │   ├── bullframe-dark-prefers.min.css
    │   ├── bullframe-dark.css
    │   ├── bullframe-dark.min.css
    │   ├── bullframe-utilities.css
    │   ├── bullframe-utilities.min.css
    │   ├── bullframe.css
    │   ├── bullframe.min.css
    │   ├── bullframe.min.css.map
    │   ├── ...
└── src/scss/
    └── forms/
    │   ├── ...
    └── misc/
    │   ├── ...
    └── mixins/
    │   ├── ...
    └── typography/
    │   ├── ...
    └── utilities/
    │   ├── ...
    └── variables/
    │   ├── ...
    ...
    ├── bullframe-classless.scss
    ├── bullframe-dark-prefers.scss
    ├── bullframe-dark.scss
    ├── bullframe-utilities.scss
    ├── bullframe.scss
└── gulpfile.js
└── index.html
...
```

## Getting started

### Download

[Download the latest release](https://github.com/marcop135/bullframe.css/archive/master.zip)

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe.min.css">
```

### npm

Once you have installed [Node.js](https://nodejs.org/en/download/), you can run this command to install bullframe.css into your project:

`npm install bullframe.css`

[What is Node?](https://en.m.wikipedia.org/wiki/Nodejs)

[What is npm?](https://www.npmjs.com/get-npm)

### Gulp.js

After installing bullframe.css from npm, you may use [gulp.js](https://gulpjs.com/docs/en/getting-started/quick-start) to re-compile all files, and customize your Sass project as needed.

``` bash
# install dependencies
npm install

# install the gulp command line utility
npm install --global gulp-cli

# run gulp
gulp
```

[What is gulp.js?](https://en.m.wikipedia.org/wiki/Gulp.js)

### HTML

Add some HTML markup, and two JS polyfills (if you need a wide cross-browser support).

Tip: if you need min/max-width CSS3 Media Queries support in IE8 (e.g. mobile-first responsive design), you could polyfill it with [respond.js](https://github.com/scottjehl/Respond).

[IE8 and Respond.js](https://getbootstrap.com/docs/3.4/getting-started/#support-ie8-respondjs) caveats.

#### IE8+ and old browsers

Improve the JS polyfills security via the `integrity` and `crossorigin` attributes. [Read more](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link
  type="text/css"
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe.min.css"
  integrity="sha384-HpmTC4+Y1tpRsyC0caOaOtsqEfBQqC12iB2WOT0CAHGE116qurJw2PwlJI62SIUH"
  crossorigin="anonymous"
>

<!-- enable HTML5 element, and fix IE10 viewport on Windows 8 -->
<script
  src="https://cdn.jsdelivr.net/combine/npm/html5shiv@3.7.3,npm/ie10-viewport-bug-workaround.js@1.0.0"
  integrity="sha384-qBVh9Nh9vwp+qqJMBTOrfjBPwz5RMDGc4lscK3+4F6dtIUo89TeUhS9wiDPhgpi5"
  crossorigin="anonymous"
></script>

<body>
  <div class="bf-container">
    <h1>Hello World!</h1>
  </div>

</body>
</html>
```

#### IE11+ and modern browsers

Improve the JS polyfills security via the `integrity` and `crossorigin` attributes. [Read more](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe.min.css"
  integrity="sha384-HpmTC4+Y1tpRsyC0caOaOtsqEfBQqC12iB2WOT0CAHGE116qurJw2PwlJI62SIUH"
  crossorigin="anonymous"
>

</head>
<body>
  <div class="bf-container">
    <h1>Hello World!</h1>
  </div>

</body>
</html>
```

## Codepen

Take a look at this [CodePen collection](https://codepen.io/collection/nxpjRe) and fork a ready-made templates of your choice.

### Use bullframe.css as a CodePen template

- [Light theme (default)](https://codepen.io/pen?template=WNrwNNM)
- [Dark theme](https://codepen.io/pen?template=ExPmzBV)
- [Dark `prefers-color-scheme`](https://codepen.io/pen?template=NWxjVQO)

## Customization

### No classes (classless)

No classes, no utilities. Feel free to add yours and create your custom components.

Just drop this CSS file in your webpage, and the job is done!
Write semantic HTML and get nice styles and cross-browser normalization.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-classless.min.css">
```

### Just utilities

Get all the utility classes

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-utilities.min.css">
```

### Utilities - A Quick Overview

#### Grid system

- `.bf-container`
- `.bf-container--fluid`
- `.bf-container--break-xs`
- `.bf-container--break-md`
- `.bf-container--break-lg`
- `.bf-row`
- `.bf-col-1`
- `.bf-col-2`
- `.bf-col-3`
- `.bf-col-4`
- `.bf-col-5`
- `.bf-col-6`
- `.bf-col-7`
- `.bf-col-8`
- `.bf-col-9`
- `.bf-col-10`
- `.bf-col-11`
- `.bf-col-12`

#### Layout

- `.bf-clearfix`
- `.bf-hide`
- `.bf-hidden`
- `.bf-text-hide`
- `.bf-sr-only`
- `.bf-sr-only.focusable`
- `.bf-invisible`
- `.bf-visible`
- `.bf-display-block`
- `.bf-display-block-center`
- `.bf-display-inline`
- `.bf-display-inline-block`
- `.bf-display-flex`
- `.bf-display-inline-flex`
- `.bf-float-right`
- `.bf-float-left`
- `.bf-position-fixed`
- `.bf-align-center-unknown`
- `.bf-align-center-unknown--item`
- `.bf-width-25`
- `.bf-width-33`
- `.bf-width-50`
- `.bf-width-75`
- `.bf-width-100`
- `.bf-width-auto`

#### Spacing

- `.bf-m-0`
- `.bf-m-t-0`
- `.bf-m-b-0`
- `.bf-m-l-0`
- `.bf-m-r-0`
- `.bf-m-b-1`
- `.bf-m-b-2`
- `.bf-m-b-3`
- `.bf-m-b-4`
- `.bf-p-0`
- `.bf-p-t-0`
- `.bf-p-b-0`
- `.bf-p-l-0`
- `.bf-p-r-0`
- `.bf-p-t-1`
- `.bf-p-t-2`
- `.bf-p-t-3`
- `.bf-p-t-4`
- `.bf-p-b-1`
- `.bf-p-b-2`
- `.bf-p-b-3`
- `.bf-p-b-4`

#### Texts

- `.bf-t-transform-uppercase`
- `.bf-t-transform-none`
- `.bf-t-left`
- `.bf-t-center`
- `.bf-t-right`
- `.bf-t-shadow`
- `.bf-t-italic`
- `.bf-t-style-normal`
- `.bf-t-weight-300`
- `.bf-t-weight-400`
- `.bf-t-weight-500`
- `.bf-t-weight-600`
- `.bf-t-weight-700`
- `.bf-t-weight-800`
- `.bf-text-break`
- `.bf-text-truncate`
- `.bf-no-select`
- `.bf-font-sans-serif`
- `.bf-font-serif`
- `.bf-font-monospace`
- `.bf-h1`
- `.bf-h2`
- `.bf-h3`
- `.bf-h4`
- `.bf-h5`
- `.bf-h6`
- `.bf-lead`
- `.bf-responsive-typography`

#### Lists

- `.bf-list-unstyled`

#### Tables

- `.bf-table`
- `.bf-table-responsive`
- `.bf-table--zebra`
- `.bf-table-responsive--zebra`

#### Embeds

- `.bf-embed-responsive`
- `.bf-embed-responsive--4-3`
- `.bf-embed-responsive--item`

#### Buttons

- `.bf-btn`
- `.bf-btn--primary`

#### Form states

- `.bf-focused`
- `.bf-disabled`
- `.bf-invalid`

#### Reduced motion

- `.bf-reduced-motion`

### Dark mode

This enables a dark (dark-mode) theme by default in all browsers:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-dark.min.css">
```

And this, enables dark only if the user prefers it, in browsers that support the `prefers-color-scheme` media query.
Read more [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-dark-prefers.min.css">
```

## Browser compatibility

### Desktop browsers

- IE 8+
- Latest stable two: Firefox, Chrome, Edge, Safari, Opera

### Mobile browsers

- Latest stable: Firefox, Chrome, Edge, Opera
- Mobile Safari iOS 7+
- IE Mobile 11

### Proxy browsers

- Latest Stable: Opera Mobile’s Turbo mode
- Latest Stable: Opera Mini

You can take a look at the [.browserslistrc](https://github.com/marcop135/bullframe.css/blob/master/.browserslistrc) file for [Autoprefixer](https://github.com/postcss/autoprefixer)

### Tested on real browsers

This project is tested in a wide range of browsers using also [BrowserStack](https://browserstack.com/) live, thanks to the BrowserStack Open Source initiative.

![BrowserStack Logo](./docs/images-readme/browserstack-logo.png)

### Screenshots

How can I quickly see if every HTML element works well on all browsers?

Take a look at some [screenshots and screencasts](https://github.com/marcop135/bullframe.css/tree/master/docs/screenshots-screencasts), organized by rendering engines (blink, gecko, trident, webkit).

## Become a sponsor

[Sponsor me](https://github.com/sponsors/marcop135) and support my front-end efforts and open source!

## Contributors

[@englishextra](https://github.com/englishextra) the project is still live thanks to you!

## Contributing

Please read the [contribution guidelines](https://github.com/marcop135/bullframe.css/blob/master/.github/CONTRIBUTING.md).

## Changelog

[Changelog](https://github.com/marcop135/bullframe.css/blob/master/CHANGELOG.md)

## Acknowledgements

bullframe.css incorporates some of the styles found on some amazing CSS boilerplates and frameworks across the web. _Thank you!_

- @necolas [/normalize.css](https://github.com/necolas/normalize.css) for the extensive old browsers bug fixing documentation
- @h5bp [/main.css](https://github.com/h5bp/main.css) for the excellent print styles base and the keyboard utilities
- @twbs [/bootstrap](https://github.com/twbs/bootstrap) for some neat typography tricks, responsive embeds, reboot styles, base24 SVG icons, button styles, grid system breakpoints and spacing utilities _(a lot!)_
- @kognise [/water.css](https://github.com/kognise/water.css) for the "classless" concept inspiration and some form tricks
- @csswizardry @inuitcss [/inuit.css](https://github.com/inuitcss/inuitcss) for some advanced Sass tips and tricks
- @jensimmons [/cssremedy](https://github.com/jensimmons/cssremedy) for the prefers-reduced-motion snippet

## License

The MIT License (MIT) - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT "The MIT License")

## Todos

- Add a complete documentation
