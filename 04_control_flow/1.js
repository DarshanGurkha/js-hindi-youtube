//if

const isUserLoggedIn = true



// if(score>50) {
//         console.log("executed");   
//     }
    
//     types :   >, <, >= , <= , == , !=, ===, !==
    
// if (2==="2") {
//     console.log("Yes,successfully executed");
    
// }

const temperature = 40
 if(temperature === "40") {
    console.log("less than 40");   
 } else {
    console.log("more than 40");
    
 }
console.log("executed");            // it will show output 100%

let score=100  
if(score>50) {
    const power = "fly"
    console.log(`score will be: ${power}`); 
}
 console.log(`score will be: ${power}`); 

const balance=1000 
if(balance>200)  console.log("shorthand sucessfull"),  console.log("test2") ; //SHORTHAND  SUCESSFULL

// //NESTING 

if(balance<250) {
    console.log("less than 250")
}

else if(balance<500) {
    console.log("less than 500")
}
else if(balance<750) {
    console.log("less than 750")
}
else {
    console.log("less than 1200")
}

// &&- AND OPERATOR and ||- OR OPERATOR 

const userLoggedIn = true
const debitCard = true  
const loggedInFromGoogle= true
const loggedInFromEmail = false        

if(userLoggedIn && debitCard && 2==2) {             //  all condition should be true , if not then it will not show output
    console.log("allow to buy course"); 
}

if(loggedInFromGoogle || loggedInFromEmail || 2==3 ) {        // Atleast one condition should be true
    console.log("yes it is true");    
}
