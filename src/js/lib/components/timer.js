'use strict';

import $ from '../core';

/**
 * Добавляет ведущий ноль к числам меньше 10.
 * @method getZero
 * @param {number} num - Число для форматирования.
 * @returns {string} Форматированное число.
 */
function getZero(num) {
    return num >= 0 && num < 10 ? `0${num}` : num;
}

/**
 * Создаёт таймер в указанном контейнере.
 * @method createTimer
 * @param {string} deadline - Дата окончания таймера (в формате 'YYYY-MM-DD').
 */
$.prototype.createTimer = function (deadline) {
    for (let i = 0; i < this.length; i++) {
        const container = this[i];
        container.innerHTML = `
            <div class="timer">
                <div class="timer__block">
                    <span id="days">00</span> days
                </div>
                <div class="timer__block">
                    <span id="hours">00</span> hours
                </div>
                <div class="timer__block">
                    <span id="minutes">00</span> minutes
                </div>
                <div class="timer__block">
                    <span id="seconds">00</span> seconds
                </div>
            </div>`;

        $(container).timer(deadline);
    }
};

/**
 * Устанавливает и обновляет таймер.
 * @method timer
 * @param {string} deadline - Дата окончания таймера.
 */
$.prototype.timer = function (deadline) {
    for (let i = 0; i < this.length; i++) {
        const container = this[i];
        function updateClock() {
            const t = Date.parse(deadline) - Date.parse(new Date());
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((t / (1000 * 60)) % 60);
            const seconds = Math.floor((t / 1000) % 60);

            container.querySelector('#days').textContent = getZero(days);
            container.querySelector('#hours').textContent = getZero(hours);
            container.querySelector('#minutes').textContent = getZero(minutes);
            container.querySelector('#seconds').textContent = getZero(seconds);

            if (t <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
        const timeInterval = setInterval(updateClock, 1000);
    }
};
