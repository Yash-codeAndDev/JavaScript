/*
let arr = [1, 2 , 'Yash',false ]
console.log(arr)
console.log(typeof arr)
*/
/*
// another way to define array
const arr2 = new Array(1,2,"Yash",false)
console.log(arr2)
console.log(typeof arr2)
*/


//-------------------------------------  Methods--------------------------

/*
arr.push("Ayush")
arr.push(5)
console.log(arr)
arr.pop()
console.log(arr)
*/
/*
arr.unshift(8) // insert element at first by shifting elements
console.log(arr)

arr.shift() // remove elements at first
console.log(arr)
*/


const newArr = [1,2,3,4,5,6,7]
/*
console.log(newArr)
console.log(newArr.includes(9)) //false
console.log(newArr.indexOf(2)) 
console.log(newArr.indexOf(20)) // return -1 because element does not exist
*/

/*

const  addArr = newArr.join() // converts array to string
console.log(newArr)
console.log(addArr)
console.log(typeof addArr)

*/

console.log("A : ",newArr)

const myn1 = newArr.slice(1,3) // (index 1 inclusive and 3 exclusive)does not manipulate original array
console.log(myn1)
console.log("B : ",newArr)


const myn2 = newArr.splice(1,3)  // (index 1-3 are inclusive)manipulate original array
console.log(myn2)
console.log("C : ",newArr)

