//we can declare object in two ways :literal and constructor
//when u make the object using constructor then it is singleton and when u make it is using literal then singelton will not be formed.

//Object.create --> this is constructor method k through object create karna 

//Question:take a symbol add it in the keys of object and then print it 

const mySym=Symbol("key1")
//object literals
const Jsuser={
    name:"Abhishek", //by default name ko treat karta h string ki tarah "name"
    "full name":"Kumar Abhishek",
    [mySym]:"key1",//[] isme me hi dalna padta h syntax h
    age:21,
    location:"Patna",
    email:"ab@google.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}
//accessing the object
console.log(Jsuser.email);//not a good practice //ab@google.com

console.log(Jsuser["email"]);//ab@google.com
console.log(Jsuser["full name"]);//Kumar Abhishek
console.log(Jsuser[mySym]);//key1

//Freeze concept
Jsuser.email="ab@chatgpt.com"
//Object.freeze(Jsuser);
Jsuser.email="ab@microsoft.com"
console.log(Jsuser);
// {
//     name: 'Abhishek',
//     'full name': 'Kumar Abhishek',
//     age: 21,
//     location: 'Patna',
//     email: 'ab@chatgpt.com',
//     isLoggedin: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'key1'
//   }


//Function
Jsuser.greeting=function(){
    console.log("Hello Js user"); 
}
Jsuser.greetingTwo=function(){
    console.log(`Hello Js user, ${this.name}`); 
}
console.log(Jsuser.greeting());
//Hello Js user
//undefined Dono print hota h 
console.log(Jsuser.greetingTwo());
//Hello Js user, Abhishek
//undefined