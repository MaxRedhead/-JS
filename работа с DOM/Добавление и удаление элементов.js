/** 1. Создаём элемент */
const customDiv = document.createElement('div')

/** 2. Затем заполняем этот div */
customDiv.innerHTML = "<span id = \"custom\">Hello</span>"

/** 3. Ищем родительский узел */
const app = document.getElementById('app')

document.body.insertBefore(customDiv, app)



/** Пример динамичности строк */
/** 1. Описываем переменную, которая будет контентом новых тегов */
const content = "Привет!"

/** 2. Ищем родительский элемент и добавляем новые элементы в дерево DOM */
const parent = document.getElementById("id");
parent.innerHTML = `<div><span id="custom"> ${content}</span></div>`;



/** И ещё один вариант —  метод insertAdjacentHTML. */
/** insertAdjacentHTML() разбирает указанный текст как HTML или XML и вставляет полученные узлы (nodes)
 в DOM-дерево в указанную позицию. Данная функция не переписывает имеющиеся элементы. */

/** Position определяет позицию добавляемого элемента относительно элемента, вызвавшего метод.
 Должно соответствовать одному из следующих значений (чувствительно к регистру): */
/**
 'beforebegin': до самого element (до открывающего тега);

 'afterbegin': сразу после открывающего тега element (перед первым потомком);

 'beforeend': сразу перед закрывающим тегом element (после последнего потомка);

 'afterend': после element (после закрывающего тега).
 */
const parent = document.getElementById("id");
parent.insertAdjacentHTML('afterend', `<div><span id="custom"> ${content}</span></div>`);




/** Удаление элемента */
elem.removeChild(child)
//Принимает child — элемент, который должен быть удалён.
// elem — родительский элемент, из которого будет удалён child.

/** Пример: */
/** 1. Ищем элемент, который должен быть удалён и его родителя */
const removed = document.getElementById("custom");
const div = document.querySelector("div");

/** 2. Удаляем */
div.removeChild(removed)