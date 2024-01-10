console.log("=============================Arrays==========================");

let testArray = [1, 23, 234, 4, 543_545, 3];
console.log(testArray[2]);
console.log(testArray.length);

// array built in methods

// push(item(s))
testArray.push(100);
testArray.push(500,1000,1500);
console.log(testArray);

// pop
let lastItem = testArray.pop();
// unshift(item);
testArray.unshift(123_123);
// shift
let firstItem=testArray.shift();


// splice

testArray.splice(1, 3, 1_000_000,)
console.log(testArray);

let objectArray = [
    {id:1, firstName: "Bob", lastName: "Bobsky"},
    {id:2, firstName: "Boba", lastName: "Bobskaya"},  
];
console.table(objectArray[0].firstName + " " + objectArray[1].lastName);


// function sum(num1, num2){
//     return num1+num2;
// }
// function subtract(num1, num2){
//     return num1 - num2;
// }

// let functionsArray = [
//     sum,
//     subtract
// ]

// console.log(functionsArray[0](14,24)); 
// ne se koristi


let whileTestArray = [ 2, 23, 24, 25, 100];
let counter = 0;
while(counter < whileTestArray.length) {
    console.log(whileTestArray[counter]);
    counter ++;
}

let input = "";
do {
    input = prompt("Enter name")
} while (input !== "" || input === null || input === undefined) 

let students = ["Sirma", "Slavko", "Boris", "Saso", "Vladimir", "Marija"];
for (let i =0; i <students.length, i++)
{
    console.log(`Student #${i+1}.${students[i]}`);
}




