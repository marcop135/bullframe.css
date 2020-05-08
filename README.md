# bullframe.css

[https://github.com/marcop135/bullframe.css](https://github.com/marcop135/bullframe.css)

bullframe.css is a (S)CSS framework that works on every browsers, modern or not.

It's a solid starting-point for a IE8+, progressive, responsive web design.
Write semantic HTML, add some JS polyfills where needed, drop the styles you need, and you are ready to go everywhere!

**Jump to:** <br>
Getting started - [CDN](#CDN) - [NPM](#npm) - [HTML template IE8+](#ie8-and-old-browsers) - [HTML template IE11+](#ie11-and-modern-browsers)<br>
Customization - [No classes (Classless)](#no-classes-classless) - [Dark mode](#dark-mode)<br>
More - [Browser support](#browser-compatibility) - [Changelog](#changelog) - [Sponsor me!](#become-a-sponsor)

---

## Best features

- Support IE8+ and a wide range of desktop and mobile browsers
- Add responsive-ness and normalize as much as possible HTML elements *out-of-the-box*
- Progressive Responsive Web Design focused
- Flexible images and media elements (video, audio, iframe, embed) by default
- Flexible, cross-browser, bug-proof HTML5 form elements by default
- A simple 12-columns fluid/responsive grid system with IE8+ support
- Get utility classes (e.g. `<h2 class="h1">`) or not (classless framework)
- Dark mode included
- CSS BEM
- `bullframe-classless.min.css` is just 10KB~ 🎉

## Internet Explorer usage

Do people still use Internet Explorer?

- Short answer: **yes!** Enterprise-level companies, accessibility-focused projects and some non-tech-savvy older people.
- [Long answer](https://www.quora.com/Do-people-still-use-Internet-Explorer-in-2020)
- [Browser worldwide usage comparison](https://gs.statcounter.com/browser-market-share/desktop/worldwide#monthly-201904-202004-bar)
- Read this [Lea Verou’s Twitter thread](https://twitter.com/LeaVerou/status/1246252696602128384) to get more developers' points of view.

---

## Getting started

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">
```

### npm

`$ npm install bullframe.css`

### HTML

Add some HTML markup, and two JS polyfills (if you need a wide cross-browser support).

#### IE8+ and old browsers

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">

<!-- enable HTML5 elements, and fix IE10 viewport on Windows 8 -->
<script src="https://cdn.jsdelivr.net/combine/npm/html5shiv@3.7.3,npm/ie10-viewport-bug-workaround.js@1.0.0"></script>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

#### IE11+ and modern browsers

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">

</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

#### IE8+ and old browsers (recommended)

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
  href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css"
  integrity="sha384-xL9PVrDQt5lFLFaPOMR1xJKpBz83hP1cjuND8oIMxl3kIM6yFyp7xzRChkB5ugUN"
  crossorigin="anonymous"
>

<!-- enable HTML5 elements and fix IE10 viewport on Windows 8 -->
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

#### IE11+ and modern browsers (recommended)

Improve the JS polyfills security via the `integrity` and `crossorigin` attributes. [Read more](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css"
  integrity="sha384-xL9PVrDQt5lFLFaPOMR1xJKpBz83hP1cjuND8oIMxl3kIM6yFyp7xzRChkB5ugUN"
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

---

## Customization

### No classes (classless)

No classes, no utilities. Feel free to add yours and create your custom components.

Just drop this CSS file in your webpage, and the job is done!
Write semantic HTML and get nice styles and cross-browser normalization.
More info [on this CSS-tricks article](https://css-tricks.com/no-class-css-frameworks/).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe-classless.min.css">
```

### Dark mode

This enables a dark (dark-mode) style by default in all browsers:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe-dark.min.css">
```

And this, enables a dark-mode only if the user prefers it, in browsers that support the `prefers-color-scheme` media query.
Read more [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe-dark-prefers.min.css">
```

---

## Browser compatibility

Tested and compatible in:

### Desktop browsers

- IE 8+
- Latest Stable: Firefox, Chrome, Edge, Safari, Opera

### Mobile browsers

- Latest Stable: Firefox, Chrome, Edge, Opera
- Latest Stable: Opera Mini
- IE Mobile 11
- Mobile Safari iOS 4+

### Tested on real browsers

This project is tested in a wide range of browsers using [BrowserStack](http://browserstack.com/) live, thanks to the BrowserStack Open Source initiative.

![BrowserStack Logo](./browserstack-logo.png)

---

## Become a sponsor

[Sponsor me](https://github.com/sponsors/marcop135) and support my front-end efforts and open source!

## Contributors

[@englishextra](https://github.com/englishextra) the project is still live thanks to you!

---

## Changelog

[Changelog](https://github.com/marcop135/bullframe.css/blob/master/CHANGELOG.md)

## Acknowledgements

bullframe.css incorporates some of the styles found on some amazing CSS boilerplates and frameworks across the web. _Thank you!_

- @necolas [/normalize.css](https://github.com/necolas/normalize.css) for the extensive old browsers bug fixing documentation
- @h5bp [/main.css](https://github.com/h5bp/main.css) for the excellent print styles base and the keyboard utilities
- @twbs [/bootstrap](https://github.com/twbs/bootstrap) for _everything!_
- @kognise [/water.css](https://github.com/kognise/water.css) for the "classless" concept inspiration and some form tricks
- @csswizardry @inuitcss [/inuit.css](https://github.com/inuitcss/inuitcss) for some advanced Sass tips and tricks

## License

The MIT License (MIT) - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT "The MIT License")
