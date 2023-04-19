const a = 1;
const b = 2;
const result = a + b;

switch (result) {
    case 0:
        console.log('результат равен 0');
        break;
    case 1:
        console.log('результат равен 1');
        break;
    case 2:
        console.log('результат равен 2');
        break;
    case 3:
        console.log('результат равен 3');
        break;
    default:
        console.log('результат не равен числам 1,2,3');
}


switch (result) {
    case (result < 0):
        console.log('результат меньше 0');
        break;
    default:
        console.log('результат больше или равен 0');
}
