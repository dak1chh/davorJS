function makeFetchrequest(){
    fetch( `https://swapi.dev/api/files`).then(response, function() 
    console.log(response).json();
        ))
        .catch(error function){

            console.log(error) }
        })
}
let myBtn=document.getElementById(`myButton`);
myBtn.addEventListener(`click`, makeFetchrequest);

//  Da prepisham doma