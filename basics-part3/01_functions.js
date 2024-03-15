/*
function addTwoNumbers(num1, num2)
{
    console.log(num1 + num2)
}


const result = addTwoNumbers(3,5)
// addTwoNumbers(3,null)
console.log("Result : ",result) // undefined

*/
/*
function addTwoNumbers(num1, num2)
{
    let result = num1 + num2
    return result
}


const result = addTwoNumbers(3,5)
// console.log("Result : ",result) 
*/
/*

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

*/

/*
    Function with any numbers of arguments

*/

function calculateCarPrice(...num1){
    return num1
}

console.log(calculateCarPrice(200,400,500)) // [200,400,500]

function calculateCarPrice2(val1,val2,...num1){
    return num1
}

console.log(calculateCarPrice2(200,400,500,600)) 

const user = {
    username : "Yash",
    price : 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `)
}

handleObject(user)

handleObject({
    username : "Sam",
    price : 999,
})


const myNewArray = [100,400,300,900]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))