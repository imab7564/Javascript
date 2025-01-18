const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] this means that it push that in the form of array

const all_heros=marvel_heros.concat(dc_heros);//since concat return new array that's why we store it in the new array

console.log(all_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//********* spread the array ********
const all_new_heros=[...marvel_heros,...dc_heros]

console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// ******* Flatting of array **********
const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const another_real_arr=another_arr.flat(3)

 console.log(another_real_arr);
//     [1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,5]
 
console.log(Array.isArray("abhishek"));//false
console.log(Array.from("abhishek"));//['a','b','h','i','s','h','e','k']

console.log(Array.from({name:"abhishek"}));//[]
//can't able to convert this into array because ye nahi samjh paya ki key ko karna h ya fir value ko that's why ye [] return karta h


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

console.log(Array.of('a','b','h','i'));//[ 'a', 'b', 'h', 'i' ]


