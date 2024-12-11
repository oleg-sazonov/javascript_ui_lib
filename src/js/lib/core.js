'use strict';

(() => {
	const $ = function(selector) {
		const elements = document.querySelectorAll(selector);
		console.log(elements);
	};

	window.$ = $;
})();