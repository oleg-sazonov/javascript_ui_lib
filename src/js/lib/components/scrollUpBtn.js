'use strict';

import $ from '../core';

$.prototype.smoothScrollUp = function(scrollOffset = 1400, upSelector = ".scroll-arrow") {
    const upButton = document.querySelector(upSelector);

    if (!upButton) {
        console.error(`Element with selector "${upSelector}" not found.`);
        return;
    }

    let isVisible = false; // Track visibility state

    // Monitor scroll position
    const toggleVisibility = () => {
        if (window.scrollY > scrollOffset && !isVisible) {
            isVisible = true;
            $(upButton).fadeIn(400); 
        } else if (window.scrollY <= scrollOffset && isVisible) {
            isVisible = false;
            $(upButton).fadeOut(400); 
        }
    };

    // Smooth scroll to top
    const scrollToTop = () => {
        const duration = 500; // Duration of the scroll animation in ms
        const start = window.scrollY;
        const startTime = performance.now();

        const scroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeInOutQuad = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress; // Easing function

            window.scrollTo(0, start * (1 - easeInOutQuad));

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    window.addEventListener("scroll", toggleVisibility);
    upButton.addEventListener("click", scrollToTop);

    return this;
};

$.prototype.createScrollUpBtn = function () {
    const scrollUpHtml = `
        <a href="#up" class="scroll-arrow">
            <div class="svg-wrapper">
                <svg class="up" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 0H0V26H26V0ZM4.6593 17.7519L13.1233 10.33L21.5873 17.7519L22.9059 16.2481L13.7826 8.24813L13.1233 7.67L12.464 8.24813L3.3407 16.2481L4.6593 17.7519Z" fill="#025fff"/>
                </svg>
            </div>
        </a>
    `;

    for (let i = 0; i < this.length; i++) {
        this[i].insertAdjacentHTML('beforeend', scrollUpHtml);
    }

    // Return the context for chaining
    return this;
};