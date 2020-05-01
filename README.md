# bullframe.css

_bullframe.css_ is a CSS file to be used as an alternative to CSS resets and as a starting-point for a solid mobile-first responsive web design **retro-compatible with IE8** and other old browsers.

You can copy-and-paste it quickly or just watch it when you build cool websites and web apps!

![dependencies badge](https://img.shields.io/github/license/marcop135/bullframe.css)

## Best features

- Normalize and fluidify as much as possible HTML elements out-of-the-box
- Support IE8+ and a wide range of desktop and mobile browsers
- Mobile-First Responsive Web Design ready
- Progressive Enhancement development ready
- Simple 12-columns fluid grid system IE8+
- Flexible images and media elements (video, audio, iframe, embed) by default
- Flexible, cross-browser HTML5 form elements by default
- 10KB~ minified/gzipped
- Use classes only for utilities (e.g. '.clearfix', '.text-hide')
- Extensive bug fixing documentation

## How to use it

Include it via CDN in the `<head>`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">
```

Or include the bullframe.css file _before_ your custom styles and, if needed, include some polyfills via JSDelivr CDN.

IE8+ (verbose version)

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css"
integrity="sha384-xL9PVrDQt5lFLFaPOMR1xJKpBz83hP1cjuND8oIMxl3kIM6yFyp7xzRChkB5ugUN" crossorigin="anonymous">

<link rel="stylesheet" href="your-styles.css" />

<!-- enable HTML5 elements and CSS3 media queries in old browsers 
(html5shiv.js + respond.js) -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/combine/npm/html5shiv@3.7.3,npm/html5shiv@3.7.3/dist/html5shiv-printshiv.min.js,npm/respond.js@1.4.2/src/matchmedia.addListener.min.js,npm/respond.js@1.4.2/src/matchmedia.polyfill.min.js,npm/respond.js@1.4.2/src/respond.min.js" integrity="sha384-Y5098RDeBIkjYD3undzXpR4viQ5s5ZgUNJ/2s2RSQ5nabAj9M34XtL5luONpYt1A" crossorigin="anonymous"></script>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

IE10+ (verbose version)

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css" integrity="sha384-xL9PVrDQt5lFLFaPOMR1xJKpBz83hP1cjuND8oIMxl3kIM6yFyp7xzRChkB5ugUN"  crossorigin="anonymous">

<link rel="stylesheet" href="your-styles.css" />

</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

IE8+ (minimal setup)

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/marcop135/bullframe.css/bullframe.min.css">

<!-- support for HTML5 elements and media queries in old browsers -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/combine/npm/html5shiv@3.7.3,npm/html5shiv@3.7.3/dist/html5shiv-printshiv.min.js,npm/respond.js@1.4.2/src/matchmedia.addListener.min.js,npm/respond.js@1.4.2/src/matchmedia.polyfill.min.js,npm/respond.js@1.4.2/src/respond.min.js"></script>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

IE10+ (minimal setup)

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

## Browser support

Tested and compatible in:

Desktop browsers

- IE 8+
- Latest Stable: Firefox, Chrome, Safari, Opera

Mobile browsers

- Latest Stable: Firefox, Chrome and Opera
- Android browser v5+
- IE Mobile 9-10
- Mobile Safari iOS 4+
- Opera Mini (no responsive-table support barrow.io/overflow-scrolling)

## Tested on real browsers

This project is tested in a wide range of browsers using [BrowserStack](http://browserstack.com/) live, thanks to the BrowserStack Open Source initiative.

![BrowserStack Logo](./docs/img/browserstack-logo.png)

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
