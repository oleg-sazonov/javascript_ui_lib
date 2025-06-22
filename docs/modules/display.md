### Модуль: display.js

Методы управления видимостью элементов.

---

### Методы

#### `.show()`

Делает элементы видимыми, сбрасывая свойство display.

```js
$(".panel").show();
```

---

#### `.hide()`

Делает элементы невидимыми, устанавливая display: none.

```js
$(".panel").hide();
```

---

#### `.toggleDisplay()`

Переключает видимость элементов.

```js
$(".panel").toggleDisplay();
```

---

#### `.isVisible()`

Проверяет, является ли элемент видимым.

```js
if ($(".popup").isVisible()) {
    console.log("Модалка открыта");
}
```

---

#### `.display(value?)`

Устанавливает или получает CSS-значение display.

```js
$(".box").display("flex");
const d = $(".box").display(); // "flex"
```
