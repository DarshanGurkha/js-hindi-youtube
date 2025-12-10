// HIGH ORDER ARRAY  

// THIS IS FOROF IN ARRAY
let arr= [1,2,3,4,5]

for (const num of arr)     {
//console.log(num); 
}

let greeting = "hello world"
for(const greet of greeting) {
    //console.log(`the value are : ${greet}`);   
}

let Sname="GURKHA"
for(const value of Sname) {
   //  console.log(`the surname is: ${value}`);    
}

// FOROF IN MAP 
const map = new Map() 
map.set('IN','India')
map.set('USA',"United States Of America")
map.set('NP',"Nepal")

 console.log(map);              // output: Map(3) {'IN' => 'India',   'USA' => 'United States Of America', 'NP' => 'Nepal' }

for (const [key, value] of map) {
    console.log(key, ':', value);    // output: IN : India ,USA : United States Of America ,NP : Nepal
        
}
// FOROF IN OBJECT 

// const myObject = {
//     game1 : "Free fire" ,
//     game2 : "Pubg" ,
// }
// for (const [key,value] of myObject) {
//    // console.log(key ,':', value);            // myObject is not iterable
// }
