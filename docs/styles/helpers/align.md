### Align Utilities

Файл `_align.scss` содержит утилиты для выравнивания текста, блоков, flex- и grid-элементов, а также позиционирования с помощью `position: absolute`. Все классы поддерживают адаптивные версии с префиксами `-sm`, `-md`, `-lg`, `-xl`.

---

#### 📝 Выравнивание текста (`text-align`)

| Класс           | Свойство              |
| --------------- | --------------------- |
| `.text-left`    | `text-align: left`    |
| `.text-center`  | `text-align: center`  |
| `.text-right`   | `text-align: right`   |
| `.text-justify` | `text-align: justify` |

Адаптивные версии: `.text-sm-left`, `.text-md-center`, `.text-lg-right`, `.text-xl-justify`

---

#### 📦 Выравнивание блоков (`margin auto`)

| Класс           | Описание                             |
| --------------- | ------------------------------------ |
| `.block-left`   | Прижать влево (`margin-right: auto`) |
| `.block-center` | Центрировать по горизонтали          |
| `.block-right`  | Прижать вправо (`margin-left: auto`) |

Адаптивные версии: `.block-md-center`, `.block-lg-right` и т.д.

---

#### 🎯 Flex-выравнивание

| Класс             | Назначение                           |
| ----------------- | ------------------------------------ |
| `.v-align-middle` | `align-items: center`                |
| `.h-align-center` | `justify-content: center`            |
| `.centered-flex`  | Полное центрирование (`flex + both`) |
| `.f-centered`     | Альтернатива `.centered-flex`        |

Адаптивные версии: `.v-align-middle-sm`, `.centered-flex-md`, `.f-centered-xl` и т.д.

---

#### ↕️ Вертикальное выравнивание (`vertical-align`)

| Класс             | Свойство                   |
| ----------------- | -------------------------- |
| `.align-top`      | `vertical-align: top`      |
| `.align-middle`   | `vertical-align: middle`   |
| `.align-bottom`   | `vertical-align: bottom`   |
| `.align-baseline` | `vertical-align: baseline` |

---

#### 🔧 Absolute-позиционирование

| Класс           | Описание                    |
| --------------- | --------------------------- |
| `.abs-center`   | Центрирует элемент по X и Y |
| `.abs-center-x` | Центрирует только по X      |
| `.abs-center-y` | Центрирует только по Y      |

Адаптивные версии: `.abs-center-sm`, `.abs-center-x-md` и т.д.

---

#### 🧱 Grid-выравнивание

| Класс                | Свойство              |
| -------------------- | --------------------- |
| `.grid-align-start`  | `align-items: start`  |
| `.grid-align-center` | `align-items: center` |
| `.grid-align-end`    | `align-items: end`    |

---

#### 📱 Адаптивные версии

| Брейкпоинт | Префикс | Пример класса       | Описание                             |
| ---------- | ------- | ------------------- | ------------------------------------ |
| ≥576px     | `sm`    | `.text-sm-center`   | Центрировать текст на sm-экранах     |
| ≥768px     | `md`    | `.block-md-center`  | Центрировать блок по центру от 768px |
| ≥992px     | `lg`    | `.centered-flex-lg` | Flex-центрирование от 992px          |
| ≥1200px    | `xl`    | `.abs-center-xl`    | Абсолютное центрирование от 1200px   |

> 📌 Каждое значение поддерживает адаптивную версию по паттерну: `.класс-[breakpoint]`

---

#### 💡 Примеры использования

```html
<!-- Адаптивное текстовое выравнивание -->
<p class="text-center text-md-left">Контент</p>

<!-- Flex-центрирование только на lg -->
<div class="f-centered-lg">Центр</div>

<!-- Абсолютное центрирование только на больших экранах -->
<div class="abs-center-xl">Попап</div>

<!-- Выравнивание inline-элементов -->
<span class="icon align-bottom">★</span> Bottom aligned
```

---

✅ Эти классы легко сочетаются с `display`, `font`, `gap`, `padding`, `margin`, `visibility`, `grid` и `flex`.
