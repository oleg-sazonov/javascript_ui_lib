'use strict';

/**
 * Кастомная функция-селектор, которая возвращает экземпляр объекта `$`.
 * @param {string|Element} selector - Строка CSS-селектора или DOM-элемент для обертывания.
 * @returns {$} Экземпляр кастомного объекта `$`.
 */
const $ = function (selector) {
    return new $.prototype.init(selector);
};

/**
 * Кастомная инициализационная функция для обработки выбора элементов DOM и их манипуляции.
 * @constructor
 * @param {string|Element} selector - Строка CSS-селектора или DOM-элемент для обертывания.
 * @returns {$} Объект `$`, содержащий выбранные элементы DOM.
 */
$.prototype.init = function (selector) {
    // Если селектор не указан, возвращаем пустой объект `$`.
    if (!selector) {
        this.length = 0;
        return this;
    }

    // Если селектор — это DOM-элемент, оборачиваем его.
    if (selector instanceof Element) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    // Если селектор — строка, выполняем запрос элементов в DOM.
    if (typeof selector === 'string') {
        const elements = document.querySelectorAll(selector);
        Object.assign(this, elements);
        this.length = elements.length;
        return this;
    }

    // Обрабатываем случаи, когда тип селектора не поддерживается.
    throw new TypeError('The selector must be a string or a DOM element.');
};

/**
 * Устанавливаем прототип для функции `init`, чтобы поддерживать цепочку вызовов методов.
 */
$.prototype.init.prototype = $.prototype;

/**
 * Экспортируем функцию `$` глобально для удобного доступа.
 * @global
 * @type {function}
 */
window.$ = $;

export default $;
