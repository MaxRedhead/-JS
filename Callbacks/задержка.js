const sum = function (a, b){
    console.log(arguments)
    console.log(a + b)
}
setTimeout(sum, 3000, 2 ,3 ,4 ,5)