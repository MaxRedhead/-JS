/** Как только функция встречает return она заканчивает своё выполнение */
function getSum(a, b){
    const result  = a + b
    return result
}

const str = `Результат ${getSum(1, 2)}`
console.log(str)

