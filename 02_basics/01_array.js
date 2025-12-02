const myArr= [0,1,2,3,5]
const heroes= ["Army","Navy","Airforce"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr2);

// Array Methods

// myArr.push(8)     //add number at last
// myArr.push(9)        //add number at last
// myArr.pop()     //remove number at last

// myArr.unshift(0)       //add number at first
//myArr.shift()             //remove number at first    
//console.log(myArr.includes(2))
//console.log(myArr.indexOf(1))

const newArr= myArr.join()      //make array into string
// console.log(myArr) 
// console.log(newArr)       
// console.log(typeof newArr);

//slice  //splice
console.log("A", myArr);
const myn1= myArr.slice(1,3)                // only give between these two:  
console.log(myn1);                            // [1,2]

console.log("B", myArr);
const myn2=myArr.splice(1,3)                  

console.log("C", myArr);                      //[0,5]
console.log(myn2)                          // [1,2,3]

// Slice(value to remove from,value remove upto but don't include)= returns new array
//  and original value remains unchanged. Use when you need to extract a portion of
//  an array without modifying it.
//Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

