let myButton = document.getElementById("myButton");

function makeAjaxApiCall() {
$.ajax({
    url:`https://swapi.dev/api/files`, 
    success: function(result) {
        console.log(result)
    },
    error: function(error){
        console.log(`The api didnt return anything`)
        console.log(error);
    }
})
    
}

myButton.addEventListener(`click`, makeAjaxApiCall);