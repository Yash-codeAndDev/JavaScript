/*
const score = 400

// explicitly defining variable to be Number object
const balance = new Number(400)

console.log(score)
console.log(balance)



console.log(balance.toString())
console.log(balance.toString().length)

let otherNumber = 38.76212
console.log(otherNumber.toFixed(2))

let decVal = 115.4567

console.log(decVal.toPrecision(2))
console.log(decVal.toPrecision(3))
console.log(decVal.toPrecision(4))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
*/

/*
console.log(Math)


console.log(Math.abs(-5.6));
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.5)) // 5

console.log(Math.floor(4.7)) // 4
console.log(Math.ceil(4.01)) // 5


console.log(Math.max(1,2,3,4,5))

*/

console.log(Math.random()) // 0-1
console.log((Math.random()*10) + 1)  

const min = 10
const max = 20

// to get random value always greater than min and less than max
console.log(Math.floor(Math.random() * (max-min + 1))+min)