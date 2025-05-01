"use strict";

import $ from "../core";

$.prototype.createCarousel = function (options = {}) {
    const defaults = {
        images: [],
        autoplay: true,
        duration: 3000,
        prevArrow: `
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M15 6l-6 6 6 6"></path>
			</svg>
		`,
        nextArrow: `
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M9 18l6-6-6-6"></path>
			</svg>
		`,
        showDots: true,
        showArrows: true,
        arrowsOpacity: true,
        stopAutoplayAtEnd: false,
        width: "900px",
        height: "500px",
    };

    const settings = { ...defaults, ...options };

    for (let i = 0; i < this.length; i++) {
        const container = this[i];
        const carouselId = `carousel-${Date.now()}-${i}`;

        // Проверка изображений
        if (!settings.images.length) {
            console.error("No images provided for carousel");
            continue;
        }

        if (!container) {
            console.error(
                `Selector "${containerSelector}" not found in the DOM.`
            );
            return;
        }

        // Create carousel structure
        const carousel = document.createElement("div");
        carousel.classList.add("carousel");
        carousel.setAttribute("id", carouselId);
        carousel.style.width = settings.width;

        // Create indicators if showDots is true
        let indicators;
        if (settings.showDots) {
            indicators = document.createElement("ol");
            indicators.classList.add("carousel-indicators");
            settings.images.forEach((_, index) => {
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
        inner.style.height = settings.height;

        // Slides
        const slides = document.createElement("div");
        slides.classList.add("carousel-slides");
        settings.images.forEach((src, index) => {
            const item = document.createElement("div");
            item.classList.add("carousel-item");
            if (index === 0) item.classList.add("active");
            const img = document.createElement("img");
            img.setAttribute("src", src);
            item.appendChild(img);
            slides.appendChild(item);
        });

        // Navigation arrows if showArrows is true
        let prev;
        let next;
        if (settings.showArrows) {
            prev = document.createElement("a");
            prev.classList.add("carousel-prev");
            prev.setAttribute("href", "#");
            prev.setAttribute("data-slide", "prev");
            prev.innerHTML = `<span class="carousel-prev-icon">${settings.prevArrow}</span>`;

            next = document.createElement("a");
            next.classList.add("carousel-next");
            next.setAttribute("href", "#");
            next.setAttribute("data-slide", "next");
            next.innerHTML = `<span class="carousel-next-icon">${settings.nextArrow}</span>`;

            if (!settings.arrowsOpacity) {
                prev.style.opacity = "0";
                next.style.opacity = "0";
            }

            carousel.appendChild(prev);
            carousel.appendChild(next);
        }

        inner.appendChild(slides);
        carousel.appendChild(inner);
        container.appendChild(carousel);

        // Initialize the carousel functionality
        $(`#${carouselId}`).carousel({
            autoplay: settings.autoplay,
            duration: settings.duration,
            showDots: settings.showDots,
            showArrows: settings.showArrows,
            arrowsOpacity: settings.arrowsOpacity,
            stopAutoplayAtEnd: settings.stopAutoplayAtEnd,
        });
    }

    return this;
};

$.prototype.carousel = function (options = {}) {
    const settings = {
        autoplay: true,
        duration: 3000,
        showDots: true,
        showArrows: true,
        arrowsOpacity: true,
        stopAutoplayAtEnd: false,
        ...options,
    };

    for (let i = 0; i < this.length; i++) {
        const carousel = this[i];
        const inner = carousel.querySelector(".carousel-inner");
        const width = inner.offsetWidth;
        const slides = carousel.querySelectorAll(".carousel-item");
        const slidesField = carousel.querySelector(".carousel-slides");
        const dots = carousel.querySelectorAll(".carousel-indicators li");
        const prevBtn = carousel.querySelector(".carousel-prev");
        const nextBtn = carousel.querySelector(".carousel-next");

        // Set up sizes
        slidesField.style.width = 100 * slides.length + "%"; // 3 slides = 300%
        slides.forEach((slide) => {
            slide.style.width = width + "px";
        });

        let offset = 0;
        let slideIndex = 0;
        let finishOffset = width * (slides.length - 1);
        let autoplayInterval;
        let reachedLastSlide = false;

        // Move to the next slide
        const nextSlide = () => {
            if (
                settings.stopAutoplayAtEnd &&
                offset === finishOffset &&
                !reachedLastSlide
            ) {
                stopAutoplay();
                reachedLastSlide = true;
                return;
            }

            offset = offset === finishOffset ? 0 : offset + width;
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex = (slideIndex + 1) % slides.length;
            updateDots();
        };

        const prevSlide = () => {
            offset = offset === 0 ? finishOffset : offset - width;
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
            updateDots();
        };

        // Update dots (indicators)
        const updateDots = () => {
            if (settings.showDots && dots.length > 0) {
                dots.forEach((dot) => dot.classList.remove("active"));
                dots[slideIndex].classList.add("active");
            }
        };

        // Start autoplay if enabled
        const startAutoplay = () => {
            if (settings.autoplay) {
                autoplayInterval = setInterval(nextSlide, settings.duration);
            }
        };

        // Stop autoplay
        const stopAutoplay = () => {
            if (settings.autoplay) {
                clearInterval(autoplayInterval);
            }
        };

        if (nextBtn) {
            $(nextBtn).click((e) => {
                e.preventDefault();
                nextSlide();
            });
        }

        if (prevBtn) {
            $(prevBtn).click((e) => {
                e.preventDefault();
                prevSlide();
            });
        }

        if (settings.showDots && dots.length) {
            dots.forEach((dot) => {
                $(dot).click((e) => {
                    const slideTo = +e.target.getAttribute("data-slide-to");
                    slideIndex = slideTo;
                    offset = width * slideTo;
                    slidesField.style.transform = `translateX(-${offset}px)`;
                    updateDots();
                    if (settings.stopAutoplayAtEnd) {
                        reachedLastSlide = false;
                        startAutoplay();
                    }
                });
            });
        }

        // Arrow visibility control
        // if (settings.arrowsOpacity && settings.showArrows) {
        //     carousel.addEventListener("mouseenter", () => {
        //         if (prevBtn) prevBtn.style.opacity = "1";
        //         if (nextBtn) nextBtn.style.opacity = "1";
        //     });

        //     carousel.addEventListener("mouseleave", () => {
        //         if (prevBtn) prevBtn.style.opacity = "0";
        //         if (nextBtn) nextBtn.style.opacity = "0";
        //     });
        // }

        // Mouseenter event to stop autoplay
        carousel.addEventListener("mouseenter", () => stopAutoplay());

        // Mouseleave event to restart autoplay
        carousel.addEventListener("mouseleave", () => {
            if (!reachedLastSlide) {
                startAutoplay();
            }
        });

        // Start autoplay when the function is first called
        if (!reachedLastSlide) {
            startAutoplay();
        }
    }

    return this;
};

$(".carousel").carousel();
