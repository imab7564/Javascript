//rest and spread operator

//... --> this is the rest operator ,ye jitna v value aata h un sab ko ek array me bundle karke bhej deta h
// function calculateCartPrice(...num1)
// {
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500,2000));//[ 200, 400, 500, 2000 ]

function calculateCartPrice(val1,val2, ...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));//[500,2000] reason:val1 me 200 store karega and val2 me 400 and rest ko array me store karega 

//how to use object in function

const user={
    username:"Abhishek",
    price:199
}
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)

//anotherway
handleObject({
    username:"sam",
    price:399
})