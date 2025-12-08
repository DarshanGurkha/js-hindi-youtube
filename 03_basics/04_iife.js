// Immediately Invoked Function Expression(IIFE) because for immediately execution and for avoid global scope pollutant

(function chai() {
    //named iife
    console.log(`DB connected`)
}) ();

// ()()   first is funtion definition and second one is execution

//simple iife
( (name) => {
    console.log(`DB  two connected ${name}`)
} ) ('darshan')


