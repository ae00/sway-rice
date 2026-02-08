// ==UserScript==
// @name        VK custom css
// @namespace   https://github.com/olmokramer
// @description Custom CSS for VK
// @include     https://www.vk.se/*
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
	scrollbar-color:grey black !important;
}
body,
div {
	background:#000000 !important;
	border:0 !important;
	scrollbar-color: grey black !important;
}
p,a,h1,h2,h3,span,.vkmui-TextLabelCategory {
	color:#fff !important;
}
.adContainer___v_Ou0 {
	display:none !important;
}
			`;
		}
	});
})();
