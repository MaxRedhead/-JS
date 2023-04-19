/** Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль,
 * начиная от первого и заканчивая вторым. Используйте setInterval.*/

function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

logNumbers(5, 15);