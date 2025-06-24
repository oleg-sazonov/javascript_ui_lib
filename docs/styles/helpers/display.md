### Display Utilities

Файл `_display.scss` содержит утилиты для управления CSS-свойством `display`, включая базовые и адаптивные классы.

---

#### 📦 Базовые классы отображения

| Класс             | Свойство                |
| ----------------- | ----------------------- |
| `.d-none`         | `display: none`         |
| `.d-inline`       | `display: inline`       |
| `.d-inline-block` | `display: inline-block` |
| `.d-block`        | `display: block`        |
| `.d-flex`         | `display: flex`         |
| `.d-inline-flex`  | `display: inline-flex`  |
| `.d-grid`         | `display: grid`         |
| `.d-inline-grid`  | `display: inline-grid`  |

---

#### 📱 Адаптивные классы отображения

Классы позволяют изменять `display` в зависимости от ширины экрана.

| Брейкпоинт | Префикс | Пример класса | Описание                       |
| ---------- | ------- | ------------- | ------------------------------ |
| ≥576px     | `sm`    | `.d-sm-block` | `display: block` на sm-экранах |
| ≥768px     | `md`    | `.d-md-flex`  | `display: flex` на md-экранах  |
| ≥992px     | `lg`    | `.d-lg-grid`  | `display: grid` на lg-экранах  |
| ≥1200px    | `xl`    | `.d-xl-none`  | `display: none` на xl-экранах  |

> Каждое значение имеет адаптивную версию: `.d-[breakpoint]-[значение]`

Примеры:

```html
<div class="d-none d-md-block">Показать только на >=768px</div>
<div class="d-flex d-lg-none">Показать до 992px</div>
```

---

#### 💡 Примеры использования

```html
<!-- Скрыть элемент -->
<div class="d-none">Этот блок не виден</div>

<!-- Показать как flex только на больших экранах -->
<div class="d-none d-lg-flex">Flex только на lg</div>

<!-- Grid-контейнер -->
<div class="d-grid gap-md">
    <div>1</div>
    <div>2</div>
</div>
```

---

✅ Эти классы совместимы с другими утилитами, включая `gap`, `size`, `align`, `flex`, `visibility`, `padding`, `margin`, и другими. Используйте их для создания адаптивных и управляемых интерфейсов без необходимости писать CSS вручную.
