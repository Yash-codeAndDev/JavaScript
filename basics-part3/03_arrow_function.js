const user = {
    username: "yash",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()


// console.log(this)

/*
function chai(){
    let username = "Yash"
    // console.log(this.username) //udefined
}
chai()

function chai2(){
    let username = "Yash"
    // console.log(this.username) //udefined
}
chai2()

*/

/*

const chai = () => {
    let username = "Yash"
    console.log(this)
    // console.log(this.username)     // undefined
}
chai()

*/

/*

const addTwo = ( num1, num2 )=>  {
    return num1+num2
}

console.log(addTwo(2,3))

*/
/*
// implicit return arrow function
const addTwo = ( num1, num2 )=> num1+num2
console.log(addTwo(2,3))

*/

/*
    // Returning object from implicit arraow function
const objfun =  (num1,num2) => ({username : "Yash"})
console.log(objfun(2,3))

*/


