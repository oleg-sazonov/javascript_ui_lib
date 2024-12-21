'use strict';

import $ from "../core";

// Core animation method
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

// Generic animation method
$.prototype.animateFade = function(duration, type, direction, offset = '50px', finalize) {
    const transforms = {
        up: `translateY(-${offset})`,
        down: `translateY(${offset})`,
        left: `translateX(-${offset})`,
        right: `translateX(${offset})`,
        none: '',
    };

    for (let i = 0; i < this.length; i++) {
        if (type === 'fadeIn') {
            this[i].style.display = '';
            this[i].style.opacity = 0;
            if (direction !== 'none') {
                this[i].style.transform = transforms[direction];
            }
        }

        const animationCallback = (completion) => {
            if (type === 'fadeIn') {
                this[i].style.opacity = completion;
                if (direction !== 'none') {
                    this[i].style.transform = transforms[direction].replace(
                        offset,
                        `${parseInt(offset) * (1 - completion)}px`
                    );
                }
            } else if (type === 'fadeOut') {
                this[i].style.opacity = 1 - completion;
                if (direction !== 'none') {
                    this[i].style.transform = transforms[direction].replace(
                        offset,
                        `${parseInt(offset) * completion}px`
                    );
                }
            }
        };

        const animation = this.animateOverTime(duration, animationCallback, () => {
            if (type === 'fadeOut') {
                this[i].style.display = 'none'; 
            }
            if (typeof finalize === 'function') {
                finalize();
            }
        });

        requestAnimationFrame(animation);
    }

    return this;
};

// Wrapper methods
$.prototype.fadeIn = function(duration, finalize) {
    return this.animateFade(duration, 'fadeIn', 'none', '0px', finalize);
};

$.prototype.fadeOut = function(duration, finalize) {
    return this.animateFade(duration, 'fadeOut', 'none', '0px', finalize);
};

$.prototype.fadeInDown = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeIn', 'up', offset, finalize);
};

$.prototype.fadeOutDown = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeOut', 'up', offset, finalize);
};

$.prototype.fadeInUp = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeIn', 'down', offset, finalize);
};

$.prototype.fadeOutUp = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeOut', 'down', offset, finalize);
};

$.prototype.fadeInRight = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeIn', 'right', offset, finalize);
};

$.prototype.fadeOutRight = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeOut', 'right', offset, finalize);
};

$.prototype.fadeInLeft = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeIn', 'left', offset, finalize);
};

$.prototype.fadeOutLeft = function(duration, offset, finalize) {
    return this.animateFade(duration, 'fadeOut', 'left', offset, finalize);
};