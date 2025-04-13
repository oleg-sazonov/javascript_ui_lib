"use strict";

import $ from "../core";

$.prototype.toggleTheme = function () {
    // 1. Get root element
    const root = document.documentElement;

    // 2. Theme initialization
    const initTheme = () => {
        const savedMode = localStorage.getItem("darkMode");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Priority: saved preference > system preference
        const initialMode =
            savedMode !== null ? savedMode === "true" : systemPrefersDark;

        root.classList.toggle("dark-theme", initialMode);
        return initialMode;
    };

    // 3. Set initial state
    let isDark = initTheme();
    console.log("Initial theme:", isDark ? "Dark" : "Light");

    // 4. Attach toggle handler
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener("click", () => {
            isDark = !isDark;
            root.classList.toggle("dark-theme", isDark);
            localStorage.setItem("darkMode", isDark);
            console.log("Theme toggled. Dark mode:", isDark);

            // Optional: Update button text/icon
            this[i].textContent = isDark ? "🌙" : "☀️";
        });

        // Set initial button state
        this[i].textContent = isDark ? "🌙" : "☀️";
    }

    return this;
};

// 5. Initialize when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    $(".theme-toggle").toggleTheme();
});

// Right now theme-toggler btn creates inside themeToggler.js.
// All what needs to add it - add  in html:
// <button class="theme-toggle"></button>

// If I need to call $(".another-class").toggleTheme(); on another class I need to remember that this[i].textContent = isDark ? "🌙" : "☀️";

// If I call toggleTheme() on some elements, this[i].textContent = isDark ? "🌙" : "☀️" changes just on target-element
// Tasks:
// 1) Add dynamic creation theme-toggler btn with params like position, width, height, container EventCounts.
