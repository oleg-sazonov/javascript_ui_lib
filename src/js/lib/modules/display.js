'use strict';

import $ from "../core";

// Func become element visible
$.prototype.show = function() {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].style) {
			continue;
		}
		this[i].style.display = '';
	}

	return this;
};

// Func become element invisible
$.prototype.hide = function() {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].style) {
			continue;
		}
		this[i].style.display = 'none';
	}

	return this;
};

// Func become element visible/invisible
$.prototype.toggleDisplay = function() {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].style) {
			continue;
		}

		if (this[i].style.display === 'none') {
			this[i].style.display = '';
		} else {
			this[i].style.display = 'none';
		}
	}

	return this;
};