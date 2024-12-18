'use strict';

import $ from "../core";

// Func add attribute
$.prototype.addAttr = function(attrName, attrValue = '') {
	for (let i = 0; i < this.length; i++) {
		if (this[i].classList && attrName) {
			this[i].setAttribute(attrName, attrValue);
		} else {
			return this;
		}
	}
	return this;
};

// Func remove attribute
$.prototype.removeAttr = function(attrName, attrValue = '') {
	for (let i = 0; i < this.length; i++) {
		if (this[i].classList && attrName) {
			this[i].removeAttribute(attrName, attrValue);
		} else {
			return this;
		}
	}
	return this;
};

// Func get attribute value by it's name
$.prototype.getAttrValue = function(attrName) {
	let attributes = [];
	for (let i = 0; i < this.length; i++) {
		if (this[i].classList && attrName) {
			attributes.push(this[i].getAttribute(attrName)); 
		} else {
			return this;
		}
	}
    return attributes;
};