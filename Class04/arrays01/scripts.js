console.log("====================ARRAYS===================");
// grupiranje na sredni vrednosti vo edna struktura 

console.log("");
console.log("===== Creating an Array========");
// we use square brackets [] to create an array

let emptyArray =[];
console.log(emptyArray);
console.log(typeof emptyArray);
console.log(emptyArray.length);

//array of strings
let fruits= ["orange", "apple","Pear", "Strawberry"];
console.log(fruits);
console.log(fruits.length);

// ni dozvoluva  edno pod drugo da se napsihani 
//podobro se gleda.
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
console.log(days);


let digits = [, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(digits);

let mixedArray = [1, 2, 3, true, "Wow is this possible", false, null, 500, "Yes it is, its Java Scripts :)"];
console.log(mixedArray);
//array of values with different types
// DONT do this !!!

console.log("");
console.log("==========Accesing items in an Array===========");
//by index =>  sekoj idem ima negovo sopstven index
// JavaScript arrays are zero-indexed => indexing always starts from 0 
console.log(days[2]);
console.log(days[1]);
console.log(days[0]);

let someDay= days[5];
console.log(someDay);
console.log(days[10]);
console.log(days[days.length - 1]);


console.log("");
console.log("========= Chaning items values============");
console.log(fruits[2]);
fruits[2] = "Peach";
console.log(fruits[2]);

days[3] ="Someday";
//
console.log(days);


//1 push
console.log(fruits);
fruits.push("Fig");
console.log(fruits);
console.log(fruits.length);

fruits.push("Raspberry", "Banana", "Papaya")
console.log(fruits);
console.log(fruits.length);

//unishift
console.log(fruits[0]);
fruits.unshift("Pear");
console.log(fruits[0]);

fruits.unshift("Olive", "Hazelnut");
console.log(fruits);


console.log("");
console.log("======Deleting items======");


//1pop
console.log(fruits);
fruits.pop();
console.log(fruits);

let lastItem = fruits.pop();
console.log(`The item ${lastItem} has been removed`);
console.log(fruits);



//2shift trga prviot

fruits.shift();
console.log(fruits);
let firstItem = fruits.shift();
console.log(firstItem);
console.log(fruits);


// 3splice
// console.log("");
// console.log(days);
// days.splice(2, 2);
// console.log(days);

//3splce od sredina 
console.log(days);
let removedDays = days.splice(2, 2);
console.log(`The ${removedDays} has beend removed`);


console.log(days);
days.splice(1);
console.log(days);
