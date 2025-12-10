// MAP
const numbers = [1,2,3,4,5,6,7,8,9,10]

const modifynum = numbers.map (  (num) => {return num +10} )
// console.log(modifynum);

const newnumber = numbers
                        .map( (num) => num * 10 )
                        .map ( (num) => num + 1 )
                        .filter ( (num) => num>=40 )
console.log(newnumber);
