let myButton =document.getElementById(`myButton`);
let MySecondButton =document.getElementById(`mySecondButton`);
let myDiv =document.getElementById("myDiv");

function btnClick()
{
    alert(`You clicked the button!`)
}

function greeting()
{
    alert(`happy new year!`)
}

function goodBye(){
    alert(`se gledame legendo`);
}

function hiGreeting() {
    alert(`zdravooooooooooo kakosi ;)`);
}

myButton.onclick =btnClick;
MySecondButton.onclick =btnClick;

//===============================

MySecondButton.onclick =greeting;
myDiv.onmouseover =greeting;