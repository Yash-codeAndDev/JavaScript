/*
let a = 10
const b = 20
var c = 30
*/

/*

if(true){
    let a = 10
    const b = 20
    var c = 30
}

*/

// console.log(a)
// console.log(b)
// console.log(c)

/*
    let and const are block scoped
*/



// Nested Scope
/*
function one(){
    const username = "Yash"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

one()


if(true){
    const username = "Yash"
    if (username == "Yash"){
        const website = " youtube"
        console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)

*/

/*

// function expression are not initialized untill it is executed unlike
// function call 

console.log(addone(5))
function addone(num){

    return num+1
}


console.log(addtwo(5)) // reference error
const addtwo  = function(num){
    return num + 2
}

*/