function bobsExpenses()
{
    const  salary = 1000;
    const rent =375;
    const bills = 250;

    let expenses = rent + bills;
    let moneyLeft = salary - expenses
    document.getElementById("result").innerHTML =` Bob's money left each month is ${moneyLeft}
     Bobs total expenses ( rent and bills are ${expenses} dollars)`
};
bobsExpenses();

function hasPassed()
{
    const grades = [ 10, 6 , 8 , 9, 6];
    let sum = 0;
    for ( let i = 0; i < grades.length; i++) 
    {
        sum += grades[i];
    }
    let result = sum / grades.length
    if(result >= 8)
    {
        return `You passed exam with grade of ${result}`;
}
else 
 {
    return `You have Failed the exam with ${result}`;

 } 
}
console.log(hasPassed());