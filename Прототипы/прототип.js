/** Прототип (Prototype) — это объект, который служит вспомогательным объектом (делегатом),
 * к характеристикам которого может обратиться оригинальный объект, в случае,
 * если сам оригинальный объект не обладает нужной характеристикой.*/

const person = {
    city: 'Moscow',
};

const student = Object.create(person);
student.ownCity = 'Piter';

console.log(Object.getPrototypeOf(student))

for(let key in student){
    if(student.hasOwnProperty(key)){
        console.log(key)
    }
}
/** Прототип хранит общий функционал и предоставляет к нему совместный доступ множеству объектов.
 * Не нужно повторять один и тот же функционал в каждом объекте.
 * Общие методы можно вынести в отдельный объект и через механизм прототипа обеспечить к нему совместный доступ.
 Каждый объект имеет ноль или несколько свойств, которые называются собственными (own) и
 единственную внутреннюю ссылку на прототип.*/



/** Cвойство __proto__ содержит внутреннюю ссылку на прототип объекта.
 Это свойство есть абсолютно у всех объектов в JavaScript.
 При создании объекта через литерал {}, его прототипом автоматически становится специальный built-in объект,
 который уже содержит ряд методов для работы с объектом.
 Данный прототип единственный и будет предоставлять доступ к своим методам всем объектам, созданным в программе.*/

/**obj < Vía: 1}
a: 1
Y
_proto
• constructor: f Object)
• hasOwnProperty: f hasOwnProperty()
• isPrototypeOf: f isPrototype0f()
• propertyIsEnumerable: f propertyIsEnumerable ()
• toLocaleString: f toLocaleString()
• toString: f toString()
• valuef: f value0f ()
_defineGetter_: f _.
_defineGetter__()
defineSetter: f __defineSetter_.
_()
LookupGetter_: f lookupGetter_.
_()
_LookupSetter_: f
_LookupSetter__
_()
• get __proto__: f__proto__()
• set proto_
_: J_ proto__
_()
*/

/**Таким образом, через __proto__, можно обращаться ТОЛЬКО через консоль.
 * В программах так писать нельзя!Это свойство является скрытым системным и такое обращение является ошибкой.
 Чтобы получить доступ к __proto__ можно использовать свойство getPrototypeOf.*/

Object.getPrototypeOf(student); // person

