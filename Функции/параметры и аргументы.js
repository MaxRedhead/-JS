function getSum(a, b){
    console.log(a + b)
    console.log(arguments)
}
getSum(1, 2, 4)


/** можно задавать значения по дефолту*/
function log(a = 0) {

    console.log(a);

}