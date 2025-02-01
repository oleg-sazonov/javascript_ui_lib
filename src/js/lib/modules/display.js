'use strict';

import $ from "../core";

/**
 * @file Предоставляет методы для управления видимостью DOM-элементов.
 */

/**
 * Делает элементы видимыми, сбрасывая свойство display.
 * @method show
 * @memberof $
 * @returns {Object} Текущий объект.
 */
$.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = '';
        }
    }
    return this;
};

/**
 * Делает элементы невидимыми, устанавливая display: none.
 * @method hide
 * @memberof $
 * @returns {Object} Текущий объект.
 */
$.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = 'none';
        }
    }
    return this;
};

/**
 * Переключает видимость элементов.
 * @method toggleDisplay
 * @memberof $
 * @returns {Object} Текущий объект.
 */
$.prototype.toggleDisplay = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = (this[i].style.display === 'none') ? '' : 'none';
        }
    }
    return this;
};

/**
 * Проверяет, является ли элемент видимым.
 * @method isVisible
 * @memberof $
 * @returns {boolean} `true`, если элемент видим, иначе `false`.
 */
$.prototype.isVisible = function() {
    if (!this[0] || !this[0].style) return false;
    return this[0].style.display !== 'none';
};

/**
 * Устанавливает или получает CSS-значение display.
 * @method display
 * @memberof $
 * @param {string} [value] - Значение display (если передано).
 * @returns {Object|string} Текущий объект или текущее значение display.
 */
$.prototype.display = function(value) {
    if (value === undefined) {
        return this[0] ? this[0].style.display : undefined;
    }
    for (let i = 0; i < this.length; i++) {
        if (this[i].style) {
            this[i].style.display = value;
        }
    }
    return this;
};