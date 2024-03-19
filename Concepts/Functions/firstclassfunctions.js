// a()
// b() 

// Function statement
function a(){
    console.log("function called")
}
a()

// Function expression
let b = function(){
    console.log("Assigning function to variable")
}
b()

// Anonymous Function
// function (){
//     console.log("Anonymous Fun")
// }


// Named function Expression
let c = function xyz(){
    console.log("Hello World")
}
c()
// xyz()    //error xyz not defined



// First class Function -: functions that take another function as parameters

let d = function pqr(para){
    console.log(para)
    return function(){
        console.log("Returned Fun")
    }
}

function e(){
    console.log("Fun e")
}

console.log(d(e))

