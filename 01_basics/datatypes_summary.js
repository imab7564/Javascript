//datatypes divided into two category based on how data is stored in memory and how it is being fetched(accessed)

//primitive
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);//false

const bigNumber=23425427838268929n

//Reference(Non primitive)
//Arrays,Objects,Functions
const heros=["thor","doga","naagraj"]
//object
let myObj={
    name:"abhishek",
    age:21,
}
console.log(typeof heros);
console.log(typeof myObj);
//Arrays =>Object
//Function =>function
//Object =>object