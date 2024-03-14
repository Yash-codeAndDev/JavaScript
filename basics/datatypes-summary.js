/*  
    Primitives:

    1) String
    2) Number
    3) Boolean
    4) null
    5) undefined
    6) Symbol
    7) BigInt

    Non-Primitive / Reference Type:

    1) Arrays
    2) Objects
    3) Functions
*/
/*
const score = 90
const scoreValue = 95.8

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("1234")
const anotherId = Symbol("1234")
console.log(id == anotherId)
console.log(id === anotherId)

const bigNumber = 923123123123123123231323123123124343n
console.log(bigNumber)

*/

const heros = ["IronMan", "Thor", "CaptianAmerica","Hulk"]

let obj = {
    name: " Yash",
    age : 22,
}


let varFunction = function (){
    console.log("Function assign to variable")
}

console.log(typeof heros)
console.log(typeof null)
console.log(typeof obj)
console.log(typeof varFunction)