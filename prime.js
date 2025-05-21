
function primeCheck(number)
{
       let isPrime = true;
       if(number<=0)
        {
             isPrime = false;
        }
       else
        {
            for(i=2 ;i<=number-1; i++)
            {
                if(number%i==0)
                isPrime = false
                break;
             }
        }

    if(isPrime==true)
    {console.log(`${number}  is a prime number`);}

   else
     {console.log(`${number}  is  composite`); }
}


primeCheck(51);
primeCheck(40)