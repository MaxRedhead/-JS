const lostNumbers = [1 , 34, 2 , 667, 3];
console.log(lostNumbers)
console.log(lostNumbers[3])

let sum = 0;
for (let i = 0; i < lostNumbers.length; i++) {
    sum += lostNumbers[i]
    debugger
}
console.log(sum)