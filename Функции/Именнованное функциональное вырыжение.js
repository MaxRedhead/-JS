const sum = function summa() {
    const result = a + b;
    console.log(result);
};

/** Их используют тогда, когда в функции, заданной как Function Expression, необходимо сделать рекурсию.
 * Рекурсия — ситуация, при которой функция вызывает сама себя внутри своего тела.*/


/** Function Declaration */
function fibonacci() {
    // code
    fibonacci(); // функция вызывает сама себя
};
fibonacci()


/** Function Expression */
const fibo = function fibonacci1() {
    // тут можно  использовать "fibonacci1()"
    fibonacci1(); // функция вызывает сама себя
};

/** Вне функции fibonacci() не сработает, а fibo() — сработает.*/