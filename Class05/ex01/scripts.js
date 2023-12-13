console.log("test!");

let ourHeader =document.getElementById("myTitle");
console.log(`our header's text: ${ourHeader.innerHTML}`);
console.log(`${ourHeader}`);
console.log(ourHeader);

ourHeader.style.border ="1px solid black";
ourHeader.style.backgroundColor =`red`;
ourHeader.innerText = "This is text from 35";

//  mokjjta na javascript ( supermokj )  menjanje border background color color)


ourHeader.innerText ="Sum go menuval";
console.log(`Our header's text is:\n${ourHeader.innerHTML}`);

console.log("====================Acces by class==============")
let ourParagraph = document.getElementsByClassName("myParagraph");
console.log(ourParagraph);
console.log(`ourParagraphs length: ${ourParagraph.length}`);
console.log(`ourParagraphs first element: ${ourParagraph [0].innerText}`);

console.log(`access by tag==========`);
let paragraph =document.getElementsByTagName("p");
console.log(`paragraph length ${paragraph.length}`);


console.log("=============Acces by css selectors");
let firstDivwithClass= document.querySelector(".myDiv");
console.log(firstDivwithClass);
let ourDivs =document.querySelectorAll('.myDiv');
console.log(`.ourDivs lenght: ${ourDivs.length}`);
console.log(ourDivs[1]);
console.log(ourDivs[0]);
console.log(ourDivs);

console.log("========Siblings======");
let header =document.getElementsByTagName("h1")[0];
console.log(header);
let nextSibling = header.nextElementSibling;
console.log(nextSibling);

console.log("======Children======");
let children =document.getElementById("main").children;
console.log(children);
