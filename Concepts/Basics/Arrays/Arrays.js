
let arr = [1,'A', 'B']
console.log(arr.length)


arr[6] = "Yash"
arr.forEach((item,index) => {
    console.log(`item : ${item} ,  index : ${index}`)
})
console.log(arr)

/*

    let arr = ["Yash",23,true]
    let dummy_arr = arr

    dummy_arr.push("Rohit")

    console.log(arr) // [ 'Yash', 23, true, 'Rohit' ]
    console.log(dummy_arr) // [ 'Yash', 23, true, 'Rohit' ]

    // both arr and dummy_arr points to same array
*/

/*

let arr = ["Yash",23,true]
let dummy_arr = ["Iron Man","Hulk"]
arr.push(dummy_arr)
console.log(arr) //[ 'Yash', true, 'Rohit', [ 'Iron Man','Hulk' ]]


arr = ['Yash', 23, true, 'Rohit' ]
dummy_arr = ["Iron Man","Hulk"]
final_array = arr.concat(dummy_arr) // concat() return new array
console.log(final_array)


arr = ['Yash', 23, true, 'Rohit' ]
dummy_arr = ["Iron Man","Hulk"]
arr.push(...dummy_arr) // appending using spread operator
console.log(arr)

*/
