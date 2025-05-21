function factorial(n)
{
    let factorial=1
     
for(let i=1;i<=n;i++)
{
   factorial=factorial*i

}
console.log(`factorial of ${n} is: ${factorial}`)
}


factorial(6);