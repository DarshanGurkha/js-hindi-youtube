// REDUCE 

 const mynumber = [1,2,3]
// // const newnumber = mynumber.reduce( function(acc,currval) {       // for understanding and also can be use
// //     console.log(`acc : ${acc} and currval : ${currval}`);
// //      return acc + currval 
// // },0 )

 // OTHER SIMPLE METHODS

const newnumber = mynumber.reduce(  (arr,currval)  => arr + currval ,0 )               //without scope
// const newnumber = mynumber.reduce(  (arr,currval)  =>{ return arr + currval },0 )      //with scope   
                           // we have to return the value inside the block
console.log(newnumber);
 
const shoppingcourse = [
    {
        coursename : 'html' ,
        price : 1000
    },
    {
        coursename : 'css' ,
        price : 1500
    },
    {
        coursename : 'react' ,
        price : 5000
    },
    {
        coursename : 'js' ,
        price : 3500
    }
]

const pricepayment = shoppingcourse.reduce(  (arr,item) => arr+item.price ,0 ) 
console.log(pricepayment);
