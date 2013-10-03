<h1>BULLFRAME.CSS v1.5.1-wip</h1>
<p><code>bullframe.css</code> is a CSS file to be used as an <b>alternative to CSS resets</b> and as a starting-point for <b>Mobile-First Responsive Web Design</b>.</p>
<p>Personally I don't like some heavy and stylish front-end frameworks like <a href="http://twitter.github.com/bootstrap/" title="Twitter Bootstrap">Bootstrap</a> or <a href="http://foundation.zurb.com/" title="Zurb Foundation">Foundation</a>. So I create a <b>simple, mobile-first</b> CSS-only boilerplate.<br>
You can copy-and-paste it quickly or just watch it when you build cool websites!


<h2>Best features</h2>
<ul>
  <li>Normalized styles for a wide range of elements across browsers (like 
  <i><a href="http://nicolasgallagher.com/about-normalize-css/" title="about normalize.css">normalize.css</a></i> do)</li>
  <li>30%~ of Bootstrap3 main CSS</li>
  <li>IE7+ support <small>(if you really need it...)</small></li>
  <li>Mobile-First</li>
  <li>Responsive Web Design ready</li>
  <li>Style-agnostic</li>
  <li>Fluid grid system</li>
  <li>Flexible vertical grid</li>
  <li>Starter-kit custom styles</li>
</ul>
<ul>
  <li>Flexible and rich typography</li>
  <li>Flexible images and media (video, audio, iframe, embed)</li>
  <li>Flexible, cross-browser HTML5 forms</li>
  <li>Flexible tables</li>
  <li>Several helper classes (like '.clearfix' or '.hide-text')</li>
</ul>


<h2>Test it now</h2>
<p><b><a href="https://googledrive.com/host/0B4LqH9uqRDqQd2NFaUlxTlBSSWM/index.html" title="google drive demo page">Check out the demo</a></b></p>
<p>Play with code on JSBin <a href="http://jsbin.com/EQoYiwI/2/" title="JSBin">http://jsbin.com/EQoYiwI/2/</a></p>


<h2>How to use it</h2>
<ul>
  <li>
    <p>1) <b>Write your styles without ever touch the boilerplate</b></p>
    <p>Include <code>bullframe.min.css</code> file <i>before</i> your custom styles like this:</p>
<pre><code>&lt;!doctype html>
&lt;html>
&lt;head>
&lt;meta charset="utf-8">
    &lt;link rel="stylesheet" src="bullframe.min.css">
&lt;link rel="stylesheet" src="your-styles.css">
&lt;/head>
...</code></pre>
  </li>
</ul>
<ul>
  <li>
    <p>2) <b>Write your styles inside the boilerplate</b></p>
  <p>Open <code>bullframe.css</code> file, scroll down the code and start to add styles <i>inside</i>
"Author's custom styles" section (like <a href="https://github.com/h5bp/html5-boilerplate/blob/b83ce3b1b42157f8c817a62b4d353415e25c3af4/css/main.css#l-92-110" title="HTML5 Boilerplate main.css">HTML5 Boilerplate main.css</a>).</p>
  </li>
</ul>
<ul>
  <li>
    <p>3) <b>Just watch <code>bullframe.css</code> when coding websites</b></p>
  <p>The file is divided into several sections of code. You can copy-and-paste only what you need (e.g. typography, forms, print) or just watch CSS tricks and best practices.</p>
  </li>
</ul>


<h2>Browser support</h2>
Tested and compatible in:
<ul>
  <li>Internet Explorer 7-10</li>
  <li>Latest stable Chrome</li>
  <li>Firefox 4+</li>
  <li>Safari 4+</li>
  <li>Opera 10+</li>
</ul>
<ul>
  <li>Mobile Safari iOS 4+</li>
  <li>Android browser 2.3.2+ *</li>
  <li>Latest stable Opera Mobile (Presto and Webkit) *</li>
  <li>Opera Mini *</li>
  <li>Internet Explorer Mobile 9-10</li>
  <li>Latest stable Mobile Firefox (Fennec)</li>
  <li>Blackberry browser OS 5</li>
  <li>Latest stable Kindle Touch browser</li>
</ul>
<p>* <b>Responsive tabular data CSS-only tecnique not working in Android 2.x, Opera 10-11, Opera Mobile (Presto) and Opera Mini due to overflow bug</b>. When the viewport is too narrow, content that overflows is hidden. <a href="http://barrow.io/overflow-scrolling" title="overflow scrolling">Get more info</a>.</p>


<h2>License</h2>
<p>The MIT License (MIT) - <a href="http://opensource.org/licenses/MIT" title="The MIT License">http://opensource.org/licenses/MIT</a></p>


<h2>Acknowledgements</h2>
BULLFRAME.CSS incorporates some of the styles found on:
<ul>
  <li>Normalize.css - <a href="https://github.com/necolas/normalize.css" title="">https://github.com/necolas/normalize.css</a></li>
  <li>HTML5 Boilerplate - <a href="https://github.com/h5bp/html5-boilerplate" title="">https://github.com/h5bp/html5-boilerplate</a></li>
  <li>Bootstrap - <a href="https://github.com/twbs/bootstrap" title="">https://github.com/twbs/bootstrap</a></li>
  <li>320 and up - <a href="https://github.com/malarkey/320andup" title="">https://github.com/malarkey/320andup</a></li>
  <li>Formalize - <a href="https://github.com/nathansmith/formalize" title="">https://github.com/nathansmith/formalize</a></li>
  <li>Inuit CSS - <a href="https://github.com/csswizardry/inuit.css" title="">https://github.com/csswizardry/inuit.css</a></li>
  <li>YUI3 CSS Grids - <a href="http://yuilibrary.com/yui/docs/cssgrids/" title="">http://yuilibrary.com/yui/docs/cssgrids/</a></li>
  <li>YUI Pure Framework - <a href="https://github.com/yui/pure/" title="">https://github.com/yui/pure/</a></li>
  <li>Typeplate - <a href="https://github.com/typeplate/typeplate.github.com" title="">https://github.com/typeplate/typeplate.github.com</a></li>
  <li>Pure CSS - <a href="https://github.com/yui/pure" title="">https://github.com/yui/pure</a></li>
  <li>The Nyan Project - <a href="http://www.youtube.com/watch?v=QH2-TGUlwu4" title="">http://www.youtube.com/watch?v=QH2-TGUlwu4</a></li>
</ul>