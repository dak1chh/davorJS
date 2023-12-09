// console.log("===========FUNCTIONS===========");

// console.log("");
// console.log("=====FUCNTION DECLARATION=====");
// // function DECLARATION basa syntax\\
// function functionName(parameter1, parameter2){
// // Function BODY ==>  the code that will be excuted when the function name is called \\
// //  code goes here...\\

// }
// //  function ==> keyword for declaration function
// // functionName ==> the name of the function ( what the function does)
// // paramteres ==> values(vrednosti) that are used within the function ( in the function body)
// // function without parameters
// // function greet() {
// //     console.log(" Hello from Qinshift Academy :D");
// // }

// // console.log("Hello Dino, Qinshift Academy wishes you happy holidays");
// // console.log("Helllo Sirma, Qinshift Academy wishesh you happy holidays");
// // console.log("Helllo Slavko, Qinshift Academy wishesh you happy holidays");
// // console.log("Helllo Boris, Qinshift Academy wishesh you happy holidays");
// // console.log("Helllo Sasho, Qinshift Academy wishesh you happy holidays");
// // console.log("Helllo Vladimir, Qinshift Academy wishesh you happy holidays");
// //  HOW TO SOLVE THIS PROBLEM?
// function greet()
// {
//     console.log(`Hello Qinfshit wishesh you happy holidays :D`);
// }
// let studentName =prompt("Enter name"); 
// function greetStudent(studentName)
// {
//     console.log(`Hello ${studentName}, Qinfshit wishesh you happy holidays :D`);
// }
// greetStudent(studentName);



// console.log("");
// console.log("Function Exeduction")

// greet();
// greet();
// greet();
// //  can be called as many times u need

// greetStudent();
// // will get undefined  for the student name
// // let studentName =Stefan ;
// greetStudent("Bob Bobsky");
// greetStudent("Sirma");
// greetStudent("Slavko");
// greetStudent(studentName);


// console.log("")
// console.log("=====Function that returns a value=======");
// //  using the keyword "RETURN"
// //  code ends with Return ( the code after that dosent work)

// function sum(number1, number2)
// {
//     let result = number1 + number2;
//     return result;
// console.log(`Result is ${result}`);
// }
// let result= sum(5, 10);
// console.log(`Result is ${result}`);

// // //  function for greeting number staticits
// // function getNumberStats(number)
// // {
// //     // // Logic for getting the number stats
// //     // console.log(number);
// //     // switch (number) {
// //     //     case number > 0:
// //     //         return "Positive";
// //     //         // break; when we have ehere return statment we dont need brake 
// //     //         case number < 0:
// //     //             return "Negative";
// //     //          case number === 0:
// //     //             return"Zero"
// //     //             default:
// //     //                 return "Invalid number!";

// //    }
// // }
// // let inputNumber =prompt("Enter a number:");

// // let parsedNumber =parseInt(inputNumber);
// // console.log(getNumberStats(parsedNumber));
// // console.log(getNumberStats(parsedNumber));
// // console.log(getNumberStats(parsedNumber));

// // let numberStats =getNumberStats(parsedNumber);
// // console.log(`The number ${parsedNumber} is ${numberStats}`);



// function getNumberStats(number)
// {
//     if (number < 0)
//     {
//         return "Negative";
//     }
//     else if (number > 0){
//         return "Positive";
//     }
//     else if (number ===0)
//     {
//         return "Zero";
//     }
//     else
//     {
//         return "Invalid Data";
//     }
// }
// let inputNumber =prompt("Enter a number");
// let parsedNumber =parseInt(inputNumber);
// let answer = getNumberStats(parsedNumber);
// console.log(`The number ${inputNumber} is ${answer}`);
 

function testReturn() {
    console.log("Return a value:");
    return 100;
}
testReturn();
let testReturnValue =testReturn();
console.log(testReturnValue);





