### Modal Component

Модальные окна создаются динамически с помощью метода `createModal()` и управляются через метод `modal()`. Окно реализовано на основе `div.modal`, поддерживает анимации, закрытие по клавише Esc, кастомные кнопки и вставку HTML-строки или DOM-элемента в качестве тела окна.

---

#### 📦 Использование

Добавьте элемент с `data-toggle` и `data-target`:

```html
<a
    href="#"
    class="btn btn-primary"
    data-toggle="modal-example"
    data-target="#exampleModal"
    >Открыть окно</a
>
```

Создайте окно динамически:

```js
const carouselContainer = document.createElement("div");
carouselContainer.classList.add("card-carousel");

$(carouselContainer).createCarousel({
    images: [...],
    width: "350px",
    height: "250px",
    autoplay: true,
});

$('[data-toggle="modal-example"]').click((e) => {
    if (!document.querySelector(".modal")) {
        $(e.target).createModal({
            text: {
                title: "Слайдер в модалке",
                body: carouselContainer // Можно использовать и строку
            },
            btns: {
                count: 2,
                settings: [
                    ["Закрыть", ["btn-danger"], true],
                    ["Сохранить", ["btn-success"], false, () => alert("Saved")]
                ]
            }
        });
    }
});
```

> Атрибут [data-toggle], в примере это: '[data-toggle="modal-example"]' указанный заранее в HTML-элементе, используется как триггер (элемент) на котором будет вызвано модальное окно.

> Атрибут [data-target] используется внутри функции modal()

---

#### 🔧 Параметры `createModal()`

```js
$(element).createModal({
    text: {
        title: "Заголовок окна",
        body: "HTML или DOM-элемент",
    },
    btns: {
        count: 2,
        settings: [
            ["Текст", ["btn"], true, () => console.log("callback")],
            ["Текст", ["btn"], false],
        ],
    },
});
```

| Параметр   | Тип                      | Описание                                           |
| ---------- | ------------------------ | -------------------------------------------------- |
| `title`    | `string`                 | Заголовок модального окна                          |
| `body`     | `string` / `HTMLElement` | Содержимое окна (строка HTML или DOM-элемент)      |
| `count`    | `number`                 | Количество кнопок                                  |
| `settings` | `array[]`                | Кнопки: `[текст, классы[], закрывать?, callback?]` |

---

#### 📜 Поведение закрытия

Окно закрывается, если:

-   Нажать на крестик или кнопку с `data-close`
-   Кликнуть по фону `.modal`
-   Нажать клавишу **Escape**

Если модалка была создана через `createModal()`, она автоматически удаляется из DOM после закрытия.

---
