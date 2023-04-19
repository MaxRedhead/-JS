/** Итак, ключевое слово class определяет экземпляр. Принято именовать их с большой буквы. */

// calss
class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity;
        this.hasFlat = true;
    }
    getInfo(){
        console.log('I live in ' + this.ownCity);
    }
}

const parent = new Parent('Moscow')
parent.getInfo()

/** Ключевое слово class идентифицирует блок, содержимое которого определяет члены прототипа функции. */
/** Рассмотрим пример, приведенный выше:
 Запись class Parent создает специальную функцию с именем Parent;
 Constructor определяет сигнатуру функции и ее тело (то, что записывалось через this.PROPERTY для функции-конструктора). */

// constructor
/**function Parent(ownCity){
    this.ownCity = ownCity
    this.hasFlat = true
}

Parent.prototype.getInfo() {
    console.log('I live in' + this.ownCity);
}*/