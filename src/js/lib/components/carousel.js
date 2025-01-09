'use strict';

import $ from '../core';

$.prototype.carousel = function(autoplay = true, duration = 3000) {
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
		let autoplayInterval;

		// Function to move to the next slide
		const nextSlide = () => {
			if (offset === (+width.replace(/\D/g, '') * (slides.length - 1))) {
				offset = 0;
			} else {
				offset += +width.replace(/\D/g, '');
			}

			slidesField.style.transform = `translateX(-${offset}px)`;
			slideIndex = (slideIndex + 1) % slides.length; // slideIndex++ or slideIndex = 0

			updateDots();
		};

		// Function to update dots (indicators)
		const updateDots = () => {
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		};

		// Start autoplay if enabled
		const startAutoplay = () => {
			if (autoplay) {
				autoplayInterval = setInterval(nextSlide, duration);
			}
		};

		// Stop autoplay
		const stopAutoplay = () => {
			if (autoplay) {
				clearInterval(autoplayInterval);
			}
		};

		// Handle next button click
		$(this[i].querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault();
			nextSlide();
		});

		// Handle prev button click
		$(this[i].querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault();
			if (offset == 0) {
				offset = +width.replace(/\D/g, '') * (slides.length - 1);
			} else {
				offset -= +width.replace(/\D/g, ''); // add width of slide
			}

			slidesField.style.transform = `translateX(-${offset}px)`;
			slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;

			updateDots();
		});

		// Handle dot (indicator) click
		const sliderId = this[i].getAttribute('id');
		$(`#${sliderId} .carousel-indicators li`).click((e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = +width.replace(/\D/g, '') * slideTo;

			slidesField.style.transform = `translateX(-${offset}px)`;

			updateDots();
		});

		// Mouseenter event to stop autoplay
		this[i].addEventListener('mouseenter', () => stopAutoplay());

		// Mouseleave event to restart autoplay
		this[i].addEventListener('mouseleave', () => startAutoplay());

		// Start autoplay when the function is first called
		startAutoplay();
	}
}

$('.carousel').carousel(true, 5000);