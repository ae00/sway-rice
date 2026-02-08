// ==UserScript==
// @name        aftonbladet custom css
// @namespace   https://github.com
// @description Custom CSS for aftonbladet
// @include     https://www.aftonbladet.se/*
// @run-at      document-start
// @version     2
// @author      Olmo Kramer
// ==/UserScript==

(function IIFE() {
	'use strict';

	document.addEventListener('readystatechange', function onReadyStateChange() {
		if (document.readyState == 'interactive') {
			const style = document.createElement('style');
			document.head.appendChild(style);
			style.innerHTML = `
*,
div,
body {
	background:#000000 !important;
	scrollbar-color: grey black !important;
	border:0 !important;
}
.twocolumnlayout-content_3bf5 {
	background:#000000;
}
a,p,h1,h2,h3,span, .hyperion-css-1txzxsd, .hyperion-css-kt7eyv {
	color:#ffffff !important;
}
.hyperion-css-43tyjz {
	color:red !important;
}
.twocolumnlayout-main_3bf5,
.hyperion-css-rakwf4,
.hyperion-css-1k2y2rn {
	border:0 !important;
}
.twocolumnlayout-supertop_3bf5 {
	display:none !important;
}
.hyperion-css-12oq6k6,
.hyperion-css-1dhabv7{
	color:#fff !important;
}
			`;
		}
	});
})();
