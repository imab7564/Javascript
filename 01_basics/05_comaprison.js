console.log("2">1);//true
console.log("02">1);//true

console.log(null >0);//false
console.log(null ==0);//false
console.log(null >=0);//true
console.log(null<=0);//true
//true only in comparison with equality (>= & <=)

console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<0);//false

//false in each case for undefined

//===  =>this is strict check
console.log("2" === 2);//false
