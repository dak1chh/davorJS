console.log(" ----- 1 -----");
let firstDiv = document.getElementById("First");
console.log(`Its first Div: ${firstDiv}`)

console.log(" ----- 2 -------")
let allparagraphs = document.getElementsByTagName("p");
console.log(`Paragraphs length: ${allparagraphs.length}`);

console.log("------3------");
let lastDiv =document.getElementsByTagName("div")[2];
console.log(`Div length ${lastDiv}`);

console.log("-----4------");
let headerThree =lastDiv.getElementsByTagName("h3")[0];
console.log(headerThree.innerHTML);

console.log("-----5-----");
let headerOne =lastDiv.getElementsByTagName("h1")[0];
console.log(headerOne);

console.log("-----6------");
let firstParagraphFromSecondDiv = document.getElementsByTagName("div")[1];
let textFromParagraph =firstParagraphFromSecondDiv.getElementsByTagName("p")[0];
console.log(textFromParagraph.innerText);

console.log("----7----");
let textElement =document.getElementsByTagName("text")[0];
textElement.innerText ="text";
console.log(textElement);

console.log("----8-----");
headerOne.innerText = "Changed textttttt";
console.log(headerOne);

console.log("----9----");
headerThree.innerText="changed texttttttt x2";
console.log(headerThree);




