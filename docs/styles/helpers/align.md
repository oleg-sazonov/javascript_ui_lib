### Align Utilities

Файл `_align.scss` содержит набор утилит для выравнивания текста, блоков и элементов с использованием `text-align`, `margin`, `flex` и `vertical-align`.

---

#### 📝 Выравнивание текста

| Класс           | CSS-свойство          |
| --------------- | --------------------- |
| `.text-left`    | `text-align: left`    |
| `.text-center`  | `text-align: center`  |
| `.text-right`   | `text-align: right`   |
| `.text-justify` | `text-align: justify` |

---

#### 📦 Горизонтальное выравнивание блоков (margin auto)

| Класс           | Описание                                 |
| --------------- | ---------------------------------------- |
| `.block-left`   | Блок прижат влево (`margin-right: auto`) |
| `.block-center` | Центрирование блока по горизонтали       |
| `.block-right`  | Блок прижат вправо (`margin-left: auto`) |

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
```

---

✅ Эти утилиты легко сочетаются с другими помощниками: `size`, `display`, `gap`, `font`, `margin`, `padding` и `flex`.
