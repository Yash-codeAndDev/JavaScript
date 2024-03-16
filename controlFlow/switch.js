const month = 2

switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("Feb")
        break
    case 3:
        console.log("March")
        break
    default :
        console.log("Default case")
        break
}

// Nullish Coalescing Opreator(??): null undefined


let val1;
val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 15
console.log(val1)

// first value except null and undefined is assigned
val1 = null ?? undefined ?? 43 ?? undefined ?? 80
console.log(val1)
