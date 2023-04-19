class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity || 'Moscow';
        this.hasFlat = true;
    }
    getInfo = function (){
        return ('I live in ' + this.ownCity)
    }
}

class Child extends Parent {
    constructor(isStudent, city, ownCity){
        super(ownCity);
        this.isStudent = isStudent;
        this.city = isStudent ? city : ownCity;
    }
    getInform() {
        if (this.isStudent) {
            return `I live and study in ${this.city}`
        } else {
            return super.getInfo();
        }
    }
}

const student = new Child(true, 'Piter')
console.log(student.getInform())

const employee = new Child(false, 'New York')
console.log(employee.getInfo())

console.log(student instanceof Parent)