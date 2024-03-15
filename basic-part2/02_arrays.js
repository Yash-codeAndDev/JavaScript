const marvel_Heros = ['Thor', 'ironMan', 'Hulk']
const dc_Heros = ['Superman', 'Batman', 'Flash']
/*
marvel_Heros.push(dc_Heros) 
console.log(marvel_Heros)

const allHeros = marvel_Heros.concat(dc_Heros)
console.log(allHeros)
*/
/*

const all_new_Heros = [...marvel_Heros, ...dc_Heros]
console.log(all_new_Heros);


const another_array = [1,2,3,[4,5,6,] , 7, [6,7, [4,5]]]

let another_array_2 = another_array.flat(1) // flat(depth) number of subarrays to flatten
console.log(another_array_2)

another_array_2 = another_array.flat(2)
console.log(another_array_2)

*/

console.log(Array.isArray("Yash"))

console.log(Array.from("Yash")) // converts string,objects ,etc to array

/*
console.log(Array.from({
    name : "Yash",
    age : 23,
}))
//  does not convert object to array because we need to define if 
//  we need keys array or value array
*/ 


let s1 = 12
let s2 = 22
let s3 = 32

// console.log(Array.from(s1,s2,s3))
console.log(Array.of(s1,s2,s3,"yash"))
