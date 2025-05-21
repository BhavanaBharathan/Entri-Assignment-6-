function sumOfDigits(number)
{
  let sum=0;
  console.log(`sum of digits of ${number} is : `)
   while(number!=0)
    {
      let digit = number % 10;
      sum = sum + digit
      number = Math.floor(number / 10)
    }

    console.log(sum);
}

sumOfDigits(45321);
