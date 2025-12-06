
 // SCOPE IS LIKE THIS : {}

//   var c=300
 
  let a=1000                      // Global scope

if(true){
    
    let a=10                          // Block Scope
    const b= 20 
    // console.log("Inner:" ,a);
}

// console.log(a);
// console.log(b);
// console.log(c);       // only in var, it will show output.

// SCOPE LEVEL AND MINI HOISTING

function one() {
    const username = "darshan"

      function two() {
        const website = "youtube"
        console.log(username); 
        // console.log(website);
      }
      // console.log(website);
        two()
}
// one()

if(true) {
  const username = "darshan"
  if(username === "darshan") {
    const website= " youtube"
    // console.log(username + website);  
  }
  // console.log(website);
  
}
// console.log(username);

console.log(addone(5))       //this will show output
function addone(num) {
  return num + 1
} 

addTwo()                         //this will not show output
const addTwo =  function(num) {          //hoisting means how funcions are declared,execute and how it is storedand variables are added
  return num+1
}
// in this first one is declared and in second one it is not declared    