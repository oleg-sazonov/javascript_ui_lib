### Hover Utilities

Файл `_hover.scss` содержит мощный набор утилит для hover-, focus-, active- и других интерактивных эффектов. Все стили построены на базе CSS-переменных из `_root.scss` и полностью поддерживают светлую и тёмную темы.

---

#### 🎨 Hover цвета текста

| Класс                 | Эффект при наведении           |
| --------------------- | ------------------------------ |
| `.text-hover-primary` | `color: var(--primary-bright)` |
| `.text-hover-success` | `color: var(--success-bright)` |
| `.text-hover-warning` | `color: var(--warning-bright)` |
| `.text-hover-danger`  | `color: var(--danger-bright)`  |
| `.text-hover-light`   | `color: var(--bright-90)`      |
| `.text-hover-dark`    | `color: var(--text-soft)`      |

Дополнительно:

-   `.text-hover-underline-*` добавляет подчёркивание при наведении.
-   `.text-hover-highlight-*` добавляет светлый фон при наведении.

---

#### 🟦 Hover фонов (background)

| Класс                | Эффект при наведении                 |
| -------------------- | ------------------------------------ |
| `.bg-hover-primary`  | `background-color: var(--primary)`   |
| `.bg-hover-success`  | `background-color: var(--success)`   |
| `.bg-hover-warning`  | `background-color: var(--warning)`   |
| `.bg-hover-danger`   | `background-color: var(--danger)`    |
| `.bg-hover-subtle-*` | Мягкий прозрачный фон через `rgba()` |

---

#### 🧱 Hover границ

Классы вида:

```scss
button.border-hover-primary:hover {
    border-color: var(--primary);
}
```

Работают с элементами: `a`, `button`, `div`, `input`, `textarea`, `section` и др.

---

#### 🧊 Hover прозрачности

| Класс                   | Значение       |
| ----------------------- | -------------- |
| `.hover-opacity`        | `opacity: 0.8` |
| `.hover-opacity-strong` | `opacity: 0.6` |
| `.hover-opacity-light`  | `opacity: 0.9` |

---

#### 🧲 Hover трансформации

| Класс          | Эффект                          |
| -------------- | ------------------------------- |
| `.hover-scale` | `transform: scale(1.03)`        |
| `.hover-lift`  | `translateY(-2px) + box-shadow` |

> В тёмной теме `.hover-lift` использует более плотную тень.

---

#### 🔁 Состояния (hover, focus, active...)

| Класс                       | Состояние       | Свойство                           |
| --------------------------- | --------------- | ---------------------------------- |
| `.hover-text-primary`       | `:hover`        | `color: var(--primary)`            |
| `.focus-bg-warning`         | `:focus`        | `background-color: var(--warning)` |
| `.active-border-success`    | `:active`       | `border-color: var(--success)`     |
| `.focus-within-text-danger` | `:focus-within` | `color: var(--danger)`             |

---

#### 💡 Комбинированные утилиты

| Класс                  | Эффект                                           |
| ---------------------- | ------------------------------------------------ |
| `.hover-combo-primary` | Цвет + фон + бордер (`primary`) при наведении    |
| `.hover-combo-surface` | Поверхностное выделение (`--hover` + `--border`) |

---

#### 🌍 Поддержка устройств

| Класс                 | Применение только на... |
| --------------------- | ----------------------- |
| `.hover-only-desktop` | Десктопах (мышь)        |
| `.hover-only-mobile`  | Мобильных устройствах   |
| `.hover-all-devices`  | Всех                    |

> Используются медиа-запросы: `(hover: hover)` и `(pointer: fine)`

---

#### 💥 Эффекты свечения

| Класс                 | Эффект                        |
| --------------------- | ----------------------------- |
| `.hover-glow-primary` | Светящееся свечение `primary` |
| `.hover-glow-success` | Светящееся свечение `success` |
| `.hover-glow-danger`  | Светящееся свечение `danger`  |

---

#### 📌 Пример

```html
<button class="btn bg-hover-primary hover-lift text-hover-light">
    Наведи на меня
</button>

<a href="#" class="text-hover-underline-primary">Ссылка с подчёркиванием</a>
```

---

✅ Эти утилиты отлично комбинируются с цветами, размерами, отступами, границами и display/flex/grid-утилитами.
