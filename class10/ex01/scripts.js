let person = {
    firstName: `Bob`,
    lastName: `Bobsky`,
    age: 25,
    isStudent: true,
    hobbies: [`reading books`, `gaming`,`hiking`],
    address:{
        street: `123 Main Street`,
        city: `Skopje`,
        zipCode: 1000,
        country: `Macedonia`
    }
}
console.log(person);
console.log(typeof person);
let jasonPerson =JSON.stringify(person);
console.log(jasonPerson);
console.log(typeof jasonPerson);

let parsedPerson= JSON.parse(jasonPerson);
console.log(parsedPerson);
console.log(typeof parsedPerson);