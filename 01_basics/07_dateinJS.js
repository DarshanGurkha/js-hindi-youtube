// let myDate= new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);    //object

//let createdMyDate = new Date(2006,10,17,15,3,51)    //year,month,day,hour,minute,second
// let createdMyDate = new Date("2006-01-06")
let createdMyDate = new Date("06-01-2024")
// console.log(createdMyDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdMyDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getTime());
console.log(newDate.getDate());

//${newDate.getDate()} and time ${newDate.getTime()}

newDate.toLocaleString('default' ,{
         weekday:"long",
})

