// FOR LOOP

// for (let i = 0; i < 10; i++) {
//     const element = i ;
//     if(element==5) {
//         console.log("5 is detected");     
//     }
//     console.log(element);
// }

// console.log(element);           // cannot access becasue it is outside

// for (let i=1; i<=10; i++) {
//     console.log(`outer loop value:  ${i}`);                    // WE CAN DIRECT PRINT OUTPUT VIA : ` `(BACKTICK)
    
//     for (let j = 1; j<=10; j++) {
//     // console.log(`inner loop value  ${j} and inner loop ${i} `);
//     console.log( i + '*' + j  + ' = ' +  i*j);
    
//     }  
// }

// const myarr = ["Darshan", "Shivangi" ,"Nityansh" , "Tanusha" ]
// console.log(myarr.length);

// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element);       
// }


// break and continue

for (let index = 1; index <= 10; index++) {
    if (index==5) {
        console.log("5 is detected");
        continue    // OR break 
    }

      console.log(`value of i is ${index}`);
 
}