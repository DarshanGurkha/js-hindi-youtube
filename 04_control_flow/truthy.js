let userEmail = []

if(userEmail) {
    console.log("it is valid email");   
} else {
    console.log("it is invalid");   
}

//falsy Values :
// false, 0, -0, "" , Bigint 0n  , null , undefined , Nan 

//truthy values :

// "0", "false" , " ", [] , {}, function(){}

// CHECKING ARRAY IS EMPTY OR NOT

if(userEmail.length ===0)  {
    console.log("Array is empty");  
}

// CHECKING OBJECT IS EMPTY OR NOT
const myObj = {}

if(Object.keys(myObj).length===0)   {
    console.log("object is empty");   
}

// NULLISH COALESCING OPERATOR(??) : FOR NULL AND UNDEFINED

let val1 ;
// val1 = 5 ?? 10                 //output : 5
// val1 = null ?? 10            //output : 10
// val1= undefined ?? 15            //output : 15

// val1 = null ?? 17 ?? 20        //output : 17

val1 = undefined ?? null        // output will only last number , i.e. null
console.log(val1); 


// TERNIARY OPERATOR

// condition? true : false

const iceTeaPrice = 100 
iceTeaPrice <=90 ?  console.log("less than 90")   :  console.log("more than 90");

 