'use strict';

import $ from "../core";

/**
 * @file Предоставляет набор методов для работы с DOM, включая изменение содержимого, навигацию по элементам и управление дочерними элементами.
 */

/**
 * Изменяет или получает HTML-содержимое элементов.
 * @method html
 * @memberof $
 * @param {string} [content] - Содержимое для установки.
 * @returns {Object|string} Текущий объект или HTML-содержимое первого элемента.
 */
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

/**
 * Получает элемент по его индексу.
 * @method eq
 * @memberof $
 * @param {number} i - Индекс элемента.
 * @returns {Object} Объект с выбранным элементом.
 */
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

/**
 * Определяет индекс элемента внутри родителя.
 * @method index
 * @memberof $
 * @returns {number} Индекс элемента.
 */
$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children]; // Преобразуем HTMLCollection в массив

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

/**
 * Ищет элементы по указанному селектору внутри текущей коллекции.
 * @method find
 * @memberof $
 * @param {string} selector - CSS-селектор для поиска.
 * @returns {Object} Объект с найденными элементами.
 */
$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = {...this};

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector); // Ищем элементы по селектору
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j]; // Переписываем элементы в текущий объект
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;

    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems]; // Удаляем ненужные элементы
    }

    return this;
};

/**
 * Находит ближайшего родителя по селектору.
 * @method closest
 * @memberof $
 * @param {string} selector - CSS-селектор родительского элемента.
 * @returns {Object} Объект с ближайшим родителем.
 */
$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (!this[i].closest(selector)) {
            console.log(`Родительский класс "${selector}" не найден для данного элемента.`);
            continue;
        } else {
            this[i] = this[i].closest(selector);
            counter++;
        }
    }
    this.length = counter;

    return this;
};

/**
 * Получает все элементы внутри родителя, кроме текущего.
 * @method siblings
 * @memberof $
 * @returns {Object} Объект с соседними элементами.
 */
$.prototype.siblings = function () {
    const copyObj = [...this[0].parentElement.children].filter(item => item !== this[0]);
 
    for (let i = 0; i < this.length; i++) {
        delete this[i]
    }
 
    Object.assign(this, copyObj);
    this.length = copyObj.length;
    return this;
}

/**
 * Фильтрует дочерние элементы внутри родителя по селектору.
 * @method filterChildren
 * @memberof $
 * @param {string} selector - CSS-селектор для фильтрации дочерних элементов.
 * @returns {Object} Объект с отфильтрованными элементами.
 */
$.prototype.filterChildren = function(selector) {
    return this.find(selector);
};

/**
 * Добавляет новый элемент или HTML-строку к каждому элементу в коллекции.
 * @method append
 * @memberof $
 * @param {string|Element} content - HTML-строка или DOM-элемент для добавления.
 * @returns {Object} Текущий объект.
 */
$.prototype.append = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (typeof content === 'string') {
            this[i].insertAdjacentHTML('beforeend', content);
        } else if (content instanceof Element) {
            this[i].appendChild(content.cloneNode(true));
        }
    }
    return this;
};

/**
 * Добавляет новый элемент или HTML-строку в начало каждого элемента в коллекции.
 * @method prepend
 * @memberof $
 * @param {string|Element} content - HTML-строка или DOM-элемент для добавления.
 * @returns {Object} Текущий объект.
 */
$.prototype.prepend = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (typeof content === 'string') {
            this[i].insertAdjacentHTML('afterbegin', content);
        } else if (content instanceof Element) {
            this[i].insertBefore(content.cloneNode(true), this[i].firstChild);
        }
    }
    return this;
};