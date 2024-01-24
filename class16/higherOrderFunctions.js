const numbers = [2, 5, 5, 8, 10, 15, 7, 3, 12, 17, 34, 53];
const users = [
    {id: 1, name: "Alice", age: 28, occupation: "Software Engeneer"},
    {id: 2, name: "Zoki", age: 27, occupation: "Teacher"},
    {id: 3, name: "Tarzan", age: 22, occupation: "Pilot"},
    {id: 4, name: "Tomislav", age: 64, occupation: "Dealer"},
]

// const squaredNumbers = [];

// for(let i = 0; i < numbers.length; i++)
// {
//     squaredNumbers.push(numbers[i] * numbers [i])
// }

// console.log(squaredNumbers);

const squaredNumbers = numbers.map(num => num + num);
console.log(squaredNumbers);
// console.log(numbers);

//  forEach 
//  executes a provided function once for each array element
//  doest not return value
//  modifies the original array

numbers.forEach((num, i) => {
    numbers[i] = num * num
});

console.log(numbers);

users.forEach(user =>
    {
        console.log(`${user.name} - ${user.age} years old is ${user.occupation}`);
    });

    const userNamesForEach = users.map(user=> user.name);
    const userNamesMap = users.map(user => user.name);
    console.log(userNamesMap);


    // filter
    // 

    const positiveNumbers = numbers.filter(num => num > 0);
    console.log(positiveNumbers);

    const olderUsers = users.filter(user=> user.age > 30);
    console.log(olderUsers);

    //  reduce
    const sum = numbers.reduce((acc, cur) => acc + cur)
    console.log(sum);
    const multiplyResult1 = numbers.reduce((acc, cur) => acc * cur, 1)
    console.log(multiplyResult1);

    const averageAge1 = users.reduce( acc, user => acc + user.age, 0) / users.length
    console.log(averageAge1)

const sumPositiveNums = numbers.filter(num => num > 0).reduce((acc, cur) => acc + cur);
console.log(sumPositiveNums);

const numbersSort = [ 2,5,-5,8,10,15,7,-3,12,17,34,53,3,654,23,241];

console.log(numbersSort);
numbersSort.sort((a, b) => a - b);
console.log(numbersSort);

const students = ["student1", "davor", "dragan", "student2", "dino", "jusuf", "fredi"];
students.sort((a, b ) => b - a);
console.log(students);