console.log("===========================CONTROL STRUCTURES");

// 1. Conditional statements (if, else, if , else)
// 2. Switch statement
// 3. Looping Structures
// 4. Purpose

console.log("");
console.log("================================================SWITCH STAMENT");
// useful when you have multiple condition to check against SINGLE varlable \\

// base syntax
let switchValue = "";
switch (switchValue) {
    case "value1":
    // Code to be excuted if switchValue === "value1"

    break;
        case "value2":
      // Code to be excuted if switchValue === "value2"
    break;
    case "value3":
        // Code to be excuted if switchValue === "value3"
        break;
        // as many cases as we need
    default:
        // Code to be excuted if value is none of the above
        break;

}



let inputDay = prompt("Enter day of week(1-7):");
let parsedInputDay =parseInt(inputDay);

switch (parsedInputDay) { 
case 1:
    console.log("Monday");
        break;
case 2:
    console.log("Tuesday");
        break;
case 3:
    console.log("Wednesday");
     break;
case 4:
    console.log("Thirsday");
    break;
case 5:
    console.log("Friday");
        break;    
         case 6:
        console.log("Satruday");
        break;
 case 7:
        console.log("Sunday");
        break;
        default:
    console.log("Invalud input value");
        break;
}
