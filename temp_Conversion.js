function toCelsius(temp_In_Fahrenheit)
{
let temp_In_celsius= (temp_In_Fahrenheit-32)*(5/9);
console.log(`Temperature in celsius is : ${temp_In_celsius}`);
}

function toFahrenheit(temp_In_celsius)
{
let temp_In_Fahrenheit= temp_In_celsius*(9/5)+32;
console.log(`Temperature in Fahrenheit is : ${temp_In_Fahrenheit}`);
}


toCelsius(95);
toFahrenheit(35);