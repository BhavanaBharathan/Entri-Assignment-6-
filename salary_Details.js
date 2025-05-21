function salary_Calculations(basic_Salary)
{
 
 let DA=0, HRA=0,PF=0,net_Salary=0;

 if(basic_Salary<10000)
 {
    DA=.25*basic_Salary;
    HRA=.3*basic_Salary;
    PF=.08*basic_Salary;
 }
 else if(basic_Salary>10000 && basic_Salary<20000)
 {
    DA=.20*basic_Salary;
    HRA=.25*basic_Salary;
    PF=.06*basic_Salary;
 }
 else if(basic_Salary>20000 && basic_Salary<30000)
 {
    DA=.15*basic_Salary;
    HRA=.20*basic_Salary;
    PF=.04*basic_Salary; 
 }
else 
 {
    DA=.10*basic_Salary;
    HRA=.15*basic_Salary;
    PF=.02*basic_Salary; 
 } 

 net_Salary=(basic_Salary+ DA+ HRA)-PF
console.log(`Basic Salary : ${basic_Salary}`);
console.log(`DA : ${DA}`);
console.log(`HRA : ${HRA}`);
console.log(`PF : ${PF}`);
console.log(`Net Salary : ${net_Salary}`);
  
}

salary_Calculations(50000);