const name="abhishek"
const repoCount=50
//console.log(name+repocount+"value");//old way of 
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName=new String('abhishek-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));//-1

const newString=gameName.substring(0,4)//abhi
console.log(newString);

const anotherString=gameName.slice(-8,4)//hi
console.log(anotherString);

const newStringOne="  abhi  "
console.log(newStringOne.trim());//abhi

const url="https://ab.com/ab%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));//false

console.log(gameName.split('-'));

