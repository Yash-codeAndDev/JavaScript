// Object Literals

const mySymbol = Symbol("Key1")
const JsUser = {
    name : "Yash",
    "full Name": "Yash Khati",
    age  : 22,
    location : "Dehradun",
    email : "yash@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"],
    // mySymbol : "myKey1", cannot use symbol this way
    [mySymbol] :"myKey1",
}
/*
console.log(JsUser)
console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full Name"]) // cannot access with . opreator
// console.log(JsUser."full Name") error ->cannot access with . opreator

// console.log(JsUser.mySymbol)
// console.log(typeof JsUser.mySymbol)

console.log(JsUser[mySymbol])
console.log(typeof JsUser[mySymbol])
*/
/*
JsUser.email = "yash@chatgpt.com"
console.log(JsUser)
Object.freeze(JsUser) // freez object to prevent it form further modification
JsUser.email = "yash@microsoft.com"
console.log(JsUser)
*/

JsUser.gereeting = function (){
    console.log("Hello Js User");
}

console.log(JsUser)
console.log(JsUser.gereeting) 
console.log(JsUser.gereeting()) // undefined 


JsUser.gereetingTwo = function (){
    console.log( `Hello Js User , ${this.name}`);
}
console.log(JsUser)
console.log(JsUser.gereetingTwo) 
console.log(JsUser.gereetingTwo())  //undefined



