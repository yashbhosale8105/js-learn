const accountId = 144553
let accountEmail = "yashbhosale8105@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//if any value is not assigned to function the it give output as undefined
// accountId = 22 //not allowed as const is declared for it so it cant be changed , use let if want to change values
accountEmail = "example@gmail.com"
accountPassword = "8105"
accountCity = "Thane"

console.log("accountId");

/*
Prefer not to use var
because of issue in block and functional scope 
without any let or const can be also used but avoid it
*/
console.table([accountEmail, accountPassword, accountCity, accountId, accountState])