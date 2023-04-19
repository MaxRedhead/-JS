/**Дочерние узлы делятся ещё на два типа:
 Дочерние узлы (childNodes) — элементы, которые лежат непосредственно внутри того элемента,
 к которому обращаются (неглубокая вложенность): body для HTML.

Потомки (children) — все элементы, которые лежат внутри тега, включая вложенные в другие теги: body, div, ul, li, b
 для HTML.
 Для всех узлов:

    childNode, firstChild, lastChild

Только для узлов-элементов:

children, firstElementChild, lastElementChild

Родительские узлы определяются однозначно. Обратиться к родительскому свойству можно через parentElement или parentNode.
 Они оба возвращают родителя.
    Но есть небольшой нюанс:
    parentElement вернёт узел-элемент,
    parentNode — любого родителя.
    Пример:*/

document.documentElement.parentNode === document
document.documentElement.parentElement === null

/** ВАЖНО!  document — не узел, а объект.
    Для всех остальных узлов результат одинаковый. */


/** firstChild, lastChild

Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему
 дочернему элементу из списка childNodes.

 Проверить, существуют ли вообще дочерние узлы, можно с помощью функции elem.hasChildNodes().

 childNodes — это псевдомассив, который можно перебрать с помощью for ... of.

 ВАЖНО! Цикл for ... in не подходит для перебора.
 Методы массивов для childNodes НЕ работают, но его можно преобразовать в массив,
 используя методы built-in object Array, а затем использовать необходимые методы. Например, Map или forEach.

 ВАЖНО! Изменить DOM, оперируя элементами childNodes, НЕЛЬЗЯ.
 Для этого существуют специальные методы, о которых вы узнаете далее.*/