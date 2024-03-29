/** Объект — это неупорядоченная коллекция свойств,
 *  где каждое свойство состоит из имени (ключа) и ассоциированного с ним значения.
 *  Объекты в JavaScript можно называть ассоциативными массивами, так как они состоят из пары ключ-значение.
 *  Они предназначены для хранения сложных структур данных.
 *
 *
 *  Объект создается с помощью фигурных скобок {...} с необязательным списком свойств.
 *  Свойства записываются в виде пары 'ключ: значение', где ключ — это строка,
 *  а значение может быть выражено чем угодно.*/

const user = {

    name: 'Andrei',

    surname: 'Ivanov',

    age: 18,

    position: 'developer',

};

//пустой

const obj = {};
//с одной парой ключ-значение

const obj1 = {a: 1};
//с двумя парами ключ-значение

const obj2 = {

    a: 'hello',
    b: 123,

};
//Либо используя ключевое слово new

//пустой, который затем наполняется свойствами

const obj3 = new Object();



/**примеры*/
const obj4 = {
    a: 1,
    hello: 2,
    '': 3,
    123: 4,
    var: 5,
};

/** Если значение свойства объекта является функцией, то такое свойство именуется методом.
 Метод — свойство, которое может быть вызвано.*/
const obj5 = {
    a: 1,
    f: function() {
        console.log(1);
    },
};