//de-structuring object ka v hota h or array ka v 
//now we discuss about de-structuring of object

const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor
//baar baar course na likhna pade uske liye syntax h
const {courseInstructor:Instructor}=course
console.log(courseInstructor);//Hitesh

console.log(Instructor);//Hitesh

//API(Application Programming Interface)
//-->It's a set of rules that allows software applications to communicate with each other.

//JSON(Javascript Object Notation)
{
    "name":"Abhishek",
    "coursename":"Js in Hindi",
    "price":"free"
}