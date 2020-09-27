const readline = require("readline");
const read = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
});
read.question("Enter n: ", function(n) 
{
     let first = 1, secound = 1, count=0, fibo;

     
      for(let i = 1; secound<n; i++)
  {  
    console.log(`${secound}`);
    fibo = secound + first;         
    first=secound;
    secound=fibo;
    count++;
  }
        console.log(` kol symbols ${+count}`);
        read.close();   
});

