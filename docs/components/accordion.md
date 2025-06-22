### Accordion Component

Accordion — это компонент, позволяющий скрывать и отображать контент по клику на заголовок.

#### 📦 Что нужно для использования:

1. Добавьте HTML-структуру (пример ниже)
2. Используйте строго указанные классы (`accordion-head`, `accordion-content`, `accordion-inner`)
3. Обёртке `.accordion` можно назначить вспомогательные классы, например: `mt-20 mb-20 block-center`
4. Скрипт работает **автоматически** при подключении `accordion.js`

#### HTML-шаблон:

```html
<div class="accordion mt-20 mb-20 block-center">
    <div class="accordion-head">
        <span>Collapse first element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </div>
    </div>
    <div class="accordion-head">
        <span>Collapse second element</span>
    </div>
    <div class="accordion-content">
        <div class="accordion-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </div>
    </div>
</div>
```

#### 📜 Автоматическая инициализация:

Файл `accordion.js` содержит автоинициализацию:

```js
$(".accordion-head").accordion();
```

Это означает, что при наличии в HTML классов `.accordion-head` и соответствующей структуры, метод `accordion()` вызывается автоматически без необходимости явного вызова пользователем.

#### 📣 Добавление пользовательских обработчиков:

```js
// Accordion
$(".accordion").delegate("click", ".accordion-head", function () {
    console.log("Click on .child: ", this);
});

let t = 0;
$(".accordion-head").hover(
    () => console.log(t++),
    () => console.log(t--)
);
```
