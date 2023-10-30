const accountId = 144553
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
accountCity = "Gyanpur"
let accountState;

// accountId = 2 not allowed

accountEmail = "dm@dm.com"
accountPassword = "21212121"
accountCity = "Varanasi"

console.log(accountId)


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])