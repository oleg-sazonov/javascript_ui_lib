### Основной модуль (`core.js`)

---

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

---

### Использование глобальной функции `$`

Библиотека предоставляет глобальную функцию `$(selector)`, аналогичную jQuery, которая позволяет:

-   выбрать DOM-элементы по селектору;
-   обернуть существующий DOM-элемент;
-   использовать цепочки вызовов с методами библиотеки.

```js
// Поиск по селектору
$(".my-class").addClass("active");

// Оборачивание HTML-элемента
const element = document.querySelector("#myDiv");
$(element).hide();

// Комбинация методов (цепочка)
$("#myBtn").on("click", () => {
    $("#target").fadeToggle();
});
```

---

**Поддерживаются:**

-   строка-селектор (`'.class'`, `'#id'`, `'div > span'`);
-   объект DOM (`HTMLElement`).

Если аргумент пустой или некорректный — вернётся пустой объект с `.length = 0`.
