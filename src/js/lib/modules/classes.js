'use strict';

import $ from "../core";

/**
 * Checks if the provided element is a valid DOM element with classList support.
 * @param {Element} element - The DOM element to check.
 * @returns {boolean} `true` if the element has a classList property, `false` otherwise.
 */
function isValidElement(element) {
    return element && element.classList;
}

/**
 * Adds one or more class names to each selected element.
 * @param {...string} classNames - One or more class names to add to the selected elements.
 * @returns {Object} The `$` object for chaining.
 */
$.prototype.addClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            this[i].classList.add(...classNames);
        }
    }
    return this;
};

/**
 * Removes one or more class names from each selected element.
 * @param {...string} classNames - One or more class names to remove from the selected elements.
 * @returns {Object} The `$` object for chaining.
 */
$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            this[i].classList.remove(...classNames);
        }
    }
    return this;
};

/**
 * Clears all class names from each selected element.
 * @returns {Object} The `$` object for chaining.
 */
$.prototype.clearClasses = function () {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            const classes = [...this[i].classList];
            this.removeClass(...classes);
        }
    }
    return this;
};

/**
 * Toggles the presence of a class name on each selected element.
 * @param {string} className - The class name to toggle.
 * @returns {Object} The `$` object for chaining.
 */
$.prototype.toggleClass = function (className) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            this[i].classList.toggle(className);
        }
    }
    return this;
};

/**
 * Checks if all specified class names are present on each selected element.
 * @param {...string} classNames - The class names to check for.
 * @returns {boolean} `true` if all specified class names are present, `false` otherwise.
 */
$.prototype.hasClasses = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            // Check if the element contains all the given class names
            const hasAllClasses = classNames.every((className) => this[i].classList.contains(className));
            if (hasAllClasses) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Checks if the selected element contains the specified class name.
 * @param {string} className - The class name to check for.
 * @returns {boolean} `true` if the class name is present, `false` otherwise.
 */
$.prototype.containsClass = function (className) {
    return this.hasClasses(className);
};