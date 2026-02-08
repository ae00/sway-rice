// ==UserScript==
// @name        twitch custom css
// @namespace   https://github.com/olmokramer
// @description Custom CSS for aftonbladet
// @include     https://www.twitch.tv/*
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
body,
.side-nav,
.cRMumF,
.tw-root--theme-dark .directory-header-new__banner-cover,
.gWgyxD,
.channel-root__info .channel-info-content,
.cCSAoN,
.tw-root--theme-dark .chat-room,
.hgKyXI,
.kJMgAB,
.dewBQX,
.jmERFg,
.bbQAlj,
.chat-wysiwyg-input-box {
	background:#000 !important;
	background-color:#000 !important;
	border:0 !important;
}
*,
div {
	border:none !important;
	scrollbar-color: #333333 black;
}
.jUiaVy,
.navigation-link.active, .navigation-link:hover,
.kVhHfd,
.eFlXzO,
.gwGjcK,
.fytYW,
.eMoWJB,
.kJMgAB,
.chat-author__display-name {
	color:#c13434 !important;
}
.eCrblY {
	background:none !important;
}
.cMyzPK svg {
	display:none !important;
}
			`;
		}
	});
})();
