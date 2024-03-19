// ES6
/*
class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return  `${this.username.toUpperCase()}`
    }
}

const user1 = new User('yash','abc@hasm.com','123')
console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())

*/
// inside working


function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername= function(){
    return  `${this.username.toUpperCase()}`
}

const u2 = new User('ayush','xyz@asa.com','123')

console.log(u2.encryptPassword())
console.log(u2.changeUsername())
