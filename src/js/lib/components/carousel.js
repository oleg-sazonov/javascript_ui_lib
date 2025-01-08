'use strict';

import $ from '../core';

$.prototype.carousel = function() {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
		const slides = this[i].querySelectorAll('.carousel-item');
		const slidesField = this[i].querySelector('.carousel-slides');
		const dots = this[i].querySelectorAll('.carousel-indicators li');

		slidesField.style.width = 100 * slides.length + '%'; // 3 slides = 300%
		slides.forEach(slide => {
			slide.style.width = width;
		});

		let offset = 0;
		let slideIndex = 0;

		$(this[i].querySelector('[data-slide="next"]')).click((e) => { // click on arrow
			e.preventDefault();
			if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
				offset = 0; // if current slide is the last one
			} else {
				offset += +width.replace(/\D/g, ''); // add width of slide
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == slides.length - 1) {
				slideIndex = 0;
			} else {
				slideIndex++;
			}

			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		$(this[i].querySelector('[data-slide="prev"]')).click((e) => { // click on arrow
			e.preventDefault();
			if (offset == 0) {
				offset = +width.replace(/\D/g, '') * (slides.length - 1);
			} else {
				offset -= +width.replace(/\D/g, ''); // add width of slide
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == 0) {
				slideIndex = slides.length - 1;
			} else {
				slideIndex--;
			}

			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		const sliderId = this[i].getAttribute('id');
		$(`#${sliderId} .carousel-indicators li`).click((e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = +width.replace(/\D/g, '') * slideTo;

			slidesField.style.transform = `translateX(-${offset}px)`;
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});
	}
}

$('.carousel').carousel();