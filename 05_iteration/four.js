// FORIN IN OBJECT

const myObj = {
    css : "cascading stylesheet" ,
    js : "javascrpt"
}

for (const key in myObj) {
 //  console.log(`${key} shortcut is   ${myObj[key]}`);
   
}

// FORIN IN ARRAY

const programming = ['py','java','js','html']
for (const key in programming) {
    console.log(programming[key]);   
}

const map = new Map() 
map.set('IN','India')
map.set('USA',"United States Of America")
map.set('NP',"Nepal")

for (const key in map) {
 //console.log(key);               // output :   not show error but also  not show any output
}