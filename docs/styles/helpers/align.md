### Align Utilities

Файл `_align.scss` содержит набор утилит для выравнивания текста, блоков и элементов с использованием `text-align`, `margin`, `flex`, `vertical-align`, а также их адаптивных версий.

---

#### 📝 Выравнивание текста

| Класс           | CSS-свойство          |
| --------------- | --------------------- |
| `.text-left`    | `text-align: left`    |
| `.text-center`  | `text-align: center`  |
| `.text-right`   | `text-align: right`   |
| `.text-justify` | `text-align: justify` |

Адаптивные классы:

-   `.text-left-sm`, `.text-center-md`, `.text-right-lg` и т.д.

---

#### 📦 Горизонтальное выравнивание блоков (margin auto)

| Класс           | Описание                                 |
| --------------- | ---------------------------------------- |
| `.block-left`   | Блок прижат влево (`margin-right: auto`) |
| `.block-center` | Центрирование блока по горизонтали       |
| `.block-right`  | Блок прижат вправо (`margin-left: auto`) |

Адаптивные классы: `.block-center-md`, `.block-right-lg` и т.д.

---

#### 🎯 Flex выравнивание

| Класс             | Назначение                                 |
| ----------------- | ------------------------------------------ |
| `.v-align-middle` | `align-items: center` (вертикальное)       |
| `.h-align-center` | `justify-content: center` (горизонтальное) |
| `.centered-flex`  | Центрирование по обеим осям                |
| `.f-centered`     | Альтернатива `.centered-flex`              |

> Все классы используют `display: flex`

---

#### ↕️ Вертикальное выравнивание inline-элементов

| Класс           | CSS-свойство             |
| --------------- | ------------------------ |
| `.align-top`    | `vertical-align: top`    |
| `.align-middle` | `vertical-align: middle` |
| `.align-bottom` | `vertical-align: bottom` |

---

#### 📱 Адаптивные классы выравнивания

Классы позволяют изменять `text-align` и `margin` в зависимости от ширины экрана.

| Брейкпоинт | Префикс | Пример класса      | Описание                                  |
| ---------- | ------- | ------------------ | ----------------------------------------- |
| ≥576px     | `sm`    | `.text-center-sm`  | Центрирует текст на sm-экранах            |
| ≥768px     | `md`    | `.block-center-md` | Центрирует блок по горизонтали на md      |
| ≥992px     | `lg`    | `.text-right-lg`   | Прижимает текст вправо на больших экранах |
| ≥1200px    | `xl`    | `.block-left-xl`   | Прижимает блок влево на xl-экранах        |

> Каждое значение имеет адаптивную версию: `.класс-[breakpoint]`

---

#### 💡 Примеры использования

```html
<!-- Центрированный заголовок -->
<h2 class="text-center">Заголовок</h2>

<!-- Центрированный блок -->
<div class="block-center">Centered block</div>

<!-- Контейнер с flex-центрированием -->
<div class="centered-flex">
    <button class="btn">Нажми</button>
</div>

<!-- Выравнивание inline-иконки -->
<span class="icon align-bottom">★</span> Bottom aligned

<!-- Центрирование по экрану на мобильных -->
<div class="f-centered block-center-sm text-center-sm">Контент</div>
```

---

#### 🔗 Часто используемые комбинации

| Сценарий                                     | Классы                                       |
| -------------------------------------------- | -------------------------------------------- |
| Центрированный текст по всем экранам         | `.text-center text-center-md text-center-lg` |
| Центрированный flex-блок на всех разрешениях | `.f-centered`                                |
| Центрированный блок только на мобильных      | `.block-center-sm`                           |

---

✅ Эти утилиты легко сочетаются с другими помощниками: `size`, `display`, `gap`, `font`, `margin`, `padding`, `flex` и `visibility`.
