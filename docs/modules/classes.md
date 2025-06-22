### Модуль: classes.js

Методы для добавления, удаления и проверки CSS-классов.

---

### Методы

#### `.addClass(...classNames)`

Добавляет один или несколько классов к элементу.

```js
$(".card").addClass("highlight", "border");
```

---

#### `.removeClass(...classNames)`

Удаляет один или несколько классов у элемента.

```js
$(".card").removeClass("active");
```

---

#### `.clearClasses()`

Очищает все классы у элемента.

```js
$(".tag").clearClasses();
```

---

#### `.toggleClass(className)`

Переключает наличие класса у элемента.

```js
$(".box").toggleClass("open");
```

---

#### `.hasClasses(...names)`

Проверяет, содержит ли элемент указанные классы.

```js
if ($(".btn").hasClasses("btn", "btn-primary")) {
  ...
}
```

---

#### `.containsClass(className)`

Проверяет, содержит ли элемент указанный класс.

Альтернативное имя для `.hasClasses(className)`
