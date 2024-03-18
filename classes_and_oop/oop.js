// Object literal
const user = {
    username : "yash",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("User details Fetched")
        // console.log(`Username : ${this.username}`)
        console.log(this)
        
    }

}
/*
console.log(user['username'])
console.log(user.getUserDetails())
console.log(this)
*/

function User(username, loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this // this is optional as it implicitly return this
}

const userOne =new User('yash',12,true)
const userTwo =new User('ayush',11,false)
// console.log(userOne)
// console.log(userOne)
console.log(userOne.constructor)



