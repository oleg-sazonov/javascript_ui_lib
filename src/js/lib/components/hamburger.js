'use strict';

import $ from '../core';

$.prototype.createHamburger = function() {
	const hamburgerHTML = `
		<div class="hamburger">
			<span></span>
			<span></span>
			<span></span>
		</div>
	`;

	for (let i = 0; i < this.length; i++) {
		$(this[i]).append(hamburgerHTML);
    }

	// return this;
	return this.find('.hamburger'); // `$('nav').createHamburger();` return hamburger-component 
}