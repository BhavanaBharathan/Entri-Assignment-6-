function stringReversing(str)
{
    let reversed_String="";
    
    for(let i=str.length-1; i>=0 ;i--)
    {
        reversed_String = reversed_String + str[i];
    }
    return reversed_String;
   
}

let strg1="javascript"
console.log(`string Before reversing : ${strg1}`)
let newString= stringReversing(strg1);
console.log(`Reversed string : ${newString}`) 


