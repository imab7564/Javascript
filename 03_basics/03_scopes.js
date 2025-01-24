
if(true)
{
    let a=10
    const b=20
    var c=30
}
//console.log(a);-->a is not defined
//console.log(b);--> b is not defined
console.log(c);//30

let a=300
if(true)
{
    let a=30
    const b=20
}
console.log(a);//300

function one()
{
    const username="Abhishek"
    function Two()
    {
        const website="youtube"
        console.log(username);//Abhishek
    }
    //console.log(website);-->Not defined
    Two()
}
one()

if(true)
{
    const username="Abhishek"
    if(username==="Abhishek")
    {
        const website=" youtube"
        console.log(username+website);//Abhishek youtube
    }
}

//************ Interesting *********

//two way of declaring function
function addone(num)
{
    return num+1
}
console.log(addone(5))//6

const addTwo=function(num)
{
    return num+2
}
console.log(addTwo(5));//7

//Note:we can call addone(5) before the intialization of the function addone but we can not call addTwo(5) before the intialization of addTwo() because it is stored in a variable 