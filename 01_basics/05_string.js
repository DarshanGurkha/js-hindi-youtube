const name= "darshan"
const repoCount= 50
//console.log( name + repocount + " value")   //not preferable

console.log( `my name is ${name} and my number is ${repoCount}`)    //prefer more

const gameName = new String('darshan-gurkha-bhagatsingh');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("s"));

const newString= gameName.substring(0,5)
console.log(newString);

const anotherString= gameName.slice(-2,7)
console.log(anotherString);

const newStringOne= "  darshan  "
console.log(newStringOne);
console.log(newStringOne.trim());     //cut space

const url= "https:// darshangurkha/darshan%30gurkha.com"
console.log(url.replace('%30' ,'+'));

console.log(url.includes('darshan'));     //true
console.log(url.includes('akhil'));       //false

console.log(gameName.split('-'))      // into array

