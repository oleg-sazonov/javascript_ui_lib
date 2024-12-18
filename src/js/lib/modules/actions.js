'use strict';

import $ from "../core";

// Func change html-content (content included) or get html-content
// Func is finalize (doesn't return obj (this))
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

// Func get elem by it's index
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

// Func get an index of element inside parent-element
// Func is finalize (doesn't return obj (this))
$.prototype.index = function() {
	const parent = this[0].parentNode;
	const childs = [...parent.children]; // get an array from HTMLCollection

	const findMyIndex = (item) => {
		return item == this[0];
	};

	return childs.findIndex(findMyIndex);
};

// Func get "this"(obj with elements) and find element by it's selector
// Func returns new obj with selected elements
$.prototype.find = function(selector) {
	let numberOfItems = 0;
	let counter = 0;

	const copyObj = {...this};
	console.log(copyObj);

	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].querySelectorAll(selector); // try to get elem by it's selector
		if (arr.length == 0) {
			continue;
		}
		console.log(arr);

		for (let j = 0; j < arr.length; j++) {
			this[counter] = arr[j]; // rewrite items in this-obj
			counter++;
		}

		console.log(this);
		numberOfItems += arr.length;
	}

	this.length = numberOfItems;

	const objLength = Object.keys(this).length;
	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems]; // delete items except arr(selected-items)
	}
	console.log(this);

	return this;
};