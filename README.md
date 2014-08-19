# [Intecmedia.Bootstrap HTML Template](https://github.com/intecmedia/Intecmedia.Bootstrap)
Это внутренний стандарт/шаблон для верстки сайтов компании [Intecmedia](http://intecmedia.ru)

## Особености:
* Основан на Bootstrap 3.1.1 
* Встроен jQuery v1.11.1
* Встроен Font Awesome 4.1.0
* Основан на LESS (для обработки на клиенте используется less.js, на сервере lessphp)
* Встроена работа с media=print, responsive-css и HTML5-разметки (для IE используется HTML5 Shiv)
* Содержит базовую типографику текста, форм, таблиц, списков, заголовков
* Совсместимо со всеми современными браузерами (минимальная версия Internet Exploere это 8 -- используйте классы `.lt-ie9`, `.lt-ie8` и `.lt-ie7`)

## Примечания:
* Перед началом работы определите основные переменные в файле `css/variables.less`
* Дополнительный css должен содержатся в файле `css/style.less`
* Дополнительный javascript должен содержатся в `js/application.js`

## Если не работает Less.js в Chrome
Ошибка в консоли браузера: `Cross origin requests are only supported for HTTP`. 
Для просмотра html используйте веб-сервер или перезапустить хром с опцией `chrome -allow-file-access-from-files`.

## Watch mode
Для включение watch-режима запустите в консоли браузера следующией: window.less.watch()

## Стилистика кода

### CSS/Less
* Отступы в четыре пробела
* Каждый селектор находится на отдельной строке
* Открывающя скобка находится на одной строке с слектором
* Закрывающая скобка находится на отедельной строке после атрибутов стилей
* Крупные блоки заключаются в открывающий и закрывающий комментарий
* Остальные подробности описаны в [Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css/tree/master/translations/ru-RU).

#### пример
```less
/* block */
.foo,
.bar {
    font-size: 14px;  
    width: 100px;  
    .bar-inner {
        color: #0000FF;
        border: 1px solid #FF0000;
    }
}
/* /block */
```

### HTML
* Отступы в четыре пробела.
* Не делайте отсутупы внутри `html`, `body`, `script`, or `style`. отступы только в `head` и других элементах.
* Атрибуты заключены в двойные ковычки.
* Все блочные теги на отедельной строке.
* Крупные блоки заключаются в открывающий и закрывающий комментарий.
* Остальные подробности описаны в [jQuery HTML Style Guide](http://contribute.jquery.org/style-guide/html/).

#### пример
```html
<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Intecmedia.Bootstrap</title>
    <meta name="author" content="">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet/less" href="css/style.less" />
    <script>
    $(function() {
        $("p").text( document.title );
    });
    </script>
    <script src="js/jquery.js"></script>
</head>
<body>
<p>Hello there!<p>
</body>
</html>
```

### Javascript
* Отсупы в четыре пробела
* Остальные подробности описаны в [jQuery JavaScript Style Guide](http://contribute.jquery.org/style-guide/js/)


## Компоненты:
* [Bootstrap](http://getbootstrap.com/): Apache License v2.0
* [Less.php](http://lessphp.gpeasy.com): Apache License v2.0
* [less.js](http://lesscss.org ): MIT/GPL3 Licensed
* [jQuery](http://jquery.com/): MIT/GPL license
* [HTML5 Shiv](https://code.google.com/p/html5shiv/): MIT/GPL2 Licensed
* [Respond.js](https://github.com/scottjehl/Respond): MIT Licensed
* [es5-shim](https://github.com/es-shims/es5-shim): MIT Licensed
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/): MIT License

## Ссылки:
[Less](http://lesscss.org/)
[Intecmedia.Bootstrap HTML Template](https://github.com/intecmedia/Intecmedia.Bootstrap)
[jQuery JavaScript Style Guide](http://contribute.jquery.org/style-guide/js/)
[jQuery HTML Style Guide](http://contribute.jquery.org/style-guide/html/).
[Principles of writing consistent, idiomatic CSS](https://github.com/necolas/idiomatic-css/tree/master/translations/ru-RU).
