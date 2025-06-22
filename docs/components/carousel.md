### Carousel Component

Универсальный компонент карусели на JavaScript, с поддержкой:

-   Автопрокрутки
-   Переключения по стрелкам и точкам
-   Кастомизации стрелок, размеров и поведения
-   Динамического создания HTML-структуры
-   Ленивая загрузка изображений (`loading="lazy"`)

---

#### 📦 Что нужно для использования:

1. Добавьте HTML-структуру вручную (пример ниже) или создайте карусель динамически через `createCarousel()`
2. Используйте строго указанные классы:  
   `carousel`, `carousel-indicators`, `carousel-inner`, `carousel-slides`, `carousel-item`, `carousel-prev`, `carousel-next`, `carousel-prev-icon`, `carousel-next-icon`
3. Скрипт работает **автоматически** при подключении `carousel.js`

---

### 1. HTML-разметка (ручная)

```html
<div class="carousel" id="carousel">
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item active">
                <img src="img1.jpg" alt="Slide 1" loading="lazy" />
            </div>
            <div class="carousel-item">
                <img src="img2.jpg" alt="Slide 2" loading="lazy" />
            </div>
            <div class="carousel-item">
                <img src="img3.jpg" alt="Slide 3" loading="lazy" />
            </div>
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">‹</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">›</span>
    </a>
</div>
```

#### 📜 Автоинициализация

```js
$(".carousel").carousel();
```

Это означает, что при наличии в HTML классов указанных выше и соответствующей структуры, метод carousel() вызывается автоматически без необходимости явного вызова пользователем.

---

### 2. Создание динамической карусели

Карусель будет помещена в указанный контейнер:

```js
$(".card-carousel").createCarousel({
    images: [
        {
            src: "https://example.com/image1.jpg",
            alt: "First slide",
        },
        {
            src: "https://example.com/image2.jpg",
            alt: "Second slide",
        },
        {
            src: "https://example.com/image3.jpg",
            alt: "Third slide",
        },
    ],
    width: "350px",
    height: "300px",
    autoplay: false,
    showDots: true,
    showArrows: true,
    arrowsOpacity: true,
    stopAutoplayAtEnd: false,
});
```

---

### ⚙️ Параметры (для `createCarousel` и `carousel`)

| Параметр            | Тип        | По умолчанию | Описание                                                                 |
| ------------------- | ---------- | ------------ | ------------------------------------------------------------------------ |
| `images`            | `object[]` | `[]`         | Массив объектов `{ src, alt }` для изображений                           |
| `autoplay`          | `boolean`  | `true`       | Автоматическое перелистывание слайдов                                    |
| `duration`          | `number`   | `3000`       | Интервал между слайдами (в миллисекундах)                                |
| `width`             | `string`   | `'900px'`    | Ширина карусели                                                          |
| `height`            | `string`   | `'500px'`    | Высота блока `.carousel-inner`                                           |
| `prevArrow`         | `string`   | SVG иконка   | HTML-код кастомной стрелки "назад"                                       |
| `nextArrow`         | `string`   | SVG иконка   | HTML-код кастомной стрелки "вперёд"                                      |
| `showDots`          | `boolean`  | `true`       | Показывать индикаторы (точки)                                            |
| `showArrows`        | `boolean`  | `true`       | Показывать стрелки                                                       |
| `arrowsOpacity`     | `boolean`  | `true`       | Управлять прозрачностью стрелок (если `false`, стрелки всегда прозрачны) |
| `stopAutoplayAtEnd` | `boolean`  | `false`      | Остановить автопрокрутку на последнем слайде                             |

---
