'use strict';

import $ from "../core";

$.prototype.animateOverTime = function(duration, callback, finalize) {
	let timeStart;

	function _animateOverTime(time) {
		if (!timeStart) {
			timeStart = time;
		}

		let timeElapsed = time - timeStart;
		let complection = Math.min(timeElapsed / duration, 1);

		callback(complection);

		if (timeElapsed < duration) {
			requestAnimationFrame(_animateOverTime);
		} else {
			if (typeof finalize === 'function') {
				finalize();
			}
		}
	}

	return _animateOverTime;
}

// Fade in
$.prototype.fadeIn = function(duration, display = '', finalize) {
	for (let i = 0; i < this.length; i++) {
		this[i].style.display = display;

		const _fadeIn = (complection) => {
			this[i].style.opacity = complection;
		};

		const animation = this.animateOverTime(duration, _fadeIn, finalize);
		requestAnimationFrame(animation);
	}

	return this;
}

// Fade out
$.prototype.fadeOut = function(duration, finalize) {
	for (let i = 0; i < this.length; i++) {

		const _fadeOut = (complection) => {
			this[i].style.opacity = 1 - complection;
			if (complection === 1) {
				this[i].style.display = 'none';
			}
		};

		const animation = this.animateOverTime(duration, _fadeOut, finalize);
		requestAnimationFrame(animation);
	}

	return this;
}

// Fade in from the top
// $('button').fadeInDown(500, '-100px', () => console.log('Fade-in from up complete!'));
$.prototype.fadeInDown = function(duration, startY = '-50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = '';
        this[i].style.opacity = 0;
        this[i].style.transform = `translateY(${startY})`;

        const _fadeInDown = (complection) => {
            this[i].style.opacity = complection;
            this[i].style.transform = `translateY(${parseInt(startY) * (1 - complection)}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeInDown, finalize);
        requestAnimationFrame(animation);
    }

    return this;
};

// Fade out to the top
$.prototype.fadeOutDown = function(duration, endY = '-50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOutDown = (complection) => {
            this[i].style.opacity = 1 - complection;
            this[i].style.transform = `translateY(${parseInt(endY) * complection}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeOutDown, () => {
            this[i].style.display = 'none'; 
            if (typeof finalize === 'function') {
                finalize();
            }
        });

        requestAnimationFrame(animation);
    }

    return this;
};

// Fade in from the Bottom
$.prototype.fadeInUp = function(duration, startY = '50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = '';
        this[i].style.opacity = 0;
        this[i].style.transform = `translateY(${startY})`;

        const _fadeInUp = (complection) => {
            this[i].style.opacity = complection;
            this[i].style.transform = `translateY(${parseInt(startY) * (1 - complection)}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeInUp, finalize);
        requestAnimationFrame(animation);
    }

    return this;
};

// Fade out to the bottom
$.prototype.fadeOutUp = function(duration, endY = '50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOutUp = (complection) => {
            this[i].style.opacity = 1 - complection;
            this[i].style.transform = `translateY(${parseInt(endY) * complection}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeOutUp, () => {
            this[i].style.display = 'none'; // Hide after fade-out
            if (typeof finalize === 'function') {
                finalize();
            }
        });

        requestAnimationFrame(animation);
    }

    return this;
};

// Fade in from the left
$.prototype.fadeInLeft = function(duration, startX = '-50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = '';
        this[i].style.opacity = 0;
        this[i].style.transform = `translateX(${startX})`;

        const _fadeInLeft = (complection) => {
            this[i].style.opacity = complection;
            this[i].style.transform = `translateX(${parseInt(startX) * (1 - complection)}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeInLeft, finalize);
        requestAnimationFrame(animation);
    }

    return this;
};

// Fade out to the left
$.prototype.fadeOutLeft = function(duration, endX = '-50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOutLeft = (complection) => {
            this[i].style.opacity = 1 - complection;
            this[i].style.transform = `translateX(${parseInt(endX) * complection}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeOutLeft, () => {
            this[i].style.display = 'none'; 
            if (typeof finalize === 'function') {
                finalize();
            }
        });

        requestAnimationFrame(animation);
    }

    return this;
};

// Fade in from the right
$.prototype.fadeInRight = function(duration, startX = '50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = '';
        this[i].style.opacity = 0;
        this[i].style.transform = `translateX(${startX})`;

        const _fadeInRight = (complection) => {
            this[i].style.opacity = complection;
            this[i].style.transform = `translateX(${parseInt(startX) * (1 - complection)}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeInRight, finalize);
        requestAnimationFrame(animation);
    }

    return this;
};

// Fade out to the right
$.prototype.fadeOutRight = function(duration, endX = '50px', finalize) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOutRight = (complection) => {
            this[i].style.opacity = 1 - complection;
            this[i].style.transform = `translateX(${parseInt(endX) * complection}px)`;
        };

        const animation = this.animateOverTime(duration, _fadeOutRight, () => {
            this[i].style.display = 'none'; // Hide after fade-out
            if (typeof finalize === 'function') {
                finalize();
            }
        });

        requestAnimationFrame(animation);
    }

    return this;
};