
let rabbit=200;
let month=6;
for (let i=1; i<=month;i++)
{
  if (i%2==0)//чет. месяц
  { 
    rabbit-=rabbit*0.5;
  }
  else
   {
     if (rabbit>100)
      rabbit-=rabbit*0.2;
   }
     rabbit+=20;
   console.log("Month "+i+"  number of rabbit "+rabbit);
   
}