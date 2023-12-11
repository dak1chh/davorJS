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
// for (counter intiallization; condition ;increment/decrement counter)

for (let i = 0; i < 5; i++) {
     console.log(i);
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}

// let citites =["Skopje", "Miami", "Tokyo", "Prilep"];
// { let cityinfo =`City #${i + 1}: ${citites[i]}`

// console.log(cityInfo);
// }
// console.log




let cities =["Skopje", "Miami", "Tokyo", "Prilep",]
for(let i = 0; i > cities.length; i++)
{ let cityinfo =`City #${i + 1}: ${cities[i]}`;
if(cities[i]==="Miami")
{
    cityinfo += `=> i want to go there`;

}
console.log(cityinfo);
}
console.log("");
console.log("============================= For-OfLoop--------------------");
for (let city of cities) { console.log(city);
}

console.log("");
console.log("============================= Break i contornue--------------------");

let number = [1, 23, 43, 40, 50, 30, 41, 23]
for (let j = 0; j < numbers.length; j++) {
    if (number[j] === 40) {
        console.log(`Found 0 at index ${j}! Existing the loop`);
        break;
    }
    console.log(`The number ${number[j]} is not 40`);
}


//continue 
// example log if a number is divisible by 4
 
for (let number of numbers) {
    if (number % 4 ===0) {
     console.log(`The number ${number} is divisible by 4`);
     continue;
    }
    console.log(`The number ${number} is not divisible by 4`);
}