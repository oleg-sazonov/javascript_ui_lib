### Font Utilities

Файл `_font.scss` предоставляет гибкий набор утилит для управления шрифтами: от размера (`px` и `rem`) до насыщенности, стиля, регистра, межбуквенного интервала, высоты строки и цвета.

---

#### 🔠 Размер шрифта (px)

| Класс    | Значение          |
| -------- | ----------------- |
| `.fz-12` | `font-size: 12px` |
| `.fz-16` | `font-size: 16px` |
| `.fz-24` | `font-size: 24px` |

Адаптивные классы: `.fz-16-sm`, `.fz-18-md`, `.fz-24-lg` и т.д.

---

#### 🔡 Размер шрифта (rem)

| Класс     | Значение            |
| --------- | ------------------- |
| `.fzr-12` | `font-size: 1.2rem` |
| `.fzr-25` | `font-size: 2.5rem` |
| `.fzr-30` | `font-size: 3.0rem` |

Адаптивные классы: `.fzr-14-sm`, `.fzr-20-md`, `.fzr-28-lg`, `.fzr-32-xl` и т.д.

---

#### 🏋️ Насыщенность (Font-weight)

| Класс          | Значение           |
| -------------- | ------------------ |
| `.fw-thin`     | `font-weight: 300` |
| `.fw-light`    | `font-weight: 400` |
| `.fw-medium`   | `font-weight: 500` |
| `.fw-semibold` | `font-weight: 600` |
| `.fw-bold`     | `font-weight: 700` |
| `.fw-black`    | `font-weight: 900` |

---

#### ✍️ Стиль шрифта (Font-style)

| Класс     | Значение             |
| --------- | -------------------- |
| `.italic` | `font-style: italic` |
| `.normal` | `font-style: normal` |

---

#### 🔠 Преобразование регистра

| Класс         | Значение                     |
| ------------- | ---------------------------- |
| `.uppercase`  | `text-transform: uppercase`  |
| `.lowercase`  | `text-transform: lowercase`  |
| `.capitalize` | `text-transform: capitalize` |

---

#### 🔤 Межбуквенный интервал

| Класс        | Значение                 |
| ------------ | ------------------------ |
| `.ls-tight`  | `letter-spacing: -0.5px` |
| `.ls-normal` | `letter-spacing: 0`      |
| `.ls-wide`   | `letter-spacing: 1px`    |
| `.ls-wider`  | `letter-spacing: 2px`    |

---

#### 📏 Высота строки (Line-height)

| Класс     | Значение           |
| --------- | ------------------ |
| `.lh-1`   | `line-height: 1`   |
| `.lh-1-2` | `line-height: 1.2` |
| `.lh-1-5` | `line-height: 1.5` |
| `.lh-2`   | `line-height: 2`   |

---

#### 🎨 Цвет текста (CSS переменные)

| Класс                 | Значение                  | Цвет (по умолчанию) |
| --------------------- | ------------------------- | ------------------- |
| `.text-color-primary` | `color: var(--primary)`   | Синий (`#1976ff`)   |
| `.text-color-success` | `color: var(--success)`   | Зелёный (`#28a745`) |
| `.text-color-danger`  | `color: var(--danger)`    | Красный (`#dc3545`) |
| `.text-color-warning` | `color: var(--warning)`   | Жёлтый (`#ffc107`)  |
| `.text-color-dark`    | `color: var(--text)`      | Тёмный (`#212529`)  |
| `.text-color-light`   | `color: var(--text-soft)` | Серый (`#495057`)   |

> 💡 В тёмной теме (`.dark-theme`) цвета автоматически адаптируются с использованием CSS-переменных.

---

<!--
#### 🖱 Hover-эффекты

| Класс                        | Описание                          |
| ---------------------------- | --------------------------------- |
| `a.text-color-primary:hover` | Яркий оттенок цвета при наведении |
| `a.text-color-success:hover` | Яркий зелёный                     |
| `a.text-color-danger:hover`  | Яркий красный                     |

--- -->

#### 📱 Адаптивность

Размеры `.fz-*` и `.fzr-*` поддерживают адаптивные версии:

| Префикс | Брейкпоинт | Пример       |
| ------- | ---------- | ------------ |
| `-sm`   | ≥576px     | `.fzr-16-sm` |
| `-md`   | ≥768px     | `.fz-18-md`  |
| `-lg`   | ≥992px     | `.fz-20-lg`  |
| `-xl`   | ≥1200px    | `.fzr-24-xl` |

---

#### 💡 Примеры использования

```html
<p class="fz-18 fw-semibold text-color-primary">Заголовок</p>
<p class="fzr-20-md lh-1-5 ls-wide text-center">Текст с отступами</p>
<a href="#" class="text-color-danger fw-bold">Ссылка</a>
```

---

✅ Эти утилиты легко сочетаются с `align`, `margin`, `padding`, `size`, `gap`, `display`, `flex`, `visibility` и др.
