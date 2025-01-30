//for each loop 
const coding=["js","ruby","java","python","cpp"]
//call back function ka koi naam nahi hota h 
coding.forEach(function (num){
    console.log(num);
})
// js
// ruby
// java
// python
// cpp

//another way of writing funcion(arrow function)
coding.forEach((item)=>{
    console.log(item);
})
// js
// ruby
// java
// python
// cpp

//can we pass a predefined function 
function printMe(item)
{
    console.log(item);
}
coding.forEach(printMe)//just give the reference of the function don't execute it
// js
// ruby
// java
// python
// cpp

//other than item ,function have access of index and array
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

//array k andar object 
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"ruby",
        languageFileName:"rb"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})
// Javascript
// Java
// ruby