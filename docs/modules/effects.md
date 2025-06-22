### Модуль: effects.js

> Все методы из `effects.js` совместимы с цепочками вызовов `$()` и могут использоваться вместе с другими методами библиотеки, такими как `addClass()`, `on()` и т.д.

Модуль `effects.js` предоставляет гибкие методы для анимации элементов с помощью `requestAnimationFrame`. Все методы возвращают текущий `$`-объект и поддерживают колбэки.

---

#### `.animateOverTime(duration, callback, finalize?)`

Основной метод анимации.

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

---

#### `.fadeOutTop(duration, offset?, finalize?)`

```js
$(".modal").fadeOutTop(300);
```

---

#### `.fadeInBottom(...)`, `.fadeOutBottom(...)`

```js
$(".info").fadeInBottom(400);
$(".info").fadeOutBottom(400);
```

---

### Влево / Вправо:

#### `.fadeInLeft(...)`, `.fadeOutLeft(...)`

```js
$(".menu").fadeInLeft(300);
$(".menu").fadeOutLeft(300);
```

---

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
