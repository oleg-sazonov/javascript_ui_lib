"use strict";

import $ from "../core";

/**
 * @file Предоставляет методы для работы с атрибутами DOM-элементов.
 */

/**
 * Добавляет атрибут к элементу.
 * @method addAttr
 * @memberof $
 * @param {string} attrName - Имя атрибута.
 * @param {string} [attrValue=''] - Значение атрибута.
 * @returns {Object} Текущий объект.
 */
$.prototype.addAttr = function (attrName, attrValue = "") {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList && attrName) {
            this[i].setAttribute(attrName, attrValue);
        }
    }
    return this;
};

/**
 * Удаляет атрибут у элемента.
 * @method removeAttr
 * @memberof $
 * @param {string} attrName - Имя атрибута.
 * @returns {Object} Текущий объект.
 */
$.prototype.removeAttr = function (attrName) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList && attrName) {
            this[i].removeAttribute(attrName);
        }
    }
    return this;
};

/**
 * Получает значение атрибута элемента.
 * @method getAttrValue
 * @memberof $
 * @param {string} attrName - Имя атрибута.
 * @returns {Array<string|null>} Массив значений атрибута.
 */
$.prototype.getAttrValue = function (attrName) {
    let attributes = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList && attrName) {
            attributes.push(this[i].getAttribute(attrName));
        }
    }
    return attributes;
};

/**
 * Проверяет, содержит ли элемент указанный атрибут.
 * @method hasAttr
 * @memberof $
 * @param {string} attrName - Имя атрибута.
 * @returns {boolean} `true`, если атрибут существует, иначе `false`.
 */
$.prototype.hasAttr = function (attrName) {
    if (!this[0]) return false;
    return this[0].hasAttribute(attrName);
};

/**
 * Переключает атрибут на элементе.
 * Если атрибут отсутствует, добавляет его с указанным значением.
 * Если атрибут уже есть, удаляет его.
 * @method toggleAttr
 * @memberof $
 * @param {string} attrName - Имя атрибута.
 * @param {string} [attrValue=''] - Значение атрибута (если добавляется).
 * @returns {Object} Текущий объект.
 */
$.prototype.toggleAttr = function (attrName, attrValue = "") {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attrName)) {
            this[i].removeAttribute(attrName);
        } else {
            this[i].setAttribute(attrName, attrValue);
        }
    }
    return this;
};
