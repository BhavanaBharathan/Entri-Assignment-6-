function vowel_Consonents_Count(str)
{
    let vowel_Count=0;
    let consonent_Count=0;
    let vowel=['a','e','i','o','u','A','E','I','O','U']
    for(let j=0;j<vowel.length;j++)
    {
       for(let i=0;i<str.length;i++)
         {
           if(str.charAt(i)===vowel[j])
           {
            vowel_Count++
           }
         }
    }

    
       for(let i=0;i<str.length;i++)
         {
          let str1=str.charAt(i).toLowerCase();
           if(str1>='a' && str1<='z' && !'aeiou'.includes(str1))
           {
            consonent_Count++
           }
         }
  
    console.log(`Vowel Count: ${vowel_Count}`)
    console.log(`Consonent Count: ${consonent_Count}`)

    // console.log(`consonent: ${str.length-vowel_Count}`)


}

vowel_Consonents_Count("asdfghhjjk")
