/** function declaration - возможен вызов до объявления*/
function func1(){
    /**code*/
    console.log(1)
}
func1()


/** Function Expression - Невозможен вызов до объявления
  var, let, const*/
var func2 = function(){
    console.log(2)
}
func2()
/** или */
console.log(func2)


const func3 = function (){
    console.log(3)
}
func3()

let func4 = function (){
    console.log(4)
}
func4()
/** Лучше спрльзовать Function declaration, если нет то брать const или let */