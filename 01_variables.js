const accountId = 155643
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

/*
const cannot be modified

accountId = 1234
console.log(accountId) 

*/

accountEmail = "xyz@gmail.com"
accountPassword = "56878"
accountCity = "Dehradun"

/*
    avoid using var because of issues of block scope and 
    function scope

    variable declared without using any variable should be avoided
*/

// Uninitialized variable are set to undefined
let accountState

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
