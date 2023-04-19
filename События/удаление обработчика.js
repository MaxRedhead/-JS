/** Существует еще один метод для работы с событиями, который называется removeEventListener.
 * Он нужен для того, чтобы удалять обработчики событий.  Это может быть полезно,
 * когда вы точно знаете, что событие больше не должно выполняться или существует условие для его отмены.
 * В этом случае необходимо воспользоваться removeEventListener.  */

// Метод имеет такой же синтаксис, как и addEventListener, и использовать они должны строго одну и ту же функцию.
//element.removeEventListener(event, handler [, phase]);

// Где:
/**
 event — тип события, которое нужно удалить,

 handler — функция-обработчик, которую мы удаляем,

 phase — фаза (обычно не используется, по умолчанию = false)
 */

//ВЕРНО:
/**
 <button onClick="click()" id="btn">Press</button>

 <script>
 function click1() {
    alert('Click1');
};

 btn.addEventListener("click", click1); // Click1
 btn.removeEventListener("click", click1); //
 </script>
 */


// НЕВЕРНО:
/**
 <button onClick="click()" id="btn">Press</button>

 <script>
 btn.addEventListener("click", function() {
    alert('Click1');
};); // Click1
 btn.removeEventListener("click", function() {
    alert('Click1');
};); //
 </script>
 */