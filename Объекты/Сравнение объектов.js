/** Объекты копируются и сравниваются по ссылке:*/

const obj1 = {a: 1};

const obj2 = obj1;

obj1 === obj2; // true

obj1.b = 2;

obj1 === obj2; // true