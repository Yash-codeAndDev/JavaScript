//  Immediately Invoked Function Expression (IIFE)


/*
    Used when we need to immediately start function to avoid global scope pollution

    semicolon is necessary at end because to know when to end function if it is
    not there it will not be terminated
*/

// named iife -> iife having name
(function chai(){
    console.log("DB Connected")
})();

// IIFE using arrow function
((name) => {
    console.log(`DB Connected 2 ${name}`)
})('yash');