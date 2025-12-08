// THIS
const user =  {
    username:"darshan",
    age:19,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
       console.log(this);   
    }
}
// user.welcomeMessage()           // OUTPUT:darshan, welcome to the website
// user.username = "sam"    // OUTPUT:sam, welcome to the website
// user.welcomeMessage()

// console.log(this);

// function chai()  {           // THIS IS NOT USED IN FUNCTION AND IT WILL SHOW UNDEFINED VALUE
//     console.log(this);   
// }
// chai()

const chai = function() {
   let username = "darshan"
   console.log(this.username);     // IT WILL SHOW UNDEFINED VALUE
}


// const chai = () => {
//    let username = "darshan"
//    console.log(this.username);        // IT WILL SHOW UNDEFINED VALUE
// }
//  chai()

// () => {}   this is Syntax of arrow function

const addTwo = (num1,num2)  =>  {            //SIMPLE ARR0W EXAMPLE
    return num1 + num2
}
console.log(addTwo(3,5))     // Output : 8

//implicit arrow  
// const addTwo = (num1,num2)  => num1 + num2
// const addTwo = (num1,num2)  => (num1 + num2)
const addwo = (num1,num2)  => ({username: "darshan"})
console.log(addwo())       
