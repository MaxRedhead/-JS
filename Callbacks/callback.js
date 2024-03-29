/** Callback или функция обратного вызова — функция,
 * которая выполняется в конце операции, когда все остальные операции уже завершены.  */

/** Области использованния */
//Когда необходимо выполнить какой-то код по
// завершении асинхронного действия (загрузка информации из базы данных, например).
function loadData(url, cb) {
    let result = doSomethingAndGetResult(url)
// onload сработает тогда, когда result полностью прогрузится и колбэк будет вызван
    result.onload = function () {
        cb();
    }
}

loadData('url', function(){
    // code
})


//С помощью колбэка мы контролируем действие.
// Как аргумент во многих методах массива.
const arr = [1, 2, 3]
arr.forEach(function(item){
    console.log(item+1)
})