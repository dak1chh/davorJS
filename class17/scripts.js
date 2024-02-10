// // const me = {name: `Bob`};

// let nums = [1, 2, 3];

// let greeting = `Hello world`;

// let bob = { 
//     name: `Bob`,
//     sayHello: function() 
//     {
//         console.log(`${this.name} says Hello`)
//     }
// }
// function Person(name) {
//     this.name = name;
// }

// const me = new Person(`Davor`);
// me.age = 32;
// const you = new Person(`Ile`);

// console.log(Person);
// console.log(Person.prototype);
// console.log(you.__proto__);
// console.log(me.__proto__);
// console.log(Person.prototype=== you.__proto__)

// // Person.lastName = ` Stankovska`;

// function User(name, email) {
//     this.name = name,
//     this.email = emailthis.isOnline = false;
//     this.login = function () 
//     {
//         console.log(`${this.name} has logged in`)

//     }
// }

// let bob = new User (`Bob`, `bobsky@bob.com`);
// let jill = new User (`Jull`, `jill@gmail.com`);
// jill.isPremium = true;
// bob.isAdmin = true;




const vehicle = {
    type `Generic Vehicle`,
    start: function() {
        console.log(`${this.type}` is starting)
    }
}
const car = {
    type: `Toyota`,
    model: `Camry`
}
