const arrow = (a) => {
    console.log(a)
}
/** Такая запись аналогична обычному способу записи функции */
function func(b){
    console.log(b)
}
arrow(1)
func(2)


/** Если стелочная функция содержит один аргумент ограничивать её фигурными скобками необязательно */
const arg = x => console.log(x)
arg(12)
/** Емли данных больше необходимо записывать со скобками и фигурными скобками */
const arg2 = (g, f) => {
    console.log(f, g)
    //Или
    console.log(g)
    console.log(f)
}
arg2(13, 34)
/** Также в стрелочной функции нельзя обращаться к псевдомассиву */
const arg3 = (j) => {
    console.log(arguments)
}
//arg3(1, 2, 3 )
/** Также стрелочные функции нельзя использовать как конструкор */

/** Примеры стрелочных функций */
const logText = text => console.log('text');
logText();

const sayHelloWorld = () => console.log('Hello, world!');
sayHelloWorld();

const sum = (a, b) => console.log(a + b);
sum(1,2);

const fatBodyArrowFunction = (a, b, c) => {
    // тут производятся сложные вычисления на несколько строк кода.
    // если нужно что-то вернуть из такой функции — используйте return
    // иначе функция будет вести себя как процедура
    const result1 = a + b + c;
    return result1;
};
const sumThree = `Результат ${fatBodyArrowFunction(12, 34, 53)}`
console.log(sumThree)


/** Особенности стрелочных функций:
 * Короткий синтаксис.
 * Отсутствие привязки к this (подробнее поговорим об этом дальше).
 * Нельзя использовать как конструктор (подробнее поговорим об этом дальше).
 * Нет псевдомассива arguments.
 */