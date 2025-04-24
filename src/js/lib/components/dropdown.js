"use strict";

import $ from "../core";

// Show/hide dropdown by click
$.prototype.dropdownByClick = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("id");
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

// Show/hide dropdown by mouseenter/mouseleave
$.prototype.dropdownByHover = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute("id");
        const dropdown = $(`[data-toggle-id="${id}"]`);
        const parent = this[i].closest(".dropdown"); // Parent dropdown container
        let timeout;

        // Show dropdown menu
        const showDropdown = () => {
            clearTimeout(timeout); // Cancel any pending fadeOut
            dropdown.fadeToggle(300);
        };

        // Hide dropdown menu
        const hideDropdown = (event) => {
            const related = event.relatedTarget; // Element the mouse is moving to
            // Check if the mouse is truly leaving the dropdown container
            if (!parent.contains(related)) {
                timeout = setTimeout(() => {
                    dropdown.fadeOut(300);
                }, 200); // Add a slight delay
            }
        };

        // Attach events to the parent container
        $(parent).on("mouseenter", showDropdown);
        $(parent).on("mouseleave", hideDropdown);
    }
};

$(".dropdown-toggle").dropdownByHover();
$(".dropdown-toggle").dropdownByClick();
