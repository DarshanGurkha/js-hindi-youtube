const marvel_heroes= ["ironman", "thor","hulk"]
const dc_heroes= ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)     //add but separate arrays
// console.log(marvel_heroes);

// console.log(marvel_heroes);           
// console.log(marvel_heroes[3][1]);   // superman


const newHeroes= marvel_heroes.concat(dc_heroes)      // two arrays add
// console.log(newHeroes);



const allHeroes = [...marvel_heroes,...dc_heroes]     //two arrays add
//console.log(allHeroes);

const newOne= [1,2,3,[4,5],8,9,[10,11,12],15,16]
const newarray = newOne.flat(Infinity)        //combine in one array
console.log(newarray);

console.log(Array.isArray("darshan"));             //give true or false value
console.log(Array.from("darshan"));               // give each word separately in one array
console.log(Array.from({name: "darshan"}));       // output:  []

let score1=50
let score2=60
let score3=70

console.log(Array.of(score1,score2,score3));    // add all numbers in one array

 


