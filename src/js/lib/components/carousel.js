'use strict';

import $ from '../core';

$.prototype.carousel = function() {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
		const slides = this[i].querySelectorAll('.carousel-item');
		this[i].querySelector('.carousel-slides').style.width = 100 * slides.length + '%'; // 3 slides = 300%
		slides.forEach(slide => {
			slide.style.width = width;
		});
	}
}

$('.carousel').carousel();