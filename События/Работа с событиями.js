/**
 Когда необходимо среагировать на событие, мы назначаем обработчик.
 То есть, задаём функцию, которая сработает, как только событие произошло.
 Именно благодаря обработчикам JavaScript может реагировать на действия пользователя.
 Есть несколько способов назначить обработчики.
 */



// Часть 1
//Используя атрибут или DOM свойство.
/**
<body>

<button onClick="clickMe()">press1</button>
<button id='btn'>press2</button>

<script>
    function clickMe(){
    alert('Clicked')
}
    btn.onclick = clickMe;
</script>

</body>
 */

/** Обработчик навешивается на атрибут в тег, к названию события добавляется приставка on.
 Обработчик либо прописывается внутри, либо в скрипте. */



//Часть 2
//Через JavaScript, используя addEventListener.

/**
<body>

<button id='btn' onClick="alert('HTML Clicked')">press2</button>

<script>
    btn.onclick = function (){
    alert('JS click 1')
}
    btn.addEventListener('click', function clickMe(){
    alert('JS Clicked 2')
});// даёт возможность вызывать несколько обработчиков на одно событие
    btn.addEventListener('click', function clickMe(){
    alert('JS Clicked 3')
});
</script>
</body>
*/

//У предыдущего способа есть явный минус — больше одного обработчика события добавлять НЕЛЬЗЯ.
// Также существуют события, которые нельзя назначить через DOM-свойство, но можно через addEventListener.
// Например, событие DOMContentLoaded, которое срабатывает, когда завершена загрузка и построение DOM-документа.
//Для этого существует специальный метод — addEventListener.

/** element.addEventListener(event, handler [, phase]); */

/**
 event — имя события, для которого мы хотим зарегистрировать этот обработчик;

 handler — код, содержащий функцию обработчика, которую мы хотим запустить в ответ;
 
 phase — фаза (обычно не используется, по умолчанию = false), подробнее будем говорить в следующих юнитах;

 phase true — событие будет перехвачено по дороге вниз;

 phase false — событие будет поймано при всплытии.
 */