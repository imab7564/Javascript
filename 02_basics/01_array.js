//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

//SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);


// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(remove element from s_idx to e_idx but don't include e_idx)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

const newArr=myArr.join()
console.log(newArr);//0,1,2,3,4,5
console.log(typeof newArr);//string


//slice and splice
console.log("A:",myArr);//A: [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3)
console.log(myn1);//[1,2]
console.log("B:",myArr);//B: [ 0, 1, 2, 3, 4, 5 ] means slice doesn't changes original array

const myn2=myArr.splice(1,3)
console.log(myn2);//[ 1, 2, 3 ]
console.log("C:",myArr);//C: [ 0, 4, 5 ]
//iska mtlb h ki splice se original array change ho jata h jo interval dete h wo original array se hat jata h



