let string ="Dino";
if(string =="Davor")
{
    console.log(true);
}
else
{
    console.log(false);
}


let score = 70;
// ?let score = 110

if(score < 100)
{
     console.log(`You lost the game`)
    }
    
 
    // let points =55;
    let points =100;
    
    if(points > 60) {
        console.log(`You passed the exam!`);
    } 
    else { 
        console.log(`You failed the exam`);
    }

    let scoredPoints =prompt(`Enter your score`);
    const parsedUserInput =parseInt(scoredPoints);
    if(scoredPoints <=60)
    {
        console.log(`You failed`)
    }
    else if (scoredPoints <= 70) { 
        console.log(`Your grade is D`)
    }
    else if (scoredPoints <=80)
    { 
        console.log(`Your grade C`)
    }
    else if (scoredPoints <=90)
    { 
        console.log(`Your grade B`)
    }
    else 
    { 
        console.log(`Your grade A`)
    }

    // let userNumber = prompt(`Enter your score`);
    

