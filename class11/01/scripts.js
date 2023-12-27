const url = "https://official-joke-api.appspot.com/jokes/programming/ten";

let getDataBtn= document.getElementById("btnData");
let jokeContainerElement = document.getElementById("container");

function Joke(type, question, answer)
{
    this.type = type,
    this.question = setup,
    this.answer = punchline,

    this.getJoke = function(){
        return `${this.question}\n${this.answer}`;
    }

};

function getJokesData()
    {
        const url = "https://official-joke-api.appspot.com/jokes/programming/ten";

        fetch(url)
        .then(response => 
        {
            if (!response.ok)
            {
                throw new Error ` There is a problem with the network or server`
            }
            return response.json();
        })
        .then(responseData => 
        {
            console.log(responseData);
            const transformedData = transformData(responseData);
            console.log(transformedData);
        })
        .catch(error => 
            {
                console.log(error);
        
            })
    };

    function transformData(array)
    {
        let resultArray = [];
        for(let i = 0; i < array.length; i++)
        {
            let joke = new Joke(array[i].type, array[i].setup, array[i].punchline);
            resultArray.push(joke);
        }
    }


function displayData(dataArray, element)

{
    containerElement
    for(let i = 0; i < array.length; i++)
    
    let jokeElement = document.createElement("div");
     jokeElement.classList.add(`joke-container`);


    let questionElement = document.createElement("p");
    questionElement.classList.addd("question");


    let answerElement = document.createElement("p");
    answerElement.classList.add("answer");
    questionElement.textContent = array[i].answer;

    jokeElement.appendChild(questionElement);
    jokeElement.appendChild(answerElement);
    jokeContainerElement.appendChild(jokeElement);

}  
getDataBtn.addEventListener("click", getJokesData);

