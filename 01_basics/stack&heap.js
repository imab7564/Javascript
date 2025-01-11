//stack(Primitive data k sath use hota h)
//=> jab v stack memory use hota h to jo v variable declare karte ho uska ek copy milta h
//heap(non primitive data k sath use hota h)
//=> jab v heap memory use hota h to wo reference milta h 

let myYoutube="abdotcom"
let anothername=myYoutube//means myYoutube ka copy banega yahan to change copy hoga original nahi
anothername="chaiaurcode"

console.log(myYoutube);
console.log(anothername);

//non primitive
let userOne{
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="ab@google.com"

console.log(userTwo.email);//"ab@google.com"
console.log(userOne.email);//"ab@google.com"
//dono ka same hi output hoga kyuki userTwo jo h userOne ko reference kar raha h to agar userTwo me agar changes karenge to userOne me reflect hoga 
