(function (){
    console.log(1)
})()

/** Также можно вносить круглые скобки в скобки закрывающие саму функцию
 * Определение очень простое — если после ключевого слова function есть имя,
 * то функция именованная, иначе — анонимная.*/


/** Именннованая функция*/
function sum(a, b) {
    const result = a + b;
    console.log(result);
}


/** Неименнованая функция */
const sum1 = function() {
    const result1 = a + b;
    console.log(result1);
};
