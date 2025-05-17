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
        if (!container) continue;

        // if (!container) {
        //     console.error(
        //         `Selector "${containerSelector}" not found in the DOM.`
        //     );
        //     return;
        // }

        const carouselId = `carousel-${Date.now()}-${i}`;

        // Check images
        if (!settings.images.length) {
            console.error("No images provided for carousel");
            continue;
        }

        // Create carousel structure
        const carousel = document.createElement("div");
        carousel.classList.add("carousel", "carousel-pending");
        carousel.setAttribute("id", carouselId);
        carousel.style.width = settings.width;

        // Create indicators if showDots is true
        if (settings.showDots) {
            const indicators = document.createElement("ol");
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

        settings.images.forEach((image, index) => {
            const item = document.createElement("div");
            item.classList.add("carousel-item");
            if (index === 0) item.classList.add("active");

            const img = document.createElement("img");
            img.setAttribute("src", image.src);
            img.setAttribute("alt", image.alt || "picture");
            img.setAttribute("loading", "lazy");

            item.appendChild(img);
            slides.appendChild(item);
        });

        // Navigation arrows if showArrows is true
        if (settings.showArrows) {
            const prev = document.createElement("a");
            prev.classList.add("carousel-prev");
            prev.setAttribute("href", "#");
            prev.setAttribute("data-slide", "prev");
            prev.innerHTML = `<span class="carousel-prev-icon">${settings.prevArrow}</span>`;

            const next = document.createElement("a");
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

        // Store settings in dataset
        carousel.dataset.carouselOptions = JSON.stringify({
            autoplay: settings.autoplay,
            duration: settings.duration,
            showDots: settings.showDots,
            showArrows: settings.showArrows,
            arrowsOpacity: settings.arrowsOpacity,
            stopAutoplayAtEnd: settings.stopAutoplayAtEnd,
        });

        // Check if it is visible and initialize it if it is already visible
        if (carousel.offsetParent !== null) {
            $(carousel).carousel();
        }
    }

    return this;
};

$.prototype.carousel = function (options = {}) {
    for (let i = 0; i < this.length; i++) {
        const carousel = this[i];
        if (!document.body.contains(carousel)) continue;

        // Skip if already initialized
        if (carousel.dataset.carouselInitialized === "true") continue;

        // Parse options with error handling
        const datasetOptions = (() => {
            try {
                return carousel.dataset.carouselOptions
                    ? JSON.parse(carousel.dataset.carouselOptions)
                    : {};
            } catch (e) {
                console.error("Error parsing carousel options:", e);
                return {};
            }
        })();

        const settings = {
            autoplay: true,
            duration: 3000,
            showDots: true,
            showArrows: true,
            arrowsOpacity: true,
            stopAutoplayAtEnd: false,
            ...datasetOptions,
            ...options,
        };

        // Basic logic of carousel initialization
        const inner = carousel.querySelector(".carousel-inner");
        if (!inner) continue;

        const width = inner.offsetWidth;
        const slides = carousel.querySelectorAll(".carousel-item");
        const slidesField = carousel.querySelector(".carousel-slides");
        const dots = carousel.querySelectorAll(".carousel-indicators li");
        const prevBtn = carousel.querySelector(".carousel-prev");
        const nextBtn = carousel.querySelector(".carousel-next");

        // Set up sizes
        slidesField.style.width = `${100 * slides.length}%`; // 3 slides = 300%
        slides.forEach((slide) => {
            slide.style.width = `${width}px`;
        });

        let offset = 0;
        let slideIndex = 0;
        const finishOffset = width * (slides.length - 1);
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
            if (settings.autoplay && !autoplayInterval) {
                autoplayInterval = setInterval(nextSlide, settings.duration);
            }
            carousel._autoplayInterval = autoplayInterval;
        };

        // const startAutoplay = () => {
        //     if (settings.autoplay && !autoplayInterval) {
        //         autoplayInterval = setInterval(() => {
        //             if (carousel.offsetParent !== null) {
        //                 nextSlide();
        //             } else {
        //                 stopAutoplay();
        //             }
        //         }, settings.duration);
        //         carousel._autoplayInterval = autoplayInterval;
        //     }
        // };

        // Stop autoplay
        const stopAutoplay = () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        };

        // Event handlers with reference storage for cleanup
        const handleNextClick = (e) => {
            e.preventDefault();
            nextSlide();
        };

        const handlePrevClick = (e) => {
            e.preventDefault();
            prevSlide();
        };

        if (nextBtn) {
            nextBtn.addEventListener("click", handleNextClick);
            carousel._handleNextClick = handleNextClick;
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", handlePrevClick);
            carousel._handlePrevClick = handlePrevClick;
        }

        if (settings.showDots && dots.length) {
            dots.forEach((dot) => {
                const handleDotClick = (e) => {
                    const slideTo = +e.target.getAttribute("data-slide-to");
                    slideIndex = slideTo;
                    offset = width * slideTo;
                    slidesField.style.transform = `translateX(-${offset}px)`;
                    updateDots();
                    if (settings.stopAutoplayAtEnd) {
                        reachedLastSlide = false;
                        startAutoplay();
                    }
                };
                dot.addEventListener("click", handleDotClick);
                dot._handleDotClick = handleDotClick;
            });
        }

        // Mouse events with reference storage
        carousel._stopAutoplay = () => stopAutoplay();
        carousel._startAutoplay = () => {
            if (!reachedLastSlide) startAutoplay();
        };

        carousel.addEventListener("mouseenter", carousel._stopAutoplay);
        carousel.addEventListener("mouseleave", carousel._startAutoplay);

        // Mark as initialized
        carousel.dataset.carouselInitialized = "true";
        carousel.classList.remove("carousel-pending");

        // Start autoplay
        if (!reachedLastSlide) {
            startAutoplay();
        }
    }

    return this;
};

$.prototype.destroyCarousel = function () {
    this.each((carousel) => {
        if (carousel.dataset.carouselInitialized === "true") {
            // Clear autoplay
            if (carousel._autoplayInterval) {
                clearInterval(carousel._autoplayInterval);
            }

            // Remove event listeners
            const prevBtn = carousel.querySelector(".carousel-prev");
            const nextBtn = carousel.querySelector(".carousel-next");
            const dots = carousel.querySelectorAll(".carousel-indicators li");

            if (prevBtn && carousel._handlePrevClick) {
                prevBtn.removeEventListener("click", carousel._handlePrevClick);
            }

            if (nextBtn && carousel._handleNextClick) {
                nextBtn.removeEventListener("click", carousel._handleNextClick);
            }

            dots.forEach((dot) => {
                if (dot._handleDotClick) {
                    dot.removeEventListener("click", dot._handleDotClick);
                }
            });

            carousel.removeEventListener("mouseenter", carousel._stopAutoplay);
            carousel.removeEventListener("mouseleave", carousel._startAutoplay);

            // Clean up references
            delete carousel.dataset.carouselInitialized;
            delete carousel._autoplayInterval;
            delete carousel._handlePrevClick;
            delete carousel._handleNextClick;
            delete carousel._stopAutoplay;
            delete carousel._startAutoplay;
        }
    });
    return this;
};

// Initialize on DOM ready
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        // Initialize visible carousels
        document
            .querySelectorAll(".carousel:not(.carousel-pending)")
            .forEach((el) => {
                if (el.offsetParent !== null) {
                    $(el).carousel();
                }
            });

        // MutationObserver for dynamically added carousels
        const carouselObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        const carousels = node.classList.contains("carousel")
                            ? [node]
                            : node.querySelectorAll(".carousel-pending");

                        for (const carousel of carousels) {
                            if (carousel.offsetParent !== null) {
                                $(carousel).carousel();
                            }
                        }
                    }
                }
            }
        });

        carouselObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributeFilter: ["style", "class"],
        });
    });
}
