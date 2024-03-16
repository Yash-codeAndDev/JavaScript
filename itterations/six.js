let myNums = [1,2,3,4,5]

// acc holds initial value provided by user
// after each itteration acc holds value of cueeVal

let newNums = myNums.reduce( function (acc , currVal) {
    console.log(`acc ${acc} and currVal ${currVal}`)
    return acc + currVal
}, 0)
console.log(newNums )

newNums= myNums.reduce( (acc,currVal) => (acc+currVal),0 )
console.log(newNums)

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "ios dev course",
        price : 5999
    },
    {
        itemName : "Data Scientist",
        price : 12999
    },
]

const totalBill = shoppingCart.reduce( (acc,item) =>(item.price + acc) , 0 )
console.log(totalBill)