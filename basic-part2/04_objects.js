
const instaUser = new Object()

instaUser.id = '123abc'
instaUser.name = "Yash"
instaUser.isLoggedIn = false
console.log(instaUser)
console.log(typeof instaUser)


/*
const regularUser = {
    email : "xyz@gmail.com",
    fullName :{
        userFullName : {
            firstname : "Ayush",
            lastname : "Rawat",
        } 
    }
}

console.log(regularUser)
console.log(regularUser.fullName.userFullName)
*/

const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "a",
    4 : "b",
}
const obj4 = {
    3 : "g",
    9 : "h",
}
/*

// const obj3 = {obj1,obj2}
// method to combine objects using assign method
const ob3 = Object.assign({},obj1,obj2,obj4)
console.log(ob3)

*/


/*

// method to combine objects using spread opreator
const ob3 = {...obj1,...obj2,...obj4}
console.log(ob3)

*/

const users = [
    {
        id: 1,
        email : "xyz@email.com",
    },
    {
        id: 2,
        email : "abc@email.com",
    },
    {
        id: 3,
        email : "pqr@email.com",
    },
    {
        id: 4,
        email : "def@email.com",
    }
    
]

console.log(users[1].email)


console.log(instaUser)
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty("isLoggedOut"))