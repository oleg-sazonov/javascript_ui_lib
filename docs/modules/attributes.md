### Модуль: attributes.js

Модуль `attributes.js` предоставляет удобные методы для работы с HTML-атрибутами: установка, получение, проверка и переключение.

---

### Методы

#### `.addAttr(name, value?)`

Добавляет атрибут к каждому элементу в коллекции.

```js
$(".btn").addAttr("disabled");
$(".link").addAttr("href", "https://example.com");
```

---

#### `.removeAttr(name)`

Удаляет атрибут у всех элементов в коллекции.

```js
$(".btn").removeAttr("disabled");
```

---

#### `.getAttrValue(name)`

Получает значение указанного атрибута для всех элементов в коллекции.

```js
const values = $(".input").getAttrValue("placeholder");
```

---

#### `.hasAttr(name)`

Проверяет, есть ли у первого элемента указанный атрибут.

```js
if ($(".item").hasAttr("data-id")) {
    console.log("Атрибут найден");
}
```

---

#### `.toggleAttr(name, value?)`

Добавляет или удаляет атрибут в зависимости от его наличия.

```js
$(".link").toggleAttr("target", "_blank");
```
