let arr = [ "orange"];
arr.unshift("apple");// arr = ["apple", "orange"];
arr.push("strawberry");// arr = ["apple", "orange", "strawberry"];
arr.shift(); //arr =  ["orange", "strawberry"];
arr.pop();// arr =  ["orange"];
console.log(arr)


let arr1 = ["Я", "прохожу", "курс"];
arr1.splice(arr1.length, 0, "в", "Skillfactory");
console.log( arr1 );

let arr2 = [ "Сегодня"];
arr2.concat(["солнечно"]);
console.log(arr2)