const sum = function (a, b){
    console.log(a + b)
}

const intervalId = setInterval(sum, 1000, 2 ,3 ,4 ,5)
const timeoutId = setTimeout(function (){
    clearInterval(intervalId)
}, 5000)

clearTimeout(timeoutId)
