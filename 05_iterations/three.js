//for in loop is used for looping in the Object
const myObj={
    js:'Javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObj) {
    console.log(key);
}
// js
// cpp
// rb
// swift
//iske through hmlog keys ko print kar payenge

//for printing keys and values of object 
for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
}
// js is for Javascript
// cpp is for C++
// rb is for ruby
// swift is for swift by apple

//looping in the map
const map=new Map()
map.set('IN','India')
map.set('USA','United States Of America')
map.set('Fr','France')
// for (const key in map) {
//     console.log(key);
// }
//this can't be used for looping in the map