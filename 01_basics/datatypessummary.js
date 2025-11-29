//There are two types of datatypes in the javascript
// 1. primitive
// 2. Non-primitive

//Primitive data types(called by value)
// there are 7 types of primitive data types:
// String,number,boolean, null,undefined,Symbol,bigint

const score= 100
const scores= 10.3

const isLoggedIn=false
let username;
let value=null

const bigNumber=455454545474547874454n
const id = Symbol('123')
const anotherId= Symbol('123')
//console.log(id === anotherId)

//Non-Primitive (called by reference)
// Arrays,objects,Functions

const heroes = ["soldier","police","navy","airforce"];


let myObj = {
                 name: "darshan",
                  age: 19

        }
         
const myfunction= function() {
console.log("hello world");  
}
// console.log(typeof id);

//stack (primitive)  
let a=10;
let b=a;
a=5
console.log(a);
console.log(b);

//heap (non-primitive)
let obj1 = 10
let obj2 = obj1
obj1.value=5
console.log(obj1)
console.log(obj2);
