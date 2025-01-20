//const tinderUser={}//-->this is non singelton object

const tinderUser=new Object()//-->this is singleton object
console.log(tinderUser);//{}

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

console.log(tinderUser);
//{ id: '123abc', name: 'sam', isLoggedIn: false }  

const regularUser={
    email:"ab@google.com",
    fullname:{
        userfullName:{
            firstname:"kumar",
            lastname:"abhishek"
        }
    }
}
console.log(regularUser.fullname.userfullName.lastname);//abhishek

//Merging of objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
