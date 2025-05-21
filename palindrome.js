function palindrome(str)
{
 let string_length= str.length;
 for( let i=0; i<(string_length/2); i++)
    {
       if(str[i]!==str[string_length-1-i])
       {
        return false;
       }
    }
    return true;

}
let strg1="malayalam"
let result=palindrome(strg1);
if(result== true)
{
    console.log(`${strg1} is palindrome`)
}
else
{
   console.log(`${strg1} is not palindrome`)
}
