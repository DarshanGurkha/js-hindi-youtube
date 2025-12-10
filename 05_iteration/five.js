// FOREACH IN ARRAY

const coding = ['python','java','js']

// coding.forEach( function (item) {
//     console.log(item);   
// }   )

// coding.forEach( (item) => {
//     //console.log(val);    
// }   )

// function newprint(val) {
//     console.log(val);   
// }
// coding.forEach(newprint);   

// coding.forEach( (item,index,arr) =>  {
//      console.log(item,index,arr);
     
// })
// foreach in object inside array
const language = [
   {
    languagename:'javascript',
    languagecode: 'js'
   },
   {
    languagename:'python',
    languagecode: 'py'
   },
   {
    languagename:'java',
    languagecode: 'java'
   }
]

language.forEach (  (item) => {
  console.log(item.languagename);
}
)


