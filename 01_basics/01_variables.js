const accountId=1442
let accountEmail="abhishek@google.com"
var accountPsw="12345"
accountCity="Allahabad" //this is not a good practice
let accountState;

//accountId=2 --> this is not allowed
accountEmail="ab@ab.com"
accountPsw="2122"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPsw,accountCity,accountState])

/*
summary of lecture-1
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/
