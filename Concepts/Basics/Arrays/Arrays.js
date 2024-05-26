/*

    let arr = ["Yash",23,true]
    let dummy_arr = arr

    dummy_arr.push("Rohit")

    console.log(arr) // [ 'Yash', 23, true, 'Rohit' ]
    console.log(dummy_arr) // [ 'Yash', 23, true, 'Rohit' ]

    // both arr and dummy_arr points to same array
*/

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

console.log("Concat Shalow Copy")
arr = [1,2]
dummy_arr = [4,5 ,[8,9]]
final_arr = arr.concat(dummy_arr)
console.log(final_arr)
dummy_arr[2][1] = 10
console.log(dummy_arr)
console.log(final_arr)



console.log("SpreadOpreator Shalow Copy")
arr = [1,2]
dummy_arr = [4,5,[8,9]]
arr.push(...dummy_arr)
console.log(final_arr)
dummy_arr[2][1] = 10
console.log(dummy_arr)
console.log(final_arr)




