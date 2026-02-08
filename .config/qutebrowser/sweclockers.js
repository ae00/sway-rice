// ==UserScript==
// @name        Sweclockers custom css
// @namespace   https://github.com/olmokramer
// @description Custom CSS for Sweclockers
// @include     https://www.sweclockers.com/*
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

html {
	scrollbar-color: grey black !important;
}
#content,
#content-container,
.content-background,
.forum-post-body,
.side,
.bbQuote,
.widget,
.nav-top,
.nav-main,
.cell,
.caption,
.bottom {
	background:#000 !important;
	scrollbar-color: grey black !important;
}
.nav-main {
	border:0 !important;
}
.bbQuote {
	border:1px solid #a06123 !important;
}
.page {
	color:#ffffff !important;
}
.cell h3 {
	color:#dd7e1f !important;
}
input {
	background:#000 !important;
	border:grey !important;
}
.button--wide {
	background:#000 !important;
	color:#fff !important;
}

			`;
		}
	});
})();
