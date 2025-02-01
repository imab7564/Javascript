//reduce
const myNum=[1,2,3]
//const myTotal=myNum.reduce((acc,num)=>acc+num,0)
//here 0 is the starting value of the accumulator
//console.log(myTotal);//6

//another way of doing this

const myTotal=myNum.reduce(function(acc,num){
    return acc+num},0)
console.log(myTotal);//6

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"Mobile Dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]
const CartTotal=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(CartTotal);//22996
