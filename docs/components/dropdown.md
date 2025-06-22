### Dropdown Component

Dropdown — это компонент, позволяющий отображать выпадающее меню при наведении или клике на элемент. Меню связывается с переключателем по ID.

### 📦 Что нужно для использования:

1. Добавьте HTML-структуру (пример ниже)
2. Кнопке задайте уникальный `id` и класс `dropdown-toggle`
3. Выпадающему меню добавьте атрибут `data-toggle-id="ID_КНОПКИ"`
4. Оберните всё в контейнер с классом `dropdown`
5. Скрипт работает **автоматически** при подключении `dropdown.js`

### HTML-шаблон:

```html
<div class="dropdown">
    <button id="dropdownBtn" class="btn btn-primary dropdown-toggle">
        Dropdown Menu
    </button>
    <div class="dropdown-menu" data-toggle-id="dropdownBtn">
        <a href="#" class="dropdown-item">Item 1</a>
        <a href="#" class="dropdown-item">Item 2</a>
        <a href="#" class="dropdown-item">Item 3</a>
    </div>
</div>
```

---

### 🧠 Варианты использования:

Dropdown можно активировать:

#### По наведению:

```js
$(".dropdown-toggle").dropdownByHover();
```

---

#### По клику:

```js
$(".dropdown-toggle").dropdownByClick();
```

---

Оба метода работают **автоматически**, если в HTML присвоен класс `dropdown-toggle`. Можно также вызывать вручную.

### ⚙️ Автоматическая инициализация:

```js
$(".dropdown-toggle").dropdownByHover();
$(".dropdown-toggle").dropdownByClick();
```

---
