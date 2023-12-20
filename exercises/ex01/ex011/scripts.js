// let myName; myName ="Davor";
// console.log(myName);

// let varNumber = 15;
// console.log(varNumber);


// let firstName ="Davor";
// console.log(`Your name is ${firstName}`);

// let varBool =false;
// console.log(varBool);

// let varUndefined;
// console.log(varUndefined);

// let varObject = [ 1, 2 ,3 ,4 ,5];
// console.log(varObject);

// let varTrueObject=true;
// console.log(varTrueObject);


// //  zadaca 2

// function typeReturn(input)
// { 
//     return typeof input;
// }

// //   object
// console.log(typeReturn([ 1, 2 ,3 ,4 ,5]));

// // bolean
// console.log(typeReturn([false]));

// // Numb
// console.log(typeReturn(15));

// //  string 
// console.log(typeReturn('String'));

// //  Undefined
// console.log(typeReturn());

// // False
// console.log(typeReturn(varTrueObject));


// //  zadaca 3


// let number = prompt("Enter a number");
// let parsedNumber= parseInt(number);
// function greaterThan13(number)
// {
//     let result;

// if(isNaN(number))
// {
//     console.log("Enter valid text");
// }
// else
// { 
//  if(number > 13)
//  {
//     let difference = number - 13;
//     result = difference * 2;
//     console.log(`The double difference is ${result}`);
//  }
//  else
//  {
//     console.log("The numiber is not greater then 13");
//  }
// }
// }

// //  Zadaca 4

// let number1 =prompt("Enter number 1");
// let number2 =prompt("Enter number 2");

// let parsedNumber1 = parseInt(number1);
// let parsedNumber2 = parseInt(number2);

// function closer(num1, num2)
// {
//     if(isNaN(num1) || isNaN(num2))
//     {
//         console.log("Enter a valid data.");
//     }
//     else if(num1 < 0)
//     {
//        alert(`Numb ${num1} is negative`)
//     }
//     else if(num1 < 0)
//     {
//         alert(`Numb ${num2} is negative`)
//     }
//     else
//     {
//         let difference1 = 100 - num1;
//         let difference2 = 100 - num2;
    
//         if(difference1 > difference2)
//         {
//         alert(`Input 1: ${num1} Input 2 ${num2} closer to 100 is ${num1}`);
//         }
//         else if(difference2 > difference1)
//         {
//          alert(`Input 1: ${num1} Input 2 ${num2} closer to 100 is ${num2}`);
//          }
//         else 
//         {
//             alert(`Input 1: ${num1} Input2: ${num2} they are equal.`);
//         }
//     }
// }
// closer(parsedNumber1, parsedNumber2);

// //  zadaca 5

// function bobsExpenses()
// {
//     const  salary = 1000;
//     const rent =375;
//     const bills = 250;

//     let expenses = rent + bills;
//     let moneyLeft = salary - expenses
//     document.getElementById("result").innerHTML =` Bob's money left each month is ${moneyLeft}
//      Bobs total expenses ( rent and bills are ${expenses} dollars)`
// };
// bobsExpenses();

// //  zadaca 6
// function hasPassed()
// {
//     const grades = [ 10, 6 , 8 , 9, 6];
//     let sum = 0;
//     for ( let i = 0; i < grades.length; i++) 
//     {
//         sum += grades[i];
//     }
//     let result = sum / grades.length
//     if(result >= 8)
//     {
//         return `You passed exam with grade of ${result}`;
// }
// else 
//  {
//     return `You have Failed the exam with ${result}`;

//  } 
// }
// console.log(hasPassed());

// // zadaca7

// let userInput = prompt ("Enter number to check if it's devisible by 3 or 7:")
// let parsedUserInput = parseInt(userInput);

// function checkDivision(number)
// {
//     if(isNaN(number))
//     {
//         return "enter valid data.";
//     }
//     else 
//     {
//         if(number % 3 === 0 || number % 7 === 0)
//         {
//             return `Your number ${number} is divisible by 3 or 7`;
//         }
//         else 
//         {
//             return `your number ${number} is not divisible by 3 or 7`;
//         }

//     }
// }
// console.log(checkDivision(parsedUserInput));

let joinArrayVar =["a", 1, true, "f", 3];

function joinArray(array)
{
    let joinToString = "";
    for(let i = 0; i < array.length; i++)
    {
        joinToString += array[i] + " ";
    }
    return joinToString;
}
console.log(joinArray(joinArrayVar));

// //  ZADACA 9
// let arrayOf10 = [ null, NaN, undefined, "", false, 2, "asd", 4, "dddd", "sss"]

// function removeFalsyValues(array)
// {
//     let newArray = [];
//     for ( let i = 0; i < array.length; i++)

// {
//     if(!isNaN(array[i]) || array [i] !== null ||[i] !== "undefined")
//     {
//         continue;
//     }
//     else
//     {
//     newArray.push(array[i]);
//     }
// }
//     return newArray;
// }
// // console.log(typeof(arrayOf10[0]));
// // console.log(typeof(arrayOf10[1]));
// // console.log(typeof(arrayOf10[2]));
// // console.log(typeof(arrayOf10[3]));
// let resultArray = removeFalsyValues(arrayOf10);
// console.log(resultArray);
