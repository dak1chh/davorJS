let add = function(first, second)
{
    return first + second;
}

const sumFunction =add;
const sumResult = sumFunction(5, 10);

function subtract(first, second)
{
    return first - second;
}

const subtractFunction = subtract;

function multiply (first, second)
{
    return first * second;
}

function devide ( first, second)
{
    if(second === 0)
    {
        return `Cannot devide by 0`;
    }
    return first / second;
}
 
const devideFunction = devide;

const operations = [add, subtract, multiply, devide];

//  Using function as an argument

function operation (func, firstNum, secondNum)
{
    return func(firstNum, secondNum);
}

let opretionResult = operation(operations[0],2, 3);
console.log(opretionResult)

//  returning a function from aoother function

const greetingGenerator = (language) =>
{
    switch(language.toLowerCase()) {
        case "english":
        return name => console.log(`Hello${name}`);
        case "spanish":
            return name => console.log(`Hola Amigo ${name}`);
        case "german":
            return name => console.log(`Hallo ${name}`);

        default:
            console.log("unsupported language");
            return null;

            break;
    }
}

const greetinEnglish= greetingGenerator(`english`);
const greetinSpanish= greetingGenerator(`spanish`);
const greetinGerman= greetingGenerator(`german`);

greetinSpanish(`Pablo`);

//  a function with properties and a method

const taskHandler = (taskName)=>
{
    return `Task ${taskName} completed`
}

taskHandler.defaultTask = `Da kupam bmw`;
taskHandler.description = `This is a task handler func`;

//  getting property values

console.log(taskHandler.defaultTask);
const defaultTaskResult = taskHandler(taskHandler.defaultTask);
console.log(defaultTaskResult);

//  adding methot to the function
taskHandler.customTaskResult = (taskName, customAction)=>
{
    return`The result for the task ${taskName} is ${customAction}`;

}

const customResult = taskHandler.customTaskResult("play football", ()=> {return ` still in progress.`});

console.log(customResult);