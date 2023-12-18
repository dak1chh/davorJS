function animalSpeak (animalType, animalBread){
    if (animalType === "cat"){
        console.log `The ${animalSpeak} of breed ${animalBread} meows`}
    

        if (animalType === "dog"){
            console.log`The ${animalType} of breed ${animalBread} roaws` }

            if (animalType === "Tiger"){
                console.log`The ${animalType} of breed ${animalBread} roaws`}
    
}

let cat =
{
    type: "cat" ,
    breed: "Ragdool" ,
    speak: function()
    {
        // console.log("The cat meows");
        console.log(`The animal of ${this.type} and of breed ${this.breed} meows`);
    }
};
cat.speak();
console.log(cat.breed);


let person = new Object();
person.name = `Petko`;
person.age = 25 ;
console.log(person);

let personTwo = {}
personTwo[`Height`] = 185;
personTwo[`gender`] = `male`;
personTwo[`hobies`] = [`smoking`, `drinking`];
console.log(personTwo);
console.log(`PersonTwo: ${personTwo.hasOwnProperty(`gender`)}`)
console.log(`PersonTwo: ${personTwo.hasOwnProperty(`salary`)}`)