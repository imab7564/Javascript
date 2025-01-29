//falsy values

//false,0,-0,BigInt,0n,"",null,undefined,NaN

//truthy values

//"0","false"," ",[],{},function(){}

//how to check for empty array
const arr=[]
if (arr.length==0) {
    console.log("empty array");
}
//how to check for empty object 
const emptyObj={}
if(Object.keys(emptyObj).length==0)
{
    console.log("Object is empty");
}

//Note:
//false==0  -->true
//false=='' -->true
//0==''     -->true


//Nullish coalescing operator(??):null undefined
//ye safety check karta h do values ka null aur undefined kyuki jab databse se values aata h to pata nahi chalta h ki kya value h uske liye use karte h 

let val1
// val1=5??10
// console.log(val1);//5
// val1 =null??10
// console.log(val1);//10

// val1=undefined??15
// console.log(val1);//15

// val1=null?? 10??20
// console.log(val1);//10

// val1=undefined??null
// console.log(val1);//null

// val1=null??undefined
// console.log(val1);//undefined
