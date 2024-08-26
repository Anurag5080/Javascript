//In js you can add semi colon or not it's all right as js is a smart autocorrected language

const accountId = 144553
let accountEmail = "anurag26@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //it's also possible in js
let accountState; //By default js gives it undefined value

// accountId = 2 // not allowed coz const variable can't change once it's declared

accountEmail = "anurag@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
as in var different variable of same name is ppossible and on make changes
it makes changes in whole js file 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//it gives output value of all variable as in table format