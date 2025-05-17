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

### 🖼 Carousel Component

Универсальный компонент карусели на JavaScript, с поддержкой:

-   Автопрокрутки
-   Переключения по стрелкам и точкам
-   Кастомизации стрелок, размеров и поведения
-   Динамического создания HTML-структуры
-   Ленивая загрузка изображений (`loading="lazy"`)

---

#### 📦 Что нужно для использования:

1. Добавьте HTML-структуру вручную (пример ниже) или создайте карусель динамически через `createCarousel()`
2. Используйте строго указанные классы:  
   `carousel`, `carousel-indicators`, `carousel-inner`, `carousel-slides`, `carousel-item`, `carousel-prev`, `carousel-next`, `carousel-prev-icon`, `carousel-next-icon`
3. Скрипт работает **автоматически** при подключении `carousel.js`

---

### 1. HTML-разметка (ручная)

```html
<div class="carousel" id="carousel">
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item active">
                <img src="img1.jpg" alt="Slide 1" loading="lazy" />
            </div>
            <div class="carousel-item">
                <img src="img2.jpg" alt="Slide 2" loading="lazy" />
            </div>
            <div class="carousel-item">
                <img src="img3.jpg" alt="Slide 3" loading="lazy" />
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

#### 📜 Автоинициализация

```js
$(".carousel").carousel();
```

---

### 2. Создание динамической карусели

Карусель будет помещена в указанный контейнер:

```js
$(".card-carousel").createCarousel({
    images: [
        {
            src: "https://example.com/image1.jpg",
            alt: "First slide",
        },
        {
            src: "https://example.com/image2.jpg",
            alt: "Second slide",
        },
        {
            src: "https://example.com/image3.jpg",
            alt: "Third slide",
        },
    ],
    width: "350px",
    height: "300px",
    autoplay: false,
    showDots: true,
    showArrows: true,
    arrowsOpacity: true,
    stopAutoplayAtEnd: false,
});
```

---

### ⚙️ Параметры (для `createCarousel` и `carousel`)

| Параметр            | Тип        | По умолчанию | Описание                                                                 |
| ------------------- | ---------- | ------------ | ------------------------------------------------------------------------ |
| `images`            | `object[]` | `[]`         | Массив объектов `{ src, alt }` для изображений                           |
| `autoplay`          | `boolean`  | `true`       | Автоматическое перелистывание слайдов                                    |
| `duration`          | `number`   | `3000`       | Интервал между слайдами (в миллисекундах)                                |
| `width`             | `string`   | `'900px'`    | Ширина карусели                                                          |
| `height`            | `string`   | `'500px'`    | Высота блока `.carousel-inner`                                           |
| `prevArrow`         | `string`   | SVG иконка   | HTML-код кастомной стрелки "назад"                                       |
| `nextArrow`         | `string`   | SVG иконка   | HTML-код кастомной стрелки "вперёд"                                      |
| `showDots`          | `boolean`  | `true`       | Показывать индикаторы (точки)                                            |
| `showArrows`        | `boolean`  | `true`       | Показывать стрелки                                                       |
| `arrowsOpacity`     | `boolean`  | `true`       | Управлять прозрачностью стрелок (если `false`, стрелки всегда прозрачны) |
| `stopAutoplayAtEnd` | `boolean`  | `false`      | Остановить автопрокрутку на последнем слайде                             |

---

## 🧩 Зависимости

Компонент зависит кастомной библиотеки с методом `createCarousel()` и `carousel()` на базе jQuery-like `$()`.
