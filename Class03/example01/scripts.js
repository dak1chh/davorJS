function sum(num1, num2)
{
    return num1+num2
}
function substracts(num1, num2)
{
    return num1 - num2
}
function multiplies(num1, num2)
{
    return num1 * num2
}
function divides(num1, num2)
{
    return num1 / num2
}
let userInput1 =prompt("Enter number 1")
let userInput2 =prompt("Enter number 2")

let number1 = parseInt(userInput1)
let number2 = parseInt(userInput2)

let sumation = sum(number1, number2);
let substraction = substracts(number1,number2);
let multiplion = multiplies(number1,number2);
let dividion = divides(number1,number2);
console.log(`The sun of the number is ${sumation}\nThe substracts is ${substraction}\nThe multiples is ${multiplion}\nThe dividion is ${dividion}`);