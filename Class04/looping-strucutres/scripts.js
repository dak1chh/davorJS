console.log
console.log("============================= Looping Strucutres--------------------");
let counter = 0;
while (counter < 5) 
{
counter++;
console.log(counter);
}
// counter mora counter++ ako ne Bag
//  counter prai  sam


// console.log(count);
// count++;
// console.log(count);
// count++;
// console.log(count);
// count++;
// console.log(count);
// count++;
//  ova ne go biva mnogu pisuvam  









console.log
console.log("============================= While Loop--------------------");


let students =["Bob Bobsky", "John Johnsky", "Petko Petkovski"]
// console.log(`Student #1: Bob Bobsky`)
// console.log(`Student #2: John Johnsky`)
// console.log(`Student #3: Petko Petkovski`)

let studentCounter = 0;
while (studentCounter <= students.length - 1)
{
console.log(`Student #${studentCounter +1}: ${students[studentCounter]}`);

studentCounter++;
}

console.log
console.log("============================= Do-While Loop--------------------");
let doWhileCounter = 0;
do 
{
console.log(doWhileCounter);
doWhileCounter++;

} while(doWhileCounter < students.length);



console.log
console.log("============================= For Loop--------------------");
