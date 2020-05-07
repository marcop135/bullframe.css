# bullframe.css

[https://github.com/marcop135/bullframe.css](https://github.com/marcop135/bullframe.css)

bullframe.css is a (S)CSS framework that works on every browsers, modern or not.

It's a solid starting-point for a **IE8+**, progressive, mobile-first responsive web design.
Write semantic HTML, add some JS polyfills where needed, drop the styles you need, and you are ready to go everywhere!

## 😣 Yes, people still use Internet Explorer in 2020

- Short answer: **yes!** Enterprise-level companies, accessibility-focused projects and some non-tech-savvy older people.
- [Long answer](https://www.quora.com/Do-people-still-use-Internet-Explorer-in-2020)
- [Browser worldwide usage comparison](https://gs.statcounter.com/browser-market-share/desktop/worldwide#monthly-201904-202004-bar)
- Read this [Lea Verou’s Twitter thread](https://twitter.com/LeaVerou/status/1246252696602128384) as well.

## Best features

- Support IE8+ and a wide range of desktop and mobile browsers
- Add responsiveness as normalize as much as possible HTML elements *out-of-the-box*
- Mobile-First Responsive Web Design focused
- Progressive Enhancement focused
- Flexible images and media elements (video, audio, iframe, embed) by default
- Flexible, cross-browser, bug-proof HTML5 form elements by default
- A simple 12-columns fluid/responsive grid system with IE8+ support
- Get utility classes (e.g. `<h2 class="h1">` or `<div class="clearfix">`) or not (classless framework)
- Dark mode included
- CSS BEM
- `bullframe-classless.min.css` is just 10KB~ 🎉

## Usage

### Include it via CDN in the `<head>`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">
```

### Install it via NPM

... (TODO)

### Start from an HTML5 snippet

Add some HTML markup and two JS polyfills from the JSDelivr CDN (if you need a wide cross-browser support).

#### IE8+ and old browsers (recommended)

Improve the JS polyfills security via the `integrity` and `crossorigin` attributes. [Read more](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes)

```html
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css"
integrity="sha384-xL9PVrDQt5lFLFaPOMR1xJKpBz83hP1cjuND8oIMxl3kIM6yFyp7xzRChkB5ugUN" crossorigin="anonymous">

<!-- enable HTML5 elements and fix IE10 viewport on Windows 8 -->
<script src="https://cdn.jsdelivr.net/combine/npm/html5shiv@3.7.3,npm/ie10-viewport-bug-workaround.js@1.0.0" integrity="sha384-qBVh9Nh9vwp+qqJMBTOrfjBPwz5RMDGc4lscK3+4F6dtIUo89TeUhS9wiDPhgpi5" crossorigin="anonymous"></script>
<body>
  <div class="bf-container">
    <h1>Hello World!</h1>
  </div>
</body>
</html>
```

#### IE8+ and old browsers (minimal setup)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">

<!-- enable HTML5 elements and fix IE10 viewport on Windows 8 -->
<script src="https://cdn.jsdelivr.net/combine/npm/html5shiv@3.7.3,npm/ie10-viewport-bug-workaround.js@1.0.0"></script>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

#### IE11+ and modern browsers (recommended)

Improve the JS polyfills security via the `integrity` and `crossorigin` attributes. [Read more](https://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attributes)

```html
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css" integrity="sha384-xL9PVrDQt5lFLFaPOMR1xJKpBz83hP1cjuND8oIMxl3kIM6yFyp7xzRChkB5ugUN"  crossorigin="anonymous">
</head>
<body>
  <div class="bf-container">
    <h1>Hello World!</h1>
  </div>
</body>
</html>
```

#### IE11+ and modern browsers (minimal setup)

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

## Support and Caveats

... (TODO)

## Classless (no utilities, e.g. `<h2 class="h1">`)

```html
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe-classless.min.css">
```

Drop the main CSS file in your webpage, and the job is done!
Just semantic HTML and you get nice styles and cross-browser normalization.
More info [on this CSS-tricks article](https://css-tricks.com/no-class-css-frameworks/).

Why you need utilities? To get speed and build custom designs without writing CSS. Read more [on Tailwind framework docs](https://tailwindcss.com/docs/utility-first/).

## Dark mode

This enables a dark-mode style in all browsers:

```html
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe-darkmode.min.css">
```

And this, enables a dark mode only if the user prefers it, in browsers that support the `prefers-color-scheme` media query.
Read more [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

```html
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe-darkmode-prefers.min.css">
```

## Browser support

Tested and compatible in:

### Desktop browsers

- IE 8+
- Latest Stable: Firefox, Chrome, Safari, Opera

### Mobile browsers

- Latest Stable: Firefox, Chrome and Opera
- Android browser v5+
- IE Mobile 9-10
- Mobile Safari iOS 4+
- Opera Mini (no responsive-table support barrow.io/overflow-scrolling)

### Tested on real browsers

This project is tested in a wide range of browsers using [BrowserStack](http://browserstack.com/) live, thanks to the BrowserStack Open Source initiative.

![BrowserStack Logo](./browserstack-logo.png)

## Contributors

[@englishextra](https://github.com/englishextra) the project is still live thanks to you!

## Become a sponsor

[Sponsor me](https://github.com/sponsors/marcop135) and support my front-end efforts and open source!

## Acknowledgements

bullframe.css incorporates some of the styles found on:

- Normalize.css - [https://github.com/necolas/normalize.css](https://github.com/necolas/normalize.css)
- Bootstrap - [https://github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)
- HTML5 Boilerplate - [https://github.com/h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
- 320 and up - [https://github.com/malarkey/320andup](https://github.com/malarkey/320andup)
- Formalize - [https://github.com/nathansmith/formalize](https://github.com/nathansmith/formalize)
- Inuit CSS - [https://github.com/csswizardry/inuit.css](https://github.com/csswizardry/inuit.css)
- YUI3 CSS Grids - [http://yuilibrary.com/yui/docs/cssgrids/](http://yuilibrary.com/yui/docs/cssgrids/)

## License

The MIT License (MIT) - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT "The MIT License")
