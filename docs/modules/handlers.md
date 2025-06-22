### Модуль: handlers.js

Модуль `handlers.js` предоставляет методы для управления обработчиками событий на элементах.

#### `.on(eventName, callback)`

Добавляет обработчик события.

```js
$(".btn").on("click", () => alert("Clicked!"));
```

---

#### `.off(eventName, callback)`

Удаляет ранее назначенный обработчик.

```js
const handler = () => alert("Clicked!");
$(".btn").on("click", handler);
$(".btn").off("click", handler);
```

---

#### `.click(handler?)`

Добавляет обработчик события `click`, либо триггерит событие `click` без аргументов.

```js
$(".btn").click(() => alert("Clicked!"));
$(".btn").click(); // вручную запускает клик
```

---

#### `.delegate(eventName, selector, callback)`

Добавляет делегированный обработчик события — удобно для динамически добавленных элементов.

```js
$(".list").delegate("click", ".item", (e) => {
    alert("Clicked: " + e.target.textContent);
});
```

---

#### `.hover(mouseEnter, mouseLeave)`

Добавляет функции на события `mouseenter` и `mouseleave`.

```js
$(".card").hover(
    () => console.log("Навели мышку"),
    () => console.log("Убрали мышку")
);
```

---

#### `.one(eventName, callback)`

Назначает обработчик, который выполнится только один раз.

```js
$(".submit").one("click", () => alert("Один раз!"));
```
