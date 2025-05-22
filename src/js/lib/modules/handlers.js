"use strict";

import $ from "../core";

/**
 * @file Предоставляет методы для управления обработчиками событий в DOM.
 */

/**
 * Добавляет обработчик события к элементу.
 * @param {string} eventName Имя события.
 * @param {function} callback Функция-обработчик события.
 * @returns {object} Текущий объект для цепочки вызовов.
 */
$.prototype.on = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

/**
 * Удаляет обработчик события с элемента.
 * @param {string} eventName Имя события.
 * @param {function} callback Функция-обработчик события.
 * @returns {object} Текущий объект для цепочки вызовов.
 */
$.prototype.off = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};

/**
 * Добавляет обработчик события 'click' или вызывает событие 'click' на элементе.
 * @param {function} [handler] Функция-обработчик события.
 * @returns {object} Текущий объект для цепочки вызовов.
 */
$.prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener("click", handler);
        } else {
            this[i].click();
        }
    }
    return this;
};

/**
 * Делегирует обработчик события указанному родительскому элементу.
 * @param {string} eventName Имя события.
 * @param {string} selector CSS-селектор целевого элемента.
 * @param {function} callback Функция-обработчик события.
 * @returns {object} Текущий объект для цепочки вызовов.
 */
$.prototype.delegate = function (eventName, selector, callback) {
    return this.on(eventName, function (event) {
        if (event.target && event.target.closest(selector)) {
            // or matches(selector)
            callback.call(event.target, event);
        }
    });
};

/**
 * Выполняет функцию при наведении и при уходе курсора с элемента.
 * @param {function} mouseEnter Функция, выполняемая при наведении.
 * @param {function} mouseLeave Функция, выполняемая при уходе курсора.
 * @returns {object} Текущий объект для цепочки вызовов.
 */
$.prototype.hover = function (mouseEnter, mouseLeave) {
    return this.on("mouseenter", mouseEnter).on("mouseleave", mouseLeave);
};

/**
 * Запускает обработчик события только один раз.
 * @param {string} eventName Имя события.
 * @param {function} callback Функция-обработчик события.
 * @returns {object} Текущий объект для цепочки вызовов.
 */
$.prototype.one = function (eventName, callback) {
    return this.on(eventName, function eventHandler(event) {
        callback.call(this, event);
        $(this).off(eventName, eventHandler);
    });
};
