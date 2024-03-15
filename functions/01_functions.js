/*
function addTwoNumbers(num1, num2)
{
    console.log(num1 + num2)
}


const result = addTwoNumbers(3,5)
// addTwoNumbers(3,null)
console.log("Result : ",result) // undefined

*/

function addTwoNumbers(num1, num2)
{
    let result = num1 + num2
    return result
}


const result = addTwoNumbers(3,5)
// console.log("Result : ",result) 



function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please Enter Username")
        return
    }
    return `${username} just loggedin`
}

function loginUserMessage2(username = "ABC") {
    if(username === undefined){
        console.log("Please Enter Username")
        return
    }
    return `${username} just loggedin`
}
// console.log(loginUserMessage("Ayush"))

console.log(loginUserMessage())

console.log(loginUserMessage2("Yash"))
console.log(loginUserMessage2())