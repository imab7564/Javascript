//current context ko refer karna h to this keyword ka use karte h


const user={
    username:"Abhishek",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username},welcome to website` );
        console.log(this);
    }
}
console.log(user.welcomeMessage());
//Abhishek,welcome to website
user.username ="sam"
console.log(user.welcomeMessage());
//sam,welcome to website

//-->Now add console.log(this) in welcomeMessage() then in that case output will be:
// Abhishek,welcome to website
// {
//   username: 'Abhishek',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam,welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this);//{} -->when u are in the node environment then this refers to empty isi chij ko agar console me run karoge to window show karta h



//pahle js ko execute karne ka ek hi tarika tha browser k andar,jo engine tha jo js ko execute karta tha pahle bas browser k andar hi tha but nowadays usko hmlog bahar nikal kar standalone ho gya like node,dino,bern etc



//************* Arrrow Function **********
// function chai()
// {
//     let username="Abhishek"
//     console.log(this.username);//undefined
// }
// chai()
//other way
// const chai=function()
// {
//     let username="Abhishek"
//     console.log(this.username);//undefined
// }
// chai()

// const chai= ()=>{
//     let username="Abhishek"
//     console.log(this.username);//undefined 
// }
// chai()

//Now discuss about Arrow fn:
//Basic Arrow fn --> Syntax:()=>{}
// const addTwo= (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4));//7

//Implicit Arrow fn
const addTwo=(num1,num2) =>(num1+num2)
console.log(addTwo(3,4));//7
//Note :{} k andar likha to return keyword likhna padega
//() iske andar likha to return keyword nahi likhna padega 