/*
let arr = [1,'A', 'B']
console.log(arr.length)



arr[6] = "Yash"
arr.forEach((item,index) => {
    console.log(`item : ${item} ,  index : ${index}`)
})
console.log(arr)
*/
/*

    let arr = ["Yash",23,true]
    let dummy_arr = arr

    dummy_arr.push("Rohit")

    console.log(arr) // [ 'Yash', 23, true, 'Rohit' ]
    console.log(dummy_arr) // [ 'Yash', 23, true, 'Rohit' ]

    // both arr and dummy_arr points to same array
*/

/*

//--------Concat() and SpreadOperator--------------------
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

/*
//---------Splice() and Slice()--------------------
let arr = [3 ,4,'A',['p','q',12],'C',10]
console.log(arr.join()) // String -> 3,4,5,6,A,B,C

arr = [3 ,4,'A',['p','q',12],'C',10]
let spliced_arr = arr.splice(2,4)
console.log("Spliced Array : ",spliced_arr)
console.log("Original Array : ",arr)


arr = [3 ,4,'A',['p','q',12],'C',10]
let sliced_arr = arr.slice(1,4)
console.log("Sliced Array : ",sliced_arr)
console.log("Original Array : ",arr)

*/

let arr = [1, 2, [ 3, 4], 5, [6, , [ 7, 8], 9]]
console.log("Original Arr : ",arr)

let newArr = arr.flat()
console.log("Flattened Arr (default depth 1) : ",newArr)

newArr = arr.flat(Infinity)
console.log("Flattened Arr depth infinity : ",newArr)