function sayMyName()
{
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
//sayMyName --> gives reference
//sayMyName()-->function gets executed

function addTwoNumbers(num1,num2)
{
    console.log(num1+num2); 
}
console.log(3+4);//7
console.log(3+"a");//3a
console.log(3+null);//3

function loginUserMsg(username)
{
    return `${username} just logged in`
}
console.log(loginUserMsg("Abhishek"))//Abhishek just logged in
console.log(loginUserMsg())//undefined just logged in. -->Important

