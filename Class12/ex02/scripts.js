function sayHello(){
    console.log("Hello");
    return "HELLO";
}
sayHello();
let hello = sayHello();
console.log(hello);

function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
greet("Pink", "Panther");
let greetSomeone = greet("Bob", "Bobsky");
console.log(greetSomeone)

function getPI(){
    console.log("The value of PI is:");
    return Math.PI;

}
let pi= getPI();
console.log(pi);

function multiply(num1, num2) {
    return num1 * num2;
}
let multiplyResult = multiply(200, 3);
console.log(multiplyResult);


function getAverage (numbersArray) {
    let sum= 0;
    for (const number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}
let average = getAverage([100,200,300,400]);
console.log(average)


let students = [
    {id: 1, firstName: "Elena", lastName: "Mitevska"},
    {id: 2, firstName: "Stefan", lastName: "Tomikj"},
    {id: 3, firstName: "Antonio", lastName: "Kazikj"},
    {id: 4, firstName: "Dimitar", lastName: "Nikolov"}
];
function printStudent(dimitar){
    for (let student of dimitar) {
        console.log(`Student #${student.id}. ${student.firstName} ${student.lastName}`);
    }
}
printStudent(students);


