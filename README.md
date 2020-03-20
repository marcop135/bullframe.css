![bullframe.css boilerplate](logo.png)

*bullframe.css* is a CSS file to be used as an alternative to CSS resets and as a starting-point for a solid mobile-first responsive web design **retro-compatible with IE8** and other old browsers.

You can copy-and-paste it quickly or just watch it when you build cool websites and web apps!

***

<img src="https://camo.githubusercontent.com/cdc54d1641f5e11e246a2707063ecad092c96d11/68747470733a2f2f64617669642d646d2e6f72672f6477796c2f657374612e737667" alt="Dependency Status" data-canonical-src="https://david-dm.org/dwyl/esta.svg" style="max-width:100%;"></a>
<a href="https://github.com/marcop135/bullframe.css/issues"><img src="https://camo.githubusercontent.com/926d8ca67df15de5bd1abac234c0603d94f66c00/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6e747269627574696f6e732d77656c636f6d652d627269676874677265656e2e7376673f7374796c653d666c6174" alt="contributions welcome" data-canonical-src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" style="max-width:100%;"></a>

*Current version: v2.7.1*

***

## Best features

* Normalize and fluidify as much as possible HTML elements out-of-the-box
* Support IE8+ and a wide range of desktop and mobile browsers
* Mobile-First Responsive Web Design ready
* Progressive Enhancement development ready
* Simple 12-columns fluid grid system IE8+
* Flexible images and media elements (video, audio, iframe, embed) by default
* Flexible, cross-browser HTML5 form elements by default
* 10KB~ minified/gzipped
* Use classes only for utilities (e.g. '.clearfix', '.text-hide')
* Extensive bug fixing documentation 

***

## 3 ways to use it

1. **Write your styles without ever touch the boilerplate**

Include the bullframe.css file *before* your custom styles and, if needed, include some polyfills via the JSDelivr CDN:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="bullframe.css">
  
  <!-- if needed, support HTML5 elements in old browsers -->
  <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>

  <link rel="stylesheet" href="your-styles.css">

  <!-- if needed, support CSS3 media queries in IE8 -->
  <!--[if IE 8]>
  <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/src/matchmedia.addListener.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/src/respond.js"></script>
  <![endif]-->

  ...
```

2. **Write your styles inside the boilerplate**

Open `bullframe.css` file, scroll down the code and start to add styles *inside* "Author's custom styles" section (like [HTML5 Boilerplate main.css](https://github.com/h5bp/html5-boilerplate/blob/b83ce3b1b42157f8c817a62b4d353415e25c3af4/css/main.css#l-92-110 "HTML5 Boilerplate main.css")).

3. **Just take a look at `bullframe.css` when coding websites**

The file is divided into several sections of code. You can copy-and-paste only what you need (e.g. typography, forms, print) or just watch CSS tricks and best practices.

***

## Browser support

Tested and compatible in:

* Evergreen browsers (Chrome, Firefox, Edge, Opera)
* Safari 6+
* Internet Explorer 8+
* Internet Explorer Mobile 9-10
* Firefox Mobile (last two)
* Chrome mobile (last two)
* Mobile Safari iOS 4+
* Android browser v5+
* Opera Mobile (last two) *
* Opera Mini *


** * Responsive tabular data CSS-only tecnique not working in Android 2.x, Opera 10-11, Opera Mobile (Presto) and Opera Mini due to overflow bug**. When the viewport is too narrow, content that overflows is hidden. [Get more info](http://barrow.io/overflow-scrolling "overflow scrolling").

***

## Contributors

[@englishextra](https://github.com/englishextra) the project is still live thanks to you!

***

## Become a sponsor 

[Sponsor me](https://github.com/sponsors/marcop135) and support my front-end efforts and open source!

***

## Acknowledgements

bullframe.css incorporates some of the styles found on:

* Normalize.css - [https://github.com/necolas/normalize.css](https://github.com/necolas/normalize.css)
* HTML5 Boilerplate - [https://github.com/h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
* Bootstrap - [https://github.com/twbs/bootstrap](https://github.com/twbs/bootstrap)
* 320 and up - [https://github.com/malarkey/320andup](https://github.com/malarkey/320andup)
* Formalize - [https://github.com/nathansmith/formalize](https://github.com/nathansmith/formalize)
* Inuit CSS - [https://github.com/csswizardry/inuit.css](https://github.com/csswizardry/inuit.css)
* YUI3 CSS Grids - [http://yuilibrary.com/yui/docs/cssgrids/](http://yuilibrary.com/yui/docs/cssgrids/)
* Pure CSS - [https://github.com/yui/pure](https://github.com/yui/pure)
* Typeplate - [https://github.com/typeplate/typeplate.github.com](https://github.com/typeplate/typeplate.github.com)


## License

The MIT License (MIT) - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT "The MIT License")
