let person =
{
name: "Davor",
height: 169,
gender: `male`,
hasHair: true,
age: 20,

output: function()
{
    console.log(`The person name is ${this.name}
    person height is ${this.height} 
    person geneder is ${this.gender}
    person hasCurlyHair is ${this.hasHair}
    person age is ${this.age}
    `);
}

};
console.log(person.output());
person.name ="Dino";
person.height= 175;
person["gender"] = "male";
delete person.age;
person.output();
person.description = " name name";
person.getFullInfo = function (){

    console.log(`The person name is ${this.name}
    person height is ${this.height} 
    person geneder is ${this.gender}
    person hasCurlyHair is ${this.hasHair}
    person description ${this.description}
    `);    
}
person.getFullInfo();



let personTwo = new Object();
personTwo[`Name`]= `Dino`;
personTwo[`Height`]= 175;
personTwo[`Kg`]= 74;
personTwo[`number`]= 72420420;
personTwo[`age`]= 34;
console.log(personTwo);
console.log(`Person: ${personTwo.Name}`);
console.log(`Person: ${personTwo.Height}`);
console.log(`Person: ${personTwo.Kg}`);
console.log(`Person: ${personTwo.number}`);
console.log(`Person: ${personTwo.age}`);

