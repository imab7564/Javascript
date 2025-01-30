//for of loop 

//[{},{},{}] -->this is array k andar object
const arr=[1,2,3,4,5]
// for (const element of object) {
    
// }
//yaha par jo object h syntax me uska mtlb array,strings,etc not wo wala Object 

for (const it of arr) {
    console.log(it);
}
//output:
// 1
// 2
// 3
// 4
// 5

//e.g-2
const greetings="Hello World!"
for (const it of greetings) {
    console.log(it); 
}
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d
// !


//Map. -->collection of key-value pairs
// It's unique in the Map's collection,order v same hota h jis order me aaya h usi order me rahega

const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

//how to loop in the map 
for (const key of map) {
    console.log(key);
}
//iss case me pura array k form me print hua
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

//this is the correct way to loop in the map
for (const [key,value] of map) {
    console.log(key,':-',value);
}
// IN :- India
// USA :- United States of America
// Fr :- France

//how to loop in the object
const myObj={
    'game1':'NFS',
    'game2':'spiderman'
}
// 
//this is not the correct way to loop in the object