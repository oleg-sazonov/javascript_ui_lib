"use strict";

import $ from "../core";

/**
 * @file Предоставляет компонент аккордеона для скрытия и отображения контента по клику.
 * Инициализируется автоматически при наличии элементов с классом `.accordion-head`.
 */

/**
 * Инициализирует функциональность аккордеона для выбранных элементов.
 * При клике переключает активные классы заголовка и содержимого,
 * а также управляет высотой блока `.accordion-content`.
 *
 * @method accordion
 * @memberof $
 * @param {string} [headActive='accordion-head_active'] - Класс, применяемый к активному заголовку.
 * @param {string} [contentActive='accordion-content_active'] - Класс, применяемый к активному блоку с контентом.
 * @param {number} [paddings=20] - Дополнительный отступ, прибавляемый к высоте контента (в пикселях).
 * @returns {Object} Текущий объект для цепочки вызовов.
 *
 * @example
 * $('.accordion-head').accordion(); // Инициализация с классами по умолчанию
 * $('.accordion-head').accordion('open', 'visible', 30); // Кастомные классы и отступ
 */
$.prototype.accordion = function (
    headActive = "accordion-head_active",
    contentActive = "accordion-content_active",
    paddings = 40
) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight =
                    this[i].nextElementSibling.scrollHeight + paddings + "px";
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
        });
    }

    return this;
};

/**
 * Автоинициализация аккордеона.
 * Если на странице присутствуют элементы с классом `.accordion-head`,
 * автоматически вызывается метод `accordion()`.
 */
$(".accordion-head").accordion();
