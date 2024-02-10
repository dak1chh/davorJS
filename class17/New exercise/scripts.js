function Person(id, first, last, age) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.age= age;

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let person1 = new Person(1, `Dino`, `Nikolovski`, 28);
function Employee (id, first, last, age, division) {
    Object.setPrototypeOf(this, new Person ( id, first, last, age));
    this.division = division;
    this.work = function () {
        console.log(`The employee ${this.firstName} works in the ${this.division} division`);
    }
}

let employee1 = new Employeer(2 `Ema`, `Cvetkovska`, 30, `HR`);
let employee2 = new Employee(3, `Maki`, `Kaki`, 35, `Finance`);

function Manager (id, first, last, age , division, team) {
    Object.setPrototypeOf(this,new Employee(id,first, last, age , divison));
    this.team = team;

    this.assignTask = function (task) {
        console.log(`The manager ${this.firstName} assigned the following task ${task} to ${this.team}`)
    }
}

let manager = new Manager(0, `Davor`, `Puzhovski`, 20, `development`, `code sprinters`);
manager.assignTask()