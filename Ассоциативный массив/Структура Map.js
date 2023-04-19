/**1) Создаём объект с помощью ключевого слова new.
 C помощью него можно создавать такие структуры, как объекты, строки, массивы и так далее:
 */
let map = new Map();
/**2) Используя метод .set() запишем несколько свойств с ключами различных типов:*/
map.set("1", "string");
// строка в качестве ключа

map.set(1, "number");
// цифра как ключ

map.set(true, "boolean");
// булевое значение как ключ

/**3) Обратимся к свойствам:*/
console.log(map.get(1));
console.log(map.get("1"));

/**4) Проверим, сколько элементов содержит объект map, используя свойство size:*/
alert(map.size);

/**5)Пробежимся циклом по объекту map. Для обхода ассоциативных массивов как раз подойдет цикл for..of:*/
let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
]);

/**6) Для перебора по ключам — названию фрукта, используем метод .keys() (получаем название свойства):*/
for (let name of fruits.keys()) {
    console.log(name); // apple, strawberry, blueberry
}

/**7) Для перебора по значениям — цвету фрукта, используем метод .values() (получаем значение свойства):*/
for (let color of fruits.values()) {
    console.log(color); // green, red, blue
}

/**8) Для перебора по элементам в формате [ключ, значение]  делаем следующее:*/
for (let elem of fruits) { // то же самое, что и fruits.entries()
     console.log(elem); // apple, green, strawberry, red, blueberry, blue
}