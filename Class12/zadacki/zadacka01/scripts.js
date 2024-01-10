let number = 1000;
let divisbleBy3 = arrayDivisble( number);
console.log(divisbleBy3);


number = 4;
let divisbleBy3 = arrayDivisble(number);
console.log(divisbleBy4);

number = 1;
let divisbleBy3 = arrayDivisble(number);
console.log(divisbleBy1);

function arrayDivisble3(number)
{
    let array = [];
    for(let i = 0; i <= number; i++)
    {
        if(i % number === 0)
        {
            array.push(i);
        }
    }
}

function arrayEvenNumberDivisibleBy4(number)
{
    let array = [];
    for(let numbers of number)
    {
        if( number % 2 === 0)
        {
            if(number % 4 === 0 )
            {
                array.push(i)
            }
        }
    }
}