class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    getGender() {
        return this.gender;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        alert("cân nặng bằng " + this.weight);
        return this.weight;
    }

    say() {
        console.log(this.name + " hello")
    }

    eatApple(Apple) {
        Apple.decrease();
        this.weight++;
        alert("ăn một quả")
    }
    checkA(Apple) {
        if (Apple.isEmpty() === true) {
            alert("hết táo");
        } else
            alert(Apple.getWeight())
    }

}

class Apple {
    constructor() {
        this.weight = 10;
        this.status = false;
    }

    decrease() {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    isEmpty() {
        if (this.weight === 0) {
            return this.status = true;
        } else if (this.weight > 0) {
            return this.status = false;
        }
        return this.status;
    }

    getWeight() {
        return this.weight;
    }

}

let adam = new Human("Adam", "male", 60);
let eva = new Human("Eva", "female", 46);
let apple = new Apple();
