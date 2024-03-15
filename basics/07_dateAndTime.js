/*
let myDate = new Date()
console.log(myDate) // 2024-03-15T02:36:12.689Z
console.log(typeof myDate) // object

console.log(myDate.toString()) // Fri Mar 15 2024 08:06:12 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()) //Fri Mar 15 2024

console.log(myDate.toLocaleString()) // 15/3/2024, 8:08:58 am

console.log(myDate.toLocaleDateString()) // 15/3/2024

console.log(myDate.toJSON()) //  2024-03-15T02:37:42.345Z 

console.log(myDate.toISOString()) // 2024-03-15T02:37:42.345Z

*/


// let myCreatedDate = new Date(2023,0,23)
// year, month/ date / hour/ min , month start from 0 i.e Jan = 0 , Dec=11
// let myCreatedDate = new Date(2023,0,23, 17,3) 
/*
let myCreatedDate = new Date('2024-03-15') 
console.log(myCreatedDate.toLocaleString())

let myTimeStamp =Date.now()
console.log(myTimeStamp) // ms seconds form 1970
console.log(myCreatedDate.getTime())
*/

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getFullYear())
console.log(newDate.getDay())

let modifiedDate = newDate.toLocaleString('default', {
    weekday: "long",
    hour:   "2-digit",
    hourCycle : "h12",
})

console.log(modifiedDate)