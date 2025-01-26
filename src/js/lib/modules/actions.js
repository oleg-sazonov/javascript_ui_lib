'use strict';

import $ from "../core";

// Changes html-content (content included) or gets html-content
$.prototype.html = function(content) {
	for (let i = 0; i < this.length; i++) {
		if (content) {
			this[i].innerHTML = content;
		} else {
			return this[i].innerHTML;
		}
	}
	return this;	
};

// Gets elem by it's index
// Example: $('div').eq(2).toggleClass('active');
$.prototype.eq = function(i) {
	const swap = this[i];
	const objLength = Object.keys(this).length;

	for (let i = 0; i < objLength; i++) {
		delete this[i];
	}

	this[0] = swap;
	this.length = 1;
	return this;	
};

// Gets an index of element inside parent-element
// Func is finalize (doesn't return obj (this))
$.prototype.index = function() {
	const parent = this[0].parentNode;
	const childs = [...parent.children]; // get an array from HTMLCollection

	const findMyIndex = (item) => {
		return item == this[0];
	};

	return childs.findIndex(findMyIndex);
};

// Gets "this"(obj with elements) and find element by it's selector
// Func returns new obj with selected elements
$.prototype.find = function(selector) {
	let numberOfItems = 0;
	let counter = 0;

	const copyObj = {...this};

	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].querySelectorAll(selector); // try to get elem by it's selector
		if (arr.length == 0) {
			continue;
		}

		for (let j = 0; j < arr.length; j++) {
			this[counter] = arr[j]; // rewrite items in this-obj
			counter++;
		}

		numberOfItems += arr.length;
	}

	this.length = numberOfItems;

	const objLength = Object.keys(this).length;

	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems]; // delete items except arr(selected-items)
	}

	return this;
};

// Gets closest parent-node
$.prototype.closest = function(selector) {
	let counter = 0;

	for (let i = 0; i < this.length; i++) {
		if (!this[i].closest(selector)) {
			console.log(`This parent Class "${selector}" is not found for used child Class`);
			continue;
		} else {
			this[i] = this[i].closest(selector);
			counter++;
		}
	}
	this.length = counter;

	return this;
};

// Gets all childs inside parent-block except current
// Example: $('.form__group').siblings()
$.prototype.siblings = function () {
    const copyObj = [...this[0].parentElement.children].filter(item => item !== this[0]);
 
    for (let i = 0; i < this.length; i++) {
        delete this[i]
    }
 
    Object.assign(this, copyObj);
    this.length = copyObj.length;
    return this;
}

// Gets all childs inside parent-block
// Example: $('.form').filterChildren('.form__group')
$.prototype.filterChildren = function(selector) {
    return this.find(selector);
};

// Appends a new element or HTML string to each element in the current collection
$.prototype.append = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (typeof content === 'string') {
            this[i].insertAdjacentHTML('beforeend', content);
        } else if (content instanceof Element) {
            this[i].appendChild(content.cloneNode(true));
        }
    }
    return this;
};

// Prepends a new element or HTML string to each element in the current collection
$.prototype.prepend = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (typeof content === 'string') {
            this[i].insertAdjacentHTML('afterbegin', content);
        } else if (content instanceof Element) {
            this[i].insertBefore(content.cloneNode(true), this[i].firstChild);
        }
    }
    return this;
};