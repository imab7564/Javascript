// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());//Wed Jan 15 2025
console.log(myDate.toLocaleString());//1/15/2025, 10:55:28 AM

console.log(typeof myDate);//object

//let myCreatedDate=new Date("2023-01-23")
let myCreatedDate=new Date(2023,0,23)//YYYY,MM,DD
console.log(myCreatedDate);//2025-01-15T00:00:00.000Z
console.log(myCreatedDate.toDateString());//Wed Jan 15 2025

let myTimeStamp=Date.now()
console.log(myTimeStamp);//ye millisec me 1970 se abhi tak ka time de deta h
console.log(myCreatedDate.getTime());//ye myCreatedDate k respect me time batayega

console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());//jan h isliye 0 

newDate.toLocaleString('default',{
    weekday:"long"
})

