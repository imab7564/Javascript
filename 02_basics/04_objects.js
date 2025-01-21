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
//const obj3={obj1,obj2}
//console.log(obj3);//object k andar object ho jayega isse

const obj3=Object.assign({},obj1,obj2)//here {} acts as target and rest other act as source ,sare source target me chale jayenge
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



//another way (popular one)
const obj4={...obj1,...obj2}
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//jab database se value aata h 
const users=[
    {
        id:1,
        email:"ab@gmail.com"
    },
    {
        id:1,
        email:"ab@gmail.com"
    },
    {
        id:1,
        email:"ab@gmail.com"
    },
    {
        id:1,
        email:"ab@gmail.com"
    }
]
users[1].email

console.log(Object.keys(tinderUser));//iska datatype array h
//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
//[ '123abc', 'sam', false ]

console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty(isLoggedIn))//ye boolean me result deta h 
//true