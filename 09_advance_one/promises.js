//promise is an object so it is created with new keyword
const promiseOne=new Promise(function(resolve,reject){
    //do an async tasks
    //DB calls,cyptography,network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
});

promiseOne.then(function(){
    console.log('Promise consumed');
})
//it will be executed only when resolve() is called.
// Async task is completed
// Promise consumed


//another way of dclaring promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve() 
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// Async task 2
// Async 2 resolved

//how to pass data from the network
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})
// { username: 'chai', email: 'chai@example.com' }

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Abhishek",psw:"123"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=> console.log(error)
)
.finally(()=> console.log("The promise is either resolved or rejected")
)
//if error ==true 
//then output will be->ERROR:Something went wrong
//if error ==false
//then output will be 
//{ username: 'Abhishek', psw: '123' }
//Abhishek

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Javascript",psw:"123"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

//we can also use async await(try catch) instead of then and catch 
async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log('error');
    }
}
consumePromiseFive()
//if error=false the output will be 
//{ username: 'Javascript', psw: '123' }
//if error =true the output will be
//like compilation error and to handle this we use try and catch

async function getAllUsers(){
    try {
        const response=await fetch('https://api.github.com/users/hiteshchoudhary')
        const data=await response.json()//converted the response into json format but it takes time so we use await there also
        console.log(data);
    } catch (error) {
        console.log('error');
    }
}
getAllUsers()

//how to do the same thing using then and catch instead of try and catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data)
)
.catch((error)=>console.log(error)
)

//note:fetch bala output sabse pahle aayega kyuki fetch jo h wo highest priority ka h 