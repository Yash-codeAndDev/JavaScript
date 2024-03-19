const arr = [5, 1, 3, 2, 6]


let numTobinary = arr.map(function(ele){
    return ele.toString(2)
})

console.log(numTobinary)


let numLessThanThree = arr.filter(function(x){
    return x < 3
})
console.log(numLessThanThree)


let sumOfArray = arr.reduce(function(acc , curr){
    return acc + curr
}, 10)
console.log(sumOfArray)

const people = [
    { firstName: 'John', lastName: 'Doe', age: 30 },
    { firstName: 'Jane', lastName: 'Smith', age: 25 },
    { firstName: 'Michael', lastName: 'Johnson', age: 40 },
    { firstName: 'Emily', lastName: 'Davis', age: 35 },
    { firstName: 'Chris', lastName: 'Lee', age: 30 },
    { firstName: 'Jessica', lastName: 'Brown', age: 25 },
    { firstName: 'David', lastName: 'Taylor', age: 40 },
    { firstName: 'Emma', lastName: 'Wilson', age: 30 }
];


const agrFrequency= people.reduce( function (acc,curr){

    const {age} = curr
    acc[age] = (acc[age] || 0) + 1
    return acc
},{})

console.log(agrFrequency)