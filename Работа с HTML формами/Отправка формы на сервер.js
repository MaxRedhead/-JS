/** Чтобы связать элементы формы, можно использовать тег label. */

/**
 Он устанавливает связь между определенной меткой, в качестве которой обычно выступает текст, и элементом формы
 (<input>, <select>, <textarea>). Такая связь необходима, чтобы изменять значения элементов формы при нажатии
 курсороммыши на текст. Кроме того, с помощью <label> можно устанавливать горячие клавиши на клавиатуре и переходить
 на активный элемент подобно ссылкам.
 */

// Связь можно установить двумя способами:
/**
 Использовать id внутри элемента формы и указании его имени в качестве атрибута for тега <label>;
 Поместить элемент формы внутрь контейнера <label>.
 */

/**
 Для отправки данных тег form содержит специальный атрибут — action.

 Он указывает на обработчик, к которому обращаются данные формы при их отправке на сервер.
 В качестве обработчика выступает url (ссылка на сервер). После выполнения обработчиком действий
 по работе с данными формы он возвращает новый HTML-документ.

 Если атрибут action отсутствует, текущая страница перезагружается, возвращая все элементы формы
 к их значениям по умолчанию.
 */