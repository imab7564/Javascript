const user={
    username:'Abhishek',
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        //console.log("Got user details from database");
        //console.log(`Username:${this.username}`);
        //Output=>Username:Abhishek

        console.log(this);
        // {
        //     username: 'Abhishek',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}
console.log(user.getUserDetails());
console.log(this);//{}

function User(username,loginCount,signedIn){
    this.username=username
    this.loginCount=loginCount
    this.signedIn=signedIn
    return this
}
// const Userone=User("Abhishek",12,true)
// const Usertwo=User("Abhi",10,false)
//console.log(Userone); //although hmlog Userone ko print kar rahe h but output Usertwo bala de raha hoga ,ye wala overwrite kar raha h Userone ko it is just because constructor function creates new instance everytime to handle this write "new" every time

const Userone=new User("Abhishek",12,true)
const Usertwo=new User("Abhi",10,false)
console.log(Userone);
console.log(Usertwo);
