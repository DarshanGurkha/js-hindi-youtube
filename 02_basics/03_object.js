// objects is declare by two ways :  literal and constructor

//singelton : in single declare in constructor  
//object.create : used in constructor

// object literal
const mySym = Symbol("key1")

const JsUser = {
    name: "darshan",
    "full name":"darshan gurkha",      //cant be write in .full name
    age: 19,
    [mySym] : "mykey1",
    email: "darshan9852@google.com",
    location: "Vadoadara",
     IsLoggedIn: false,
      
}
// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log (JsUser[mySym]);

JsUser.email = "darshan@chatgpt.com"
// Object.freeze(JsUser.email)
JsUser.email= "darsh@chatgpt.com"
//console.log(Jsuser)
JsUser.greeting = function() {
    console.log("hello Js user");    
}

JsUser.greetingTwo = function () {
    console.log(`hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


