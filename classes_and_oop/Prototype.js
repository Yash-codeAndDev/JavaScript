let myName = 'Yash    '

let myChannel = "chai   "


let myHeros = ['thor' , 'spiderman']
let heroPower = 
{
    thor : 'Hammer',
    spiderman : 'sling',

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.yash = function(){
    console.log(`Yash is present in all objects`)
}

Array.prototype.heyYash = function (){
    console.log(`Yash says hello`)
}

// heroPower.yash()

// myHeros.yash()
// myHeros.heyYash()
// heroPower.heyYash()
// console.log(myName.truelength)



// Inheritance

const user= {
    name : "uname",
    email : "google@aka.com",
}
const Teacher = {
    makeVideo : true,
}
Teacher.__proto__ = user

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}


// modern inheritance syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "Yash-codeAndDev       "

String.prototype.truelength = function(){

    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.truelength()


"Ayush".truelength()
"iceTea".truelength()