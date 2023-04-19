/** Statement внутри тела цикла (всё, что заключено в фигурные скобки)
// выполняется, если выражение condition возвращает true

//IncrementExpression выполняется каждую итерацию.


/**for ([initialization]; [condition]; [incrementExpression]) {
 *     Statement
 }*/




// Инициализировали переменную i, которая является счётчиком
// Объявили условие продолжения i < 10
// Написали выражение, которое будет менять шаг цикла (инкремент)

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}


for (;;) {

    console.log('infinity loop')

}
