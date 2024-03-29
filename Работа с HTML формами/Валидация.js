/** Проверка данных, введенных в форму, называется валидацией. */

// Существует три вида валидаций: мгновенная, по потере фокуса и по отправке формы.

/** Мгновенная валидация возможна только в тех случаях, когда в процессе ввода понятно, что значение некорректное.
 Обычно такие ошибки связаны с неправильной раскладкой клавиатуры (кириллица вместо латиницы) или вводом букв
 в цифровое поле (ip-адрес и тд.) Для этих случаев используются поля с масками; */

/** По потере фокуса — когда пользователь убирает фокус с поля, которое заполняет (кликает по другому полю, например); */

/** По отправке формы — при клике на кнопку submit (или любое другое действие, отправляющее форму). */



//Существует два разных способа проверки формы:
/**
 Проверка на стороне клиента — при заполнении в браузере, прежде чем данные будут отправлены на сервер.
 Можно валидировать форму с помощью JavaScript либо использовать встроенную проверку — есть специальные
 функции проверки формы HTML5.

 Проверка на стороне сервера — возникает на сервере после отправки данных.
 Серверный код используется для проверки данных перед их сохранением в базе данных. Если данные не проходят
 проверку валидности, ответ отправляется обратно клиенту, чтобы сообщить пользователю,
 какие исправления должны быть сделаны.
 */



// Способов валидации огромное множество. Например,  можно использовать:
/**
 CSS классы (и https://developer.mozilla.org/ru/docs/Web/CSS/:invalid);
 атрибут required (https://developer.mozilla.org/ru/docs/Web/HTML/Element/input#attr-required);
 регулярные выражения (атрибут pattern (https://developer.mozilla.org/ru/docs/Web/HTML/Element/input#attr-pattern)).
 */

//Регулярное выражение (regexp) — это шаблон, который используется для соответствия комбинаций
// символов в текстовых строках, поэтому он идеально подходит для проверки формы
// (а также для многих других целей в JavaScript). Регулярные выражения довольно сложны.

/** Доп. материалы:
 https://guides.kontur.ru/principles/validation/
 https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation#
 */