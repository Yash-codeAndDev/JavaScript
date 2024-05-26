console.log("Concat() : ")
let arr = [1,2]
let dummy_arr = [4,5 ,[8,9]]
let final_arr = arr.concat(dummy_arr)
console.log("Final Array : ",final_arr)
dummy_arr[2][1] = 10
console.log("Changed Dummy Array : ",dummy_arr)
console.log("Final Array : ",final_arr)


console.log("Spread Operator : ")
arr = [1,2]
dummy_arr = [4,5 ,[8,9]]
final_arr = arr.concat(dummy_arr)
console.log("Final Array : ",final_arr)
dummy_arr[2][1] = 10
console.log("Changed Dummy Array : ",dummy_arr)
console.log("Final Array : ",final_arr)

