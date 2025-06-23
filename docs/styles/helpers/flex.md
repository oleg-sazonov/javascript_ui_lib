### Flex Utilities

Файл `_flex.scss` содержит гибкие утилиты для работы с Flexbox, позволяющие удобно управлять расположением, выравниванием и направлением элементов.

---

#### 📦 Классы Display

| Класс            | Назначение             |
| ---------------- | ---------------------- |
| `.d-flex`        | `display: flex`        |
| `.d-inline-flex` | `display: inline-flex` |

---

#### 🔁 Направление элементов (Flex Direction)

| Класс               | Назначение                       |
| ------------------- | -------------------------------- |
| `.f-row`            | `flex-direction: row`            |
| `.f-column`         | `flex-direction: column`         |
| `.f-row-reverse`    | `flex-direction: row-reverse`    |
| `.f-column-reverse` | `flex-direction: column-reverse` |

---

#### 🔁 Перенос строк (Flex Wrap)

| Класс             | Назначение                |
| ----------------- | ------------------------- |
| `.f-wrap`         | `flex-wrap: wrap`         |
| `.f-nowrap`       | `flex-wrap: nowrap`       |
| `.f-wrap-reverse` | `flex-wrap: wrap-reverse` |

---

#### 📏 Выравнивание по главной оси (Justify Content)

| Класс                | Назначение                       |
| -------------------- | -------------------------------- |
| `.f-justify-start`   | `justify-content: flex-start`    |
| `.f-justify-center`  | `justify-content: center`        |
| `.f-justify-end`     | `justify-content: flex-end`      |
| `.f-justify-between` | `justify-content: space-between` |
| `.f-justify-around`  | `justify-content: space-around`  |
| `.f-justify-evenly`  | `justify-content: space-evenly`  |

---

#### 📏 Выравнивание по поперечной оси (Align Items)

| Класс               | Назначение                |
| ------------------- | ------------------------- |
| `.f-align-start`    | `align-items: flex-start` |
| `.f-align-center`   | `align-items: center`     |
| `.f-align-end`      | `align-items: flex-end`   |
| `.f-align-stretch`  | `align-items: stretch`    |
| `.f-align-baseline` | `align-items: baseline`   |

---

#### 📏 Выравнивание строк (Align Content)

| Класс                | Назначение                     |
| -------------------- | ------------------------------ |
| `.f-content-start`   | `align-content: flex-start`    |
| `.f-content-center`  | `align-content: center`        |
| `.f-content-end`     | `align-content: flex-end`      |
| `.f-content-between` | `align-content: space-between` |
| `.f-content-around`  | `align-content: space-around`  |
| `.f-content-stretch` | `align-content: stretch`       |

---

#### 🎯 Индивидуальное выравнивание (Align Self / Justify Self)

| Класс                   | Назначение               |
| ----------------------- | ------------------------ |
| `.self-start`           | `align-self: flex-start` |
| `.self-center`          | `align-self: center`     |
| `.self-end`             | `align-self: flex-end`   |
| `.self-stretch`         | `align-self: stretch`    |
| `.justify-self-start`   | `justify-self: start`    |
| `.justify-self-center`  | `justify-self: center`   |
| `.justify-self-end`     | `justify-self: end`      |
| `.justify-self-stretch` | `justify-self: stretch`  |

---

#### ✨ Готовые шаблоны

| Класс         | Назначение                                            |
| ------------- | ----------------------------------------------------- |
| `.f-centered` | Центрирование по обеим осям (горизонтали и вертикали) |
| `.f-left`     | Выравнивание влево по обеим осям                      |
| `.f-right`    | Выравнивание вправо по обеим осям                     |

---

#### 💡 Примеры использования

```html
<!-- Центрирование карточки -->
<div class="f-centered">
    <div class="card">Content</div>
</div>

<!-- Колонки с пробелами -->
<div class="d-flex f-column f-justify-between">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- Самостоятельное выравнивание элемента -->
<div class="d-flex">
    <div class="self-end">Я внизу</div>
</div>
```

---

✅ Эти классы легко комбинировать с другими утилитами библиотеки. Если нужен `grid`, см. документацию `display`, `gap`, `size` и другие.
