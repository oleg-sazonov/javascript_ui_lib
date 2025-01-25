'use strict';

import $ from "../core";

function isValidElement(element) {
    return element && element.classList;
}

// Chaining Methods

$.prototype.addClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            this[i].classList.add(...classNames);
        }
    }
    return this;
};

$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            this[i].classList.remove(...classNames);
        }
    }
    return this;
};

$.prototype.clearClasses = function () {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            const classes = [...this[i].classList];
            this.removeClass(...classes);
        }
    }
    return this; 
};

$.prototype.toggleClass = function (className) {
    for (let i = 0; i < this.length; i++) {
        if (isValidElement(this[i])) {
            this[i].classList.toggle(className);
        }
    }
    return this;
};

// Non-Chaining Methods

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

$.prototype.containsClass = function (className) {
    return this.hasClasses(className);
};

// $.prototype.containsClass = function (className) {
// 	for (let i = 0; i < this.length; i++) {
// 		if (!this[i] || !this[i].classList) {
// 			continue;
// 		}

// 		if (this[i].classList.contains(className)) {
// 			return true;
// 		}
// 	}
// 	return false;
// };