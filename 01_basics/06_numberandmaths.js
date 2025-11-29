const score= 500
//console.log(score);       //direct output

const balance= new Number(200)
//console.log(balance);                    //new number created
//console.log(balance.toString().length);   //3
//console.log(balance.toFixed(2));         //200.00

const anotherNumber = 2125.5
//console.log(anotherNumber.toPrecision(4));    //2126

const hundreds= 1000000
//console.log(hundreds.toLocaleString('en-IN'));    //10,00,000

/////////////    maths   //////////////
 console.log(Math);
 console.log(Math.abs(-4));     //negative to positive not vice versa
 console.log(Math.round(4.6));     //5
console.log(Math.ceil(4.2));      //5
 console.log(Math.floor(4.9));          4
 console.log(Math.min(4, 3, 6, 8));   //3
 console.log(Math.max(4, 3, 6, 8));  //8
console.log(Math.random());      //from 0.0 to 1
console.log(Math.floor(Math.random()*10) + 1);     

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))  + min);








