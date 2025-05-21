let number1=0;
let number2=1;
let nextNumber;
function fibonacci(number)
{
    console.log("Fibonacci Series:");
    console.log(number1);
    for(let i=1; i<number; i++)
    {
       nextNumber = number1 + number2;
       number1= number2;
       number2= nextNumber
       console.log(nextNumber); 

    }
}

fibonacci(7);