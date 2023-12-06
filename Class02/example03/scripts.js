let pass=50;
let score= 90;
let hasPassed = score >= pass;
console.log(hasPassed);

console.log(`Logical AND`);
console.log(true && true);  
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Za da bide true mora da e True i true !!!!!!!!!!!!!!!!!!!!!! \\ 

console.log(`Logical OR`);
console.log(true ||true);  
console.log(true || false);
console.log(false || true);
console.log(false || false);

//  False samo ako 2te strani se False!!!!!!!!!!!!!!!!!!!!!!!!!!\\

console.log(`Compresion`);
console.log(!true);
console.log(!false);

let comparison1 =5<10;
let comparison2 =10 !="10";
let comparison3 =10 !=="10";
console.log(comparison1);
console.log(comparison2);
console.log(comparison3);
console.log(comparison1 && comparison2);
console.log(comparison2 || comparison3);
console.log(!(comparison2|| comparison3));


//  truthy/ Falsy values

console.log(`Truthy/Falsy values`);
console.log(false && (5==6));
console.log(`cat` && 50);
console.log(`cat` && 0);
console.log(0 && `cat`);


console.log(false || (5==6));
console.log(`cat` || 50);
console.log(`cat` || 0);
console.log(0 || `cat`);




