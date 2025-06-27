### Flex Utilities

Файл `_flex.scss` предоставляет набор вспомогательных классов для работы с Flexbox: направления, выравнивание, обтекание, позиционирование и адаптивные версии.

---

#### 🔁 Отображение Flex

| Класс            | CSS-свойство           |
| ---------------- | ---------------------- |
| `.d-flex`        | `display: flex`        |
| `.d-inline-flex` | `display: inline-flex` |

Адаптивные классы:

-   `.d-sm-flex`, `.d-md-flex`, `.d-lg-inline-flex` и т.д.

---

#### 🔃 Направление Flex

| Класс               | Назначение                       |
| ------------------- | -------------------------------- |
| `.f-row`            | Горизонтально (по умолчанию)     |
| `.f-column`         | Вертикально                      |
| `.f-row-reverse`    | Горизонтально в обратную сторону |
| `.f-column-reverse` | Вертикально в обратную сторону   |

Адаптивные классы: `.f-md-column`, `.f-lg-row-reverse` и т.д.

---

#### 🌀 Обтекание (Wrap)

| Класс             | Описание                   |
| ----------------- | -------------------------- |
| `.f-wrap`         | Перенос строк              |
| `.f-nowrap`       | Без переноса               |
| `.f-wrap-reverse` | Перенос в обратном порядке |

Адаптивные: `.f-md-wrap`, `.f-lg-nowrap`

---

#### 📦 Выравнивание по основной оси (justify-content)

| Класс                | CSS-свойство                     |
| -------------------- | -------------------------------- |
| `.f-justify-start`   | `justify-content: flex-start`    |
| `.f-justify-center`  | `justify-content: center`        |
| `.f-justify-end`     | `justify-content: flex-end`      |
| `.f-justify-between` | `justify-content: space-between` |
| `.f-justify-around`  | `justify-content: space-around`  |
| `.f-justify-evenly`  | `justify-content: space-evenly`  |

---

#### 🎯 Выравнивание по поперечной оси (align-items)

| Класс               | CSS-свойство              |
| ------------------- | ------------------------- |
| `.f-align-start`    | `align-items: flex-start` |
| `.f-align-center`   | `align-items: center`     |
| `.f-align-end`      | `align-items: flex-end`   |
| `.f-align-stretch`  | `align-items: stretch`    |
| `.f-align-baseline` | `align-items: baseline`   |

---

#### 🎯 Выравнивание строк (align-content)

| Класс                | CSS-свойство                   |
| -------------------- | ------------------------------ |
| `.f-content-start`   | `align-content: flex-start`    |
| `.f-content-center`  | `align-content: center`        |
| `.f-content-end`     | `align-content: flex-end`      |
| `.f-content-between` | `align-content: space-between` |
| `.f-content-around`  | `align-content: space-around`  |
| `.f-content-stretch` | `align-content: stretch`       |

---

#### 🔗 Выравнивание отдельных элементов (align-self, justify-self)

| Класс               | Назначение               |
| ------------------- | ------------------------ |
| `.self-start`       | `align-self: flex-start` |
| `.self-center`      | `align-self: center`     |
| `.self-end`         | `align-self: flex-end`   |
| `.justify-self-end` | `justify-self: end`      |

---

#### 🧩 Комбинированные классы

| Класс         | Описание                         |
| ------------- | -------------------------------- |
| `.f-centered` | Центр по горизонтали и вертикали |
| `.f-left`     | Прижатие влево                   |
| `.f-right`    | Прижатие вправо                  |

---

#### 📱 Адаптивные версии

| Брейкпоинт | Префикс | Пример класса    | Описание                        |
| ---------- | ------- | ---------------- | ------------------------------- |
| ≥576px     | `sm`    | `.d-sm-flex`     | Flex на экранах от 576px        |
| ≥768px     | `md`    | `.f-md-column`   | Вертикальная ось от 768px       |
| ≥992px     | `lg`    | `.f-lg-nowrap`   | Без переноса от 992px           |
| ≥1200px    | `xl`    | `.f-xl-centered` | Центрирование по осям от 1200px |

> Каждое значение может иметь адаптивную версию: `.класс-[breakpoint]`

---

#### 💡 Примеры использования

```html
<!-- Блок с вертикальной колонкой от md-размера -->
<div class="d-flex f-row f-md-column">
    <div class="box">A</div>
    <div class="box">B</div>
</div>

<!-- Центрированный блок -->
<div class="f-centered">
    <p>Центрированный контент</p>
</div>

<!-- Обтекание только на больших экранах -->
<div class="d-flex f-nowrap f-lg-wrap">
    <div class="item">1</div>
    <div class="item">2</div>
</div>
```

---

✅ Все классы можно комбинировать с другими: `gap`, `size`, `align`, `margin`, `display`, `visibility` и др.
