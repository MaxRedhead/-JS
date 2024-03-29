/**
 Сервис для проверки и получения запросов:
 https://jsonplaceholder.typicode.com
 */



// Существует еще один атрибут, не менее важный, чем action — это method. Он определяет, как будет отправлен запрос.

/** Метод get */
/**
 Метод get передает данные на сервер через адресную строку браузера.
 При формировании запроса к серверу все переменные и их значения формируют последовательность вида:

 www.anysite.ru/form.php?var1=1&var2=2

 Имена и значения переменных присоединяются к адресу сервера после знака ? и разделяются между собой знаком &.
 Все специальные символы и буквы, отличные от латинских, кодируются в формате %nn, пробел заменяется на +.
 Этот метод нужно использовать, если не передается больших объемов информации.
 */



/** Метод post */
/**
 Если вместе с формой предполагается отправка какого-либо файла, этот метод не подойдет.
 Метод post применяется для пересылки данных больших объемов, а также конфиденциальной информации и паролей.
 Данные, отправляемые с помощью этого метода, не видны в заголовке URL, так как они содержатся в теле сообщения.

 По умолчанию, в теге form method="get".
 */

