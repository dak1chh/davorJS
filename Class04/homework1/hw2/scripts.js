let tenNumber =[1, 23, 234, 433_434, 3_434, 435_343, 535, 644];

function findLargestValue(array)
 {
let index = 0;
let max = -Infinity; 
while (index < array.length) {
    if (array[index] > max)
    {
        max = array[index];
    }
    index++;
}
console.log(`The largest number is ${max}`);
}
findLargestValue(tenNumber);