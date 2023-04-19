//item — очередной элемент массива,
// index — его индекс,
// array — сам массив.


let arr = [1,2,3];
let result = arr.map(function(item, index, array) {
    return item + 1
});

console.log(arr);
console.log(result);


let arr1 = [1, 2, 3];
let result1 = arr1.reduce(function(sum,  item, index, array){
    return sum + item
}, 0);
console.log(result1);