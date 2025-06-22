# UI JS Lib

    ## Оглавление

-   [Оглавление](#📑-оглавление)

-   [Возможности](#возможности)

-   [Установка и запуск](#установка-и-запуск)

    -   [Установка зависимостей](#установка-зависимостей)
    -   [Запуск проекта](#запуск-проекта)
    -   [Сборка проекта](#сборка-проекта)

-   [Структура проекта](#структура-проекта)

-   [Использование](#использование)

    -   [Основной модуль (core.js)](#основной-модуль-corejs)

-   [Компоненты](#компоненты)

    -   [Accordion Component](#accordion-component)
    -   [Carousel Component](#carousel-component)
    -   [Modal Component](#modal-component)
    -   [Dropdown Component](#dropdown-component)

-   [Модули](#модули)

    -   [Модуль: actions.js](#модуль-actionsjs)
    -   [Модуль: attributes.js](#модуль-attributesjs)
    -   [Модуль: classes.js](#модуль-classesjs)
    -   [Модуль: display.js](#модуль-displayjs)
    -   [Модуль: effects.js](#модуль-effectsjs)
    -   [Модуль: handlers.js](#модуль-handlersjs)

---

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

### Carousel Component

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

### Modal Component

Модальные окна создаются динамически с помощью метода `createModal()` и управляются через метод `modal()`. Окно реализовано на основе `div.modal`, поддерживает анимации, закрытие по клавише Esc, кастомные кнопки и вставку HTML-строки или DOM-элемента в качестве тела окна.

---

#### 📦 Использование

Добавьте элемент с `data-toggle` и `data-target`:

```html
<a
    href="#"
    class="btn btn-primary"
    data-toggle="modal-example"
    data-target="#exampleModal"
    >Открыть окно</a
>
```

Создайте окно динамически:

```js
const carouselContainer = document.createElement("div");
carouselContainer.classList.add("card-carousel");

$(carouselContainer).createCarousel({
    images: [...],
    width: "350px",
    height: "250px",
    autoplay: true,
});

$('[data-toggle="modal-example"]').click((e) => {
    if (!document.querySelector(".modal")) {
        $(e.target).createModal({
            text: {
                title: "Слайдер в модалке",
                body: carouselContainer // Можно использовать и строку
            },
            btns: {
                count: 2,
                settings: [
                    ["Закрыть", ["btn-danger"], true],
                    ["Сохранить", ["btn-success"], false, () => alert("Saved")]
                ]
            }
        });
    }
});
```

---

#### 🔧 Параметры `createModal()`

```js
$(element).createModal({
    text: {
        title: "Заголовок окна",
        body: "HTML или DOM-элемент",
    },
    btns: {
        count: 2,
        settings: [
            ["Текст", ["btn"], true, () => console.log("callback")],
            ["Текст", ["btn"], false],
        ],
    },
});
```

| Параметр   | Тип                      | Описание                                           |
| ---------- | ------------------------ | -------------------------------------------------- |
| `title`    | `string`                 | Заголовок модального окна                          |
| `body`     | `string` / `HTMLElement` | Содержимое окна (строка HTML или DOM-элемент)      |
| `count`    | `number`                 | Количество кнопок                                  |
| `settings` | `array[]`                | Кнопки: `[текст, классы[], закрывать?, callback?]` |

---

#### 📜 Поведение закрытия

Окно закрывается, если:

-   Нажать на крестик или кнопку с `data-close`
-   Кликнуть по фону `.modal`
-   Нажать клавишу **Escape**

Если модалка была создана через `createModal()`, она автоматически удаляется из DOM после закрытия.

---

### Dropdown Component

Dropdown — это компонент, позволяющий отображать выпадающее меню при наведении или клике на элемент. Меню связывается с переключателем по ID.

### 📦 Что нужно для использования:

1. Добавьте HTML-структуру (пример ниже)
2. Кнопке задайте уникальный `id` и класс `dropdown-toggle`
3. Выпадающему меню добавьте атрибут `data-toggle-id="ID_КНОПКИ"`
4. Оберните всё в контейнер с классом `dropdown`
5. Скрипт работает **автоматически** при подключении `dropdown.js`

### HTML-шаблон:

```html
<div class="dropdown">
    <button id="dropdownBtn" class="btn btn-primary dropdown-toggle">
        Dropdown Menu
    </button>
    <div class="dropdown-menu" data-toggle-id="dropdownBtn">
        <a href="#" class="dropdown-item">Item 1</a>
        <a href="#" class="dropdown-item">Item 2</a>
        <a href="#" class="dropdown-item">Item 3</a>
    </div>
</div>
```

### 🧠 Варианты использования:

Dropdown можно активировать:

#### По наведению:

```js
$(".dropdown-toggle").dropdownByHover();
```

#### По клику:

```js
$(".dropdown-toggle").dropdownByClick();
```

Оба метода работают **автоматически**, если в HTML присвоен класс `dropdown-toggle`. Можно также вызывать вручную.

### ⚙️ Автоматическая инициализация:

```js
$(".dropdown-toggle").dropdownByHover();
$(".dropdown-toggle").dropdownByClick();
```

---

## Модули

---

### Модуль: actions.js

Модуль `actions.js` предоставляет базовые методы для взаимодействия с DOM-элементами: навигация, изменение содержимого, добавление и выбор элементов.

---

### Методы

#### `.html(content?)`

Получает или устанавливает HTML-содержимое выбранных элементов.

```js
$(".box").html("<p>Привет</p>");
const html = $(".box").html();
```

---

#### `.eq(index)`

Возвращает новый объект, содержащий только элемент с указанным индексом.

```js
$(".item").eq(1).addClass("active");
```

---

#### `.index()`

Возвращает индекс текущего элемента среди его соседей.

```js
const i = $(".element").index();
```

---

#### `.find(selector)`

Ищет элементы внутри текущей выборки.

```js
$(".card").find(".card-title").addClass("bold");
```

---

#### `.closest(selector)`

Находит ближайшего родителя по CSS-селектору.

```js
$(".text").closest(".container").addClass("highlight");
```

---

#### `.siblings()`

Возвращает всех соседей текущего элемента.

```js
$(".active").siblings().removeClass("active");
```

---

#### `.filterChildren(selector)`

Аналогично `find()`. Фильтрует дочерние элементы по селектору.

```js
$(".list").filterChildren(".item").addClass("blue");
```

---

#### `.append(content)`

Добавляет HTML-строку или DOM-элемент в конец каждого выбранного элемента.

```js
$(".list").append("<li>Новый элемент</li>");
```

---

#### `.prepend(content)`

Добавляет HTML-строку или DOM-элемент в начало каждого выбранного элемента.

```js
$(".list").prepend("<li>Первый элемент</li>");
```

---

### Модуль: attributes.js

Модуль `attributes.js` предоставляет удобные методы для работы с HTML-атрибутами: установка, получение, проверка и переключение.

---

### Методы

#### `.addAttr(name, value?)`

Добавляет атрибут к каждому элементу в коллекции.

```js
$(".btn").addAttr("disabled");
$(".link").addAttr("href", "https://example.com");
```

---

#### `.removeAttr(name)`

Удаляет атрибут у всех элементов в коллекции.

```js
$(".btn").removeAttr("disabled");
```

---

#### `.getAttrValue(name)`

Получает значение указанного атрибута для всех элементов в коллекции.

```js
const values = $(".input").getAttrValue("placeholder");
```

---

#### `.hasAttr(name)`

Проверяет, есть ли у первого элемента указанный атрибут.

```js
if ($(".item").hasAttr("data-id")) {
    console.log("Атрибут найден");
}
```

---

#### `.toggleAttr(name, value?)`

Добавляет или удаляет атрибут в зависимости от его наличия.

```js
$(".link").toggleAttr("target", "_blank");
```

---

### Модуль: classes.js

Методы для добавления, удаления и проверки CSS-классов.

#### `.addClass(...classNames)`

```js
$(".card").addClass("highlight", "border");
```

#### `.removeClass(...classNames)`

```js
$(".card").removeClass("active");
```

#### `.clearClasses()`

```js
$(".tag").clearClasses();
```

#### `.toggleClass(className)`

```js
$(".box").toggleClass("open");
```

#### `.hasClasses(...names)`

```js
if ($(".btn").hasClasses("btn", "btn-primary")) {
  ...
}
```

#### `.containsClass(className)`

Альтернативное имя для `.hasClasses(className)`

---

### Модуль: display.js

Методы управления видимостью элементов.

#### `.show()`, `.hide()`, `.toggleDisplay()`

```js
$(".panel").hide();
$(".panel").show();
$(".panel").toggleDisplay();
```

#### `.isVisible()`

```js
if ($(".popup").isVisible()) {
    console.log("Модалка открыта");
}
```

#### `.display(value?)`

```js
$(".box").display("flex");
const d = $(".box").display(); // "flex"
```

---

### Модуль: effects.js

> Все методы из `effects.js` совместимы с цепочками вызовов `$()` и могут использоваться вместе с другими методами библиотеки, такими как `addClass()`, `on()` и т.д.

Модуль `effects.js` предоставляет гибкие методы для анимации элементов с помощью `requestAnimationFrame`. Все методы возвращают текущий `$`-объект и поддерживают колбэки.

---

#### `.animateOverTime(duration, callback, finalize?)`

Запускает анимацию на основе времени.

| Параметр   | Тип        | Описание                                                    |
| ---------- | ---------- | ----------------------------------------------------------- |
| `duration` | `number`   | Продолжительность анимации в миллисекундах                  |
| `callback` | `function` | Вызывается на каждом кадре, получает `completion` от 0 до 1 |
| `finalize` | `function` | (опционально) вызывается в конце анимации                   |

📌 **Пример:**

```js
$(".box").animateOverTime(
    300,
    (progress) => {
        $(".box")[0].style.opacity = progress;
    },
    () => {
        console.log("Анимация завершена");
    }
);
```

---

#### `.animateFade(duration, display, type, direction, offset?, finalize?)`

Базовый метод для анимаций появления/исчезновения. Внутренне используется всеми `fade*` методами.

| Параметр    | Тип        | Значение по умолчанию  | Описание                                                    |
| ----------- | ---------- | ---------------------- | ----------------------------------------------------------- |
| `duration`  | `number`   | —                      | Время анимации                                              |
| `display`   | `string`   | "block"                | CSS display-свойство при `fadeIn`                           |
| `type`      | `string`   | "fadeIn" или "fadeOut" | Тип анимации                                                |
| `direction` | `string`   | "none"                 | Направление движения: `up`, `down`, `left`, `right`, `none` |
| `offset`    | `string`   | "0px"                  | Смещение в пикселях для направления                         |
| `finalize`  | `function` | —                      | Колбэк после завершения                                     |

---

## 🌫 Простые анимации

#### `.fadeIn(duration, display = "block", finalize?)`

Плавно показывает элемент с возможным изменением `display`. Также можно передать `finalize`-функцию, которая выполнится после завершения анимации.

```js
$(".modal").fadeIn(400);
$(".box").fadeIn(300, "flex", () => {
    console.log("Анимация завершена, продолжаем работу...");
});
```

---

#### `.fadeOut(duration, finalize?)`

Плавно скрывает элемент.

```js
$(".popup").fadeOut(300);
```

---

#### `.fadeToggle(duration, display = "block", finalize?)`

Показывает/скрывает элемент в зависимости от текущего состояния.

```js
$(".menu").fadeToggle(300);
```

---

## 📐 Анимации с направлением

Все используют `offset` (по умолчанию `"50px"`).

### Вверх / Вниз:

#### `.fadeInTop(duration, display?, offset?, finalize?)`

```js
$(".modal").fadeInTop(300);
```

#### `.fadeOutTop(duration, offset?, finalize?)`

```js
$(".modal").fadeOutTop(300);
```

#### `.fadeInBottom(...)`, `.fadeOutBottom(...)`

```js
$(".info").fadeInBottom(400);
$(".info").fadeOutBottom(400);
```

### Влево / Вправо:

#### `.fadeInLeft(...)`, `.fadeOutLeft(...)`

```js
$(".menu").fadeInLeft(300);
$(".menu").fadeOutLeft(300);
```

#### `.fadeInRight(...)`, `.fadeOutRight(...)`

```js
$(".notif").fadeInRight(300);
$(".notif").fadeOutRight(300);
```

---

## 🔀 Toggle-анимации с направлением

#### `.fadeToggleTop(...)`, `.fadeToggleBottom(...)`, `.fadeToggleLeft(...)`, `.fadeToggleRight(...)`

```js
$(".dropdown").fadeToggleTop(300);
$(".panel").fadeToggleRight(300);
```

---

## ⚙️ Общая таблица аргументов

| Аргумент    | Тип        | По умолчанию       | Описание                                           |
| ----------- | ---------- | ------------------ | -------------------------------------------------- |
| `duration`  | `number`   | —                  | Длительность анимации в миллисекундах              |
| `display`   | `string`   | "block"            | CSS display (только для `fadeIn`, `toggle`)        |
| `type`      | `string`   | "fadeIn"/"fadeOut" | Тип анимации: появление или исчезновение           |
| `direction` | `string`   | "none"             | Направление: `up`, `down`, `left`, `right`, `none` |
| `offset`    | `string`   | "50px"             | Смещение при направленных анимациях                |
| `finalize`  | `function` | —                  | Колбэк после завершения анимации                   |

---

### Модуль: handlers.js

Модуль `handlers.js` предоставляет методы для управления обработчиками событий на элементах.

#### `.on(eventName, callback)`

Добавляет обработчик события.

```js
$(".btn").on("click", () => alert("Clicked!"));
```

#### `.off(eventName, callback)`

Удаляет ранее назначенный обработчик.

```js
const handler = () => alert("Clicked!");
$(".btn").on("click", handler);
$(".btn").off("click", handler);
```

#### `.click(handler?)`

Добавляет обработчик события `click`, либо триггерит событие `click` без аргументов.

```js
$(".btn").click(() => alert("Clicked!"));
$(".btn").click(); // вручную запускает клик
```

#### `.delegate(eventName, selector, callback)`

Добавляет делегированный обработчик события — удобно для динамически добавленных элементов.

```js
$(".list").delegate("click", ".item", (e) => {
    alert("Clicked: " + e.target.textContent);
});
```

#### `.hover(mouseEnter, mouseLeave)`

Добавляет функции на события `mouseenter` и `mouseleave`.

```js
$(".card").hover(
    () => console.log("Навели мышку"),
    () => console.log("Убрали мышку")
);
```

#### `.one(eventName, callback)`

Назначает обработчик, который выполнится только один раз.

```js
$(".submit").one("click", () => alert("Один раз!"));
```

---
