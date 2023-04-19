/** Существует ли свойство в объекте?
 Обращение к имени свойства, которое отсутствует в объекте, возвращает значение undefined.*/

const obj = {a: 1};
obj.b; // undefined

/** НО! Есть вероятность, что существует свойство со значением undefined, нужно об этом помнить.*/

const obj1 = {a: 1, b: undefined};
obj1.b; // undefined



/** Оператор in — возвращает true, если свойство содержится в указанном объекте.*/

//expression in object
//expression — выражение, которое возвращает имя (ключ), которое ищется в свойстве.
const obj2 = {a: 1, c: undefined};
console.log('a'  in obj2);

'a' in obj2; // true
'b' in obj2; // false
'c' in obj2; // true