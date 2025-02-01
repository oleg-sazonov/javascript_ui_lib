'use strict';

import $ from "../core";

/**
 * @file Предоставляет методы для работы с классами DOM-элементов.
 */

/**
 * Добавляет один или несколько классов к элементу.
 * @method addClass
 * @memberof $
 * @param {...string} classNames - Один или несколько классов.
 * @returns {Object} Текущий объект.
 */
$.prototype.addClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList) {
            this[i].classList.add(...classNames);
        }
    }
    return this;
};

/**
 * Удаляет один или несколько классов у элемента.
 * @method removeClass
 * @memberof $
 * @param {...string} classNames - Один или несколько классов.
 * @returns {Object} Текущий объект.
 */
$.prototype.removeClass = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList) {
            this[i].classList.remove(...classNames);
        }
    }
    return this;
};

/**
 * Очищает все классы у элемента.
 * @method clearClasses
 * @memberof $
 * @returns {Object} Текущий объект.
 */
$.prototype.clearClasses = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList) {
            const classes = [...this[i].classList];
            this.removeClass(...classes);
        }
    }
    return this;
};

/**
 * Переключает наличие класса у элемента.
 * @method toggleClass
 * @memberof $
 * @param {string} className - Имя класса.
 * @returns {Object} Текущий объект.
 */
$.prototype.toggleClass = function (className) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList) {
            this[i].classList.toggle(className);
        }
    }
    return this;
};

/**
 * Проверяет, содержит ли элемент указанные классы.
 * @method hasClasses
 * @memberof $
 * @param {...string} classNames - Один или несколько классов.
 * @returns {boolean} `true`, если элемент содержит все классы, иначе `false`.
 */
$.prototype.hasClasses = function (...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList) {
            const hasAllClasses = classNames.every((className) => this[i].classList.contains(className));
            if (hasAllClasses) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Проверяет, содержит ли элемент указанный класс.
 * @method containsClass
 * @memberof $
 * @param {string} className - Имя класса.
 * @returns {boolean} `true`, если элемент содержит класс, иначе `false`.
 */
$.prototype.containsClass = function (className) {
    return this.hasClasses(className);
};