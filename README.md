# UI JS Lib

**UI JS Lib** — это лёгкая и удобная UI-библиотека на JavaScript, созданная для простого взаимодействия с DOM и управления элементами интерфейса.

## Возможности
- Упрощённая работа с атрибутами, классами и событиями
- Анимации и эффекты отображения
- Гибкое управление отображением элементов
- Встроенные UI-компоненты: модальные окна, аккордеоны, карусели, табы и др.
- Поддержка AJAX-запросов

## Установка и запуск

### Установка зависимостей
Перед началом работы установите зависимости с помощью npm:

```sh
npm install
```

### Запуск проекта
Проект использует Gulp для сборки и разработки. Запустить проект можно командой:

```sh
gulp
```

### Сборка проекта
Для сборки в режиме разработки используйте:

```sh
gulp build
```

Для продакшн-сборки (минификация CSS и JS):

```sh
gulp prod
```

## Структура проекта

```
Library
├─ gulpfile.js
├─ jsdoc.json
├─ package-lock.json
├─ package.json
└─ src
   ├─ assets
   │  └─ img
   ├─ css
   ├─ index.html
   ├─ js
   │  ├─ lib
   │  │  ├─ components
   │  │  ├─ modules
   │  │  ├─ services
   │  │  ├─ core.js
   │  │  ├─ lib.js
   │  └─ main.js
   └─ sass
```

## Использование

### Основной модуль (`core.js`)

```js
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
    if (!selector) {
        this.length = 0;
        return this;
    }

    if (selector instanceof Element) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    if (typeof selector === 'string') {
        const elements = document.querySelectorAll(selector);
        Object.assign(this, elements);
        this.length = elements.length;
        return this;
    }

    throw new TypeError('The selector must be a string or a DOM element.');
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
export default $;
```

## Лицензия
Проект распространяется под лицензией MIT.

