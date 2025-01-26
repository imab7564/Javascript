//Immediately Invoked Function Expressions(IIFE)
//Two main reason:
//1)we don't want pollution frm the global scope and to remove those we use IIFE
//2)we want to execute the file immediately

// function chai()
// {
//     console.log("DB connected");  
// }
// chai()//DB connected

//Below is the named IIFE
(function chai()
{
  console.log("DB connected");//DB connected
})();
//Note: fn k upar () ye laga do to sahi h 

//()() -->1st bala fn k defn ka aur 2nd bala fn k execution ka 

//Arrow fn k form me IIFE
// VVIP:Two or more IIFE likne k liye first IIFE k baad ; lagana compulsory h 
//Unnamed IIFEDB coonected Two ${name}
( (name)=>{
    console.log(``);//DB coonected Two Abhishek
})("Abhishek")