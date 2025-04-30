"use strict";

import $ from "../core";

/**
 * @fileoverview Реализация карусели с изображениями, стрелками, индикаторами и автопрокруткой.
 * Позволяет создавать и настраивать слайдер на основе переданных параметров.
 */

/**
 * Создаёт HTML-структуру карусели и инициализирует её.
 *
 * @method createCarousel
 * @memberof $
 * @param {Object} options - Настройки карусели.
 * @param {string[]} [options.images=[]] - Массив ссылок на изображения.
 * @param {boolean} [options.autoplay=true] - Включить автопрокрутку.
 * @param {number} [options.duration=3000] - Интервал автопрокрутки в миллисекундах.
 * @param {string} [options.prevArrow] - HTML-разметка для стрелки "назад".
 * @param {string} [options.nextArrow] - HTML-разметка для стрелки "вперёд".
 * @param {string} [options.containerSelector='body'] - CSS-селектор контейнера, куда будет вставлена карусель.
 * @param {string} [options.sliderId='carousel'] - Уникальный ID карусели.
 * @param {string} [options.carouselWidth='900px'] - Ширина компонента карусели.
 * @param {boolean} [options.showDots=true] - Показывать индикаторы (точки).
 * @param {boolean} [options.showArrows=true] - Показывать стрелки навигации.
 * @param {boolean} [options.arrowsOpacity=true] - Управлять прозрачностью стрелок.
 * @param {boolean} [options.stopAutoplayAtEnd=false] - Остановить автопрокрутку после последнего слайда.
 * @returns {void}
 */

// carousel-inner height -> to dynamic change height
$.prototype.createCarousel = function ({
    images = [],
    autoplay = true,
    duration = 3000,
    prevArrow = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 6l-6 6 6 6"></path>
        </svg>
    `,
    nextArrow = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"></path>
        </svg>
    `,
    containerSelector = "body",
    sliderId = "carousel",
    showDots = true,
    showArrows = true,
    arrowsOpacity = true,
    stopAutoplayAtEnd = false,
    carouselWidth = "900px",
    carouselHeight = "500px",
} = {}) {
    // Validate container selector

    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`Selector "${containerSelector}" not found in the DOM.`);
        return;
    }

    if (!images.length) {
        console.error("No images provided for the carousel.");
        return;
    }

    // Create carousel structure
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("id", sliderId);
    carousel.style.width = carouselWidth;
    // carousel.style.height = carouselHeight;

    // // const carouselInner = document.querySelector(`#${sliderId}`);
    // const carouselInner = document.querySelector(".carousel-inner");
    // carouselInner.style.height = carouselHeight;

    // Create indicators if showDots is true
    if (showDots) {
        const indicators = document.createElement("ol");
        indicators.classList.add("carousel-indicators");
        images.forEach((_, index) => {
            const li = document.createElement("li");
            if (index === 0) li.classList.add("active");
            li.setAttribute("data-slide-to", index);
            indicators.appendChild(li);
        });
        carousel.appendChild(indicators);
    }

    // Inner carousel
    const inner = document.createElement("div");
    inner.classList.add("carousel-inner");

    // Slides
    const slides = document.createElement("div");
    slides.classList.add("carousel-slides");
    images.forEach((src, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");
        const img = document.createElement("img");
        img.setAttribute("src", src);
        item.appendChild(img);
        slides.appendChild(item);
    });

    // Navigation arrows if showArrows is true
    if (showArrows) {
        const prev = document.createElement("a");
        prev.classList.add("carousel-prev");
        prev.setAttribute("href", "#");
        prev.setAttribute("data-slide", "prev");
        prev.innerHTML = `<span class="carousel-prev-icon">${prevArrow}</span>`;

        const next = document.createElement("a");
        next.classList.add("carousel-next");
        next.setAttribute("href", "#");
        next.setAttribute("data-slide", "next");
        next.innerHTML = `<span class="carousel-next-icon">${nextArrow}</span>`;

        if (!arrowsOpacity) {
            prev.style.opacity = "0";
            next.style.opacity = "0";
        }

        carousel.appendChild(prev);
        carousel.appendChild(next);
    }

    inner.appendChild(slides);
    carousel.appendChild(inner);

    const target = document.querySelector(containerSelector) || document.body;
    target.appendChild(carousel);

    // Initialize the carousel functionality
    $(carousel).carousel({
        autoplay: autoplay,
        duration: duration,
        showDots: showDots,
        showArrows: showArrows,
        stopAutoplayAtEnd: stopAutoplayAtEnd,
        arrowsOpacity: arrowsOpacity,
    });
};

/**
 * Инициализирует карусель: управление слайдами, стрелками, индикаторами и автопрокруткой.
 *
 * @method carousel
 * @memberof $
 * @param {Object} options - Настройки карусели.
 * @param {boolean} [options.autoplay=true] - Включить автопрокрутку.
 * @param {number} [options.duration=3000] - Интервал автопрокрутки.
 * @param {boolean} [options.showDots=true] - Показывать точки-индикаторы.
 * @param {boolean} [options.arrowsOpacity=true] - Прозрачность стрелок при отсутствии наведения.
 * @param {string} [options.innerClass='.carousel-inner'] - CSS-класс внутреннего контейнера.
 * @param {string} [options.itemClass='.carousel-item'] - CSS-класс слайдов.
 * @param {string} [options.slidesClass='.carousel-slides'] - CSS-класс обёртки слайдов.
 * @param {string} [options.indicatorsClass='.carousel-indicators'] - CSS-класс индикаторов.
 * @param {boolean} [options.stopAutoplayAtEnd=false] - Остановить автопрокрутку после последнего слайда.
 * @returns {void}
 */

$.prototype.carousel = function ({
    autoplay = true,
    duration = 3000,
    showDots = true,
    arrowsOpacity = true,
    innerClass = ".carousel-inner",
    itemClass = ".carousel-item",
    slidesClass = ".carousel-slides",
    indicatorsClass = ".carousel-indicators",
    stopAutoplayAtEnd = false,
} = {}) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(
            this[i].querySelector(innerClass)
        ).width;
        const slides = this[i].querySelectorAll(itemClass);
        const slidesField = this[i].querySelector(slidesClass);
        const dots = this[i].querySelectorAll(`${indicatorsClass} li`);

        slidesField.style.width = 100 * slides.length + "%"; // 3 slides = 300%
        slides.forEach((slide) => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        let finishOffset = +width.replace(/\D/g, "") * (slides.length - 1);
        let autoplayInterval;
        let reachedLastSlide;

        // Move to the next slide
        const nextSlide = () => {
            // if the last slide was been reached autoplay stops and dowsn't play again until refresh webpage
            if (
                stopAutoplayAtEnd &&
                offset === finishOffset &&
                !reachedLastSlide
            ) {
                stopAutoplay();
                reachedLastSlide = true;
            } else {
                if (offset === finishOffset) {
                    offset = 0;
                } else {
                    offset += +width.replace(/\D/g, "");
                }

                slidesField.style.transform = `translateX(-${offset}px)`;
                slideIndex = (slideIndex + 1) % slides.length; // slideIndex++ or slideIndex = 0

                updateDots();
            }
        };

        // Update dots (indicators)
        const updateDots = () => {
            if (showDots && dots.length > 0) {
                dots.forEach((dot) => dot.classList.remove("active"));
                dots[slideIndex].classList.add("active");
            }
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
            if (offset === 0) {
                offset = finishOffset;
            } else {
                offset -= +width.replace(/\D/g, ""); // add width of slide
            }

            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;

            updateDots();
        });

        // Handle dot (indicator) click
        if (showDots) {
            const sliderId = this[i].getAttribute("id");
            $(`#${sliderId} ${indicatorsClass} li`).click((e) => {
                const slideTo = e.target.getAttribute("data-slide-to");

                slideIndex = slideTo;
                offset = +width.replace(/\D/g, "") * slideTo;

                slidesField.style.transform = `translateX(-${offset}px)`;

                updateDots();
            });
        }

        // Mouseenter event to stop autoplay
        this[i].addEventListener("mouseenter", () => stopAutoplay());

        // Mouseleave event to restart autoplay
        this[i].addEventListener("mouseleave", () => {
            if (!reachedLastSlide) {
                startAutoplay();
            }
        });

        // Start autoplay when the function is first called
        if (!reachedLastSlide) {
            startAutoplay();
        }
    }
};

$(".carousel").carousel();
