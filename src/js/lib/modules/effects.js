'use strict';

import $ from "../core";

/**
 * @file Предоставляет методы анимации для элементов DOM.
 */

/**
 * Основной метод анимации.
 * @method animateOverTime
 * @memberof $
 * @param {number} duration - Длительность анимации в миллисекундах.
 * @param {Function} callback - Функция, вызываемая во время анимации.
 * @param {Function} [finalize] - Функция, вызываемая после завершения анимации.
 * @returns {Function} Функция анимации.
 */
$.prototype.animateOverTime = function(duration, callback, finalize) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let completion = Math.min(timeElapsed / duration, 1);

        callback(completion);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof finalize === 'function') {
                finalize();
            }
        }
    }

    return _animateOverTime;
};

/**
 * Универсальный метод анимации затемнения и появления.
 * @method animateFade
 * @memberof $
 * @param {number} duration - Длительность анимации.
 * @param {string} type - Тип анимации ('fadeIn' или 'fadeOut').
 * @param {string} direction - Направление анимации ('up', 'down', 'left', 'right', 'none').
 * @param {string} [offset='0px'] - Смещение для анимации.
 * @param {Function} [finalize] - Функция, вызываемая после завершения анимации.
 * @returns {Object} Текущий объект.
 */
$.prototype.animateFade = function(duration, type, direction, offset = '0px', finalize) {
    const transforms = {
        up: `translateY(-${offset})`,
        down: `translateY(${offset})`,
        left: `translateX(-${offset})`,
        right: `translateX(${offset})`,
        none: '',
    };

    for (let i = 0; i < this.length; i++) {
        if (type === 'fadeIn') {
            if (window.getComputedStyle(this[i]).display === 'none') {
                this[i].style.display = '';
            }
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

/**
 * Переключает видимость элемента с эффектом затухания.
 * @param {number} duration Продолжительность анимации.
 * @param {string} [display='block'] Значение display после появления.
 * @param {function} [finalize] Функция, вызываемая после завершения анимации.
 */
$.prototype.fadeIn = function(duration, display = 'block', finalize) {
    return this.animateFade(duration, 'fadeIn', 'none', '0px', finalize);
};

$.prototype.fadeOut = function(duration, finalize) {
    return this.animateFade(duration, 'fadeOut', 'none', '0px', finalize);
};

$.prototype.fadeInTop = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, 'fadeIn', 'up', offset, finalize);
};

$.prototype.fadeOutTop = function(duration, offset = '50px', finalize) {
    return this.animateFade(duration, 'fadeOut', 'up', offset, finalize);
};

$.prototype.fadeInBottom = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, 'fadeIn', 'down', offset, finalize);
};

$.prototype.fadeOutBottom = function(duration, offset = '50px', finalize) {
    return this.animateFade(duration, 'fadeOut', 'down', offset, finalize);
};

$.prototype.fadeInRight = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, 'fadeIn', 'right', offset, finalize);
};

$.prototype.fadeOutRight = function(duration, offset = '50px', finalize) {
    return this.animateFade(duration, 'fadeOut', 'right', offset, finalize);
};

$.prototype.fadeInLeft = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, 'fadeIn', 'left', offset, finalize);
};

$.prototype.fadeOutLeft = function(duration, offset = '50px', finalize) {
    return this.animateFade(duration, 'fadeOut', 'left', offset, finalize);
};

$.prototype.fadeToggle = function(duration, display = 'block', finalize) {
    return this.animateFade(duration, window.getComputedStyle(this[0]).display === 'none' ? 'fadeIn' : 'fadeOut', 'none', '0px', finalize);
};

$.prototype.fadeToggleTop = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, window.getComputedStyle(this[0]).display === 'none' ? 'fadeIn' : 'fadeOut', 'up', offset, finalize);
};

$.prototype.fadeToggleBottom = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, window.getComputedStyle(this[0]).display === 'none' ? 'fadeIn' : 'fadeOut', 'down', offset, finalize);
};

$.prototype.fadeToggleLeft = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, window.getComputedStyle(this[0]).display === 'none' ? 'fadeIn' : 'fadeOut', 'left', offset, finalize);
};

$.prototype.fadeToggleRight = function(duration, offset = '50px', display = 'block', finalize) {
    return this.animateFade(duration, window.getComputedStyle(this[0]).display === 'none' ? 'fadeIn' : 'fadeOut', 'right', offset, finalize);
};