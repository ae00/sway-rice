// ==UserScript==
// @name        yr custom css
// @namespace   https://github.com/olmokramer
// @description Custom CSS for yr
// @include     https://www.yr.no/*
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
* {
	background:#000 !important;
	color:#fff !important;
	scrollbar-color: #333333 black;
}
			`;
		}
	});
})();
