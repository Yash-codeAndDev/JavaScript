/*
    Stack -> Primitive
    Heap -> Non-Primitive
*/


let myName = "Yash"
// copy of myName given to anotherName
let anotherName = myName
anotherName = "Ayush"
console.log(myName)
console.log(anotherName)


let user1 = {
    email : "user@gmail.com",
    upi : "user@gpay",
}
// user1 reference is given to user2
let user2 = user1
user2.email = "user2@gmail.com"

console.log(user2)
console.log(user1)
