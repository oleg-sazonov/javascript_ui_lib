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

### Accordion Component

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

# 🖼 Carousel Component

Универсальный компонент карусели на JavaScript, с поддержкой:

-   Автопрокрутки
-   Переключения по стрелкам и точкам
-   Кастомизации стрелок, стилей и поведения

---

#### 📦 Что нужно для использования:

1. Добавьте HTML-структуру (пример ниже) или создайте карусель динамически с помощью createCarousel()
2. Используйте строго указанные классы (`carousel`, `carousel-indicators`, `carousel-inner`, `carousel-slides`, `carousel-item`, `carousel-prev`, `carousel-next`, `carousel-prev-icon`, `carousel-next-icon`)
3. Можно назначить вспомогательные классы, например: `mt-20 mb-20 block-center`
4. Скрипт работает **автоматически** при подключении `accordion.js`

### 1. HTML-разметка

```html
<div class="carousel" id="carousel">
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner mb-20">
        <div class="carousel-slides">
            <div class="carousel-item">
                <img src="img1.jpg" alt="slide1" />
            </div>
            <div class="carousel-item">
                <img src="img2.jpg" alt="slide2" />
            </div>
            <div class="carousel-item">
                <img src="img3.jpg" alt="slide3" />
            </div>
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">‹</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">›</span>
    </a>
</div>
```

#### 📜 Автоматическая инициализация:

Файл `carousel.js` содержит автоинициализацию:

```js
$(".carousel").carousel();
```

---

### 2. Инициализация слайдера

Создай динамическую карусель:

```js
$().createCarousel({
    images: [
        "https://as1.ftcdn.net/jpg/07/33/90/18/1000_F_733901878_mA9lvDJkhR2RA4Ex8Jlch4Nay1VgKMXc.jpg",
        "https://as1.ftcdn.net/jpg/04/02/64/08/1000_F_402640862_Mg9kbil2AP20CvQBWr9pX99e9xmfCHpP.jpg",
        "https://as1.ftcdn.net/jpg/05/35/43/12/1000_F_535431282_VhH2Uo9QfgdEvRQdxMbwgn70ZIWisCQh.jpg",
    ],
    autoplay: true,
    duration: 3000,
    containerSelector: ".container",
    sliderId: "carousel",
    carouselWidth: "700px",
    showDots: true,
    showArrows: true,
    stopAutoplayAtEnd: true,
});
```

---

## ⚙️ Настройки

| Параметр            | Тип        | По умолчанию | Описание                         |
| ------------------- | ---------- | ------------ | -------------------------------- |
| `images`            | `string[]` | `[]`         | Массив изображений               |
| `autoplay`          | `boolean`  | `true`       | Включить автопрокрутку           |
| `duration`          | `number`   | `3000`       | Интервал между слайдами (мс)     |
| `containerSelector` | `string`   | `'body'`     | Куда вставлять HTML слайдера     |
| `sliderId`          | `string`   | `'carousel'` | Уникальный ID для слайдера       |
| `carouselWidth`     | `string`   | `'900px'`    | Ширина компонента карусели.      |
| `showDots`          | `boolean`  | `true`       | Показывать индикаторы (точки)    |
| `showArrows`        | `boolean`  | `true`       | Показывать стрелки               |
| `arrowsOpacity`     | `boolean`  | `true`       | Управлять прозрачностью стрелок  |
| `stopAutoplayAtEnd` | `boolean`  | `false`      | Остановить автопрокрутку в конце |

---

## 🧩 Зависимости

Компонент зависит кастомной библиотеки с методом `createCarousel()` и `carousel()` на базе jQuery-like `$()`.

## Лицензия

Проект распространяется под лицензией MIT.
