function myname() {
console.log("D");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
console.log("A");
console.log("N");
}
// myname()                   // simple method

// function addtwonumbers(number1,number2) {
//     console.log(number1 + number2); 
// }
// addtwonumbers(3, 8)                   //output:11

function addtwonumbers(number1,number2) {
    //  let result = number1 + number2
    //  return result               //first way   //output:Result :11
     //console.log("darshan");     // it will not print because after return , no other value will print
     return number1 + number2     //second way
       
}
const result = addtwonumbers(3,8)
// console.log ("Result: ", result)

function loginUSerMessage(username = "darshan") {
      // if(username===undefined) {
        if(!username) {
    console.log("please enter username");
      return 
    }
     return `${username} just logged In`
}
// console.log(loginUSerMessage("darshan"));
// console.log(loginUSerMessage(""));                 //output: just logged In
// console.log(loginUSerMessage());                   //output: undefined just logged In
// console.log(loginUSerMessage("darsh"));              //output: darsh just logged In


//FUNCTION WITH OBJECT AND ARRAY

function calculatePrice(...num1) {               // ... can add other two numbers in array
    return num1
}
// console.log(calculatePrice(200,300,400))

// FUNCTION WITH OBJECT
const user= {
    username:"darshan",
    age : 19
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username}  and age is ${anyObject.age}`); 
}
// handleObject(user)       // output: username is darshan  and age is 19
handleObject( {                    // second way method
    username: "akhil",
    age: 19
})

// FUNCTION WITH ARRAY 
 const myArray = [100,200,300,400]

 function arraynumber(newArray)  {       //first way method
    return newArray[1]     
 } 
//  console.log(arraynumber(myArray));
  console.log(arraynumber([300,400,500,600]));                    //Second Way Method
 