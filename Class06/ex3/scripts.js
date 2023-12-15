let myInput =document.getElementById("myInput");
let myButton =document.getElementById("myButton");

function focusGreeting(){
    alert("focus on input");
}

function blurGreeting() {
    alert("input lost focus");
}

function buttonClicked()
{
    alert("button clicked");
}
function secondButtonclicked(){
    alert("Button clicked, but the second one!");
}

// // myInput.addEventListener("focus", focusGreeting);
// myInput.addEventListener("blur", blurGreeting);

// myButton.addEventListener("click", buttonClicked);
// myButton.addEventListener("click", secondButtonclicked);
// myButton.addEventListener("click", function() {
//     alert("ANONYMOUS FUNCTION");
// })
myButton.addEventListener("click", function() {
    buttonClicked();
    secondButtonclicked();
    alert("ANONYMOUS FUNCTION Razlicno");
})

myButton.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
})

myButton.removeEventListener("click", secondButtonclicked);