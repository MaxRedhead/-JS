class Amazing{
    static cool(){
        console.log('cool')
    }
    wow(){
        console.log('wow')
    }
}

class Wonderful extends Amazing{
    static awesome(){
        super.cool();
        console.log('awesome')
    }
    great(){
        super.cool();
        console.log('great')
    }
}

Amazing.cool()
Wonderful.cool()
Wonderful.awesome()

/** Ключевое слово static позволяет объявить статические методы и свойства в классе.
 * Они добавляются непосредственно в объект-функцию, а не в объект-прототип. */