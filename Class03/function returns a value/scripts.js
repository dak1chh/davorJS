console.log("")
console.log("===========function retursns vlaue")

function logNumbers(num1, num2, num3){
    console.log(`Number 1 ${num1}`);
    console.log(`Number 2 ${num2}`);
    console.log(`Number 3 ${num3}`);
    console.log("");
}
logNumbers(10, 20, 30);
logNumbers();
logNumbers(10, 20);
logNumbers(10, 20, 30, 40, "extra text");

// default (optional parameters)

function logData(data1, data2 = 1000, data3 = "default value") 
{
console.log(`Data 1: ${data1}`);
console.log(`Data 2: ${data2}`);
console.log(`Data 3: ${data3}`);
console.log("");
}
logData(23, 50, 100);
logData(10, 20);
logData(10, 20, 30, 40);
logData();







console.log("");
console.log("====================JAVA SCRIPT BUILT IN FUNCTIONS");
// #alert
// #prompt 
// #console.log
// purseInt(value)parses value into integer
// purseFloat(value)

console.log(parseInt(2.252));
// 2 
console.log(parseFloat(2.252));
// 2.252

// Number(value)
let parsedNumberValue =Number("234.4343");
console.log(parsedNumberValue)
//  # boolean (value)
console.log(Boolean(""));
// False
console.log(Boolean(" "));
// true

// newer syntax ==> instead of Boolean
console.log(!!"");
console.log(!!" ");


// parseint
// parseload
// number
// using the + operator ==> (number)

console.log(Number("123432.3434"));
console.log(Number(+"123432.3434"));