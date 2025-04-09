# UI JS Lib

**UI JS Lib** — это лёгкая и удобная UI-библиотека на JavaScript, созданная для простого взаимодействия с DOM, управления элементами интерфейса и использования готовых компонентов.

## Возможности

-   Упрощённая работа с атрибутами, классами и событиями
-   Анимации и эффекты отображения
-   Гибкое управление отображением элементов
-   Встроенные UI-компоненты: модальные окна, аккордеоны, карусели, табы и др.
-   Поддержка AJAX-запросов

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
   │  │  │  └─ accordion.js
   │  │  ├─ modules
   │  │  │  └─ classes.js
   │  │  ├─ services
   │  │  ├─ core.js
   │  │  ├─ lib.js
   └─ main.js
   └─ sass
```

## Использование

### Основной модуль (`core.js`)

```js
"use strict";

const $ = function (selector) {
    return new $.prototype.init(selector);
};

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

    if (typeof selector === "string") {
        const elements = document.querySelectorAll(selector);
        Object.assign(this, elements);
        this.length = elements.length;
        return this;
    }

    throw new TypeError("The selector must be a string or a DOM element.");
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
export default $;
```

### Использование компонента Accordion

Accordion — это компонент, позволяющий скрывать и отображать контент по клику на заголовок.

#### 📦 Что нужно для использования:

1. Добавьте HTML-структуру (пример ниже)
2. Используйте строго указанные классы (`accordion-head`, `accordion-content`, `accordion-inner`)
3. Обёртке `.accordion` можно назначить вспомогательные классы, например: `mt-20 mb-20 block-center`
4. Скрипт работает **автоматически** при подключении `accordion.js`

#### HTML-шаблон:

```html
<div class="accordion mt-20 mb-20 block-center">
    <div class="accordion-head">
        <span>Collapse first element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </div>
    </div>
    <div class="accordion-head">
        <span>Collapse second element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </div>
    </div>
</div>
```

#### SCSS стили:

```scss
.accordion {
    max-width: 700px;
    &-head {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 50px;
        padding: 0 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 18px;
        color: #333;
        cursor: pointer;
        &_active {
            color: #007bff;
        }
    }
    &-content {
        max-height: 0px;
        opacity: 0;
        overflow: hidden;
        transition: opacity 0.5s, max-height 0.6s, padding 0.1s;
        background-color: #fff;
        border: 1px solid rgba(224, 211, 211, 1);
        border-top: none;
        border-radius: 0 0 4px 4px;
        &_active {
            overflow: visible;
            opacity: 1;
        }
    }
    &-inner {
        display: block;
        padding: 20px;
    }
}
```

#### 📜 Автоматическая инициализация:

Файл `accordion.js` содержит автоинициализацию:

```js
$(".accordion-head").accordion();
```

Это означает, что при наличии в HTML классов `.accordion-head` и соответствующей структуры, метод `accordion()` вызывается автоматически без необходимости явного вызова пользователем.

#### 📣 Добавление пользовательских обработчиков:

```js
// Accordion
$(".accordion").delegate("click", ".accordion-head", function () {
    console.log("Click on .child: ", this);
});

let t = 0;
$(".accordion-head").hover(
    () => console.log(t++),
    () => console.log(t--)
);
```

## Лицензия

Проект распространяется под лицензией MIT.
