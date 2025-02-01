// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     return item
// })
// console.log(values);//undefined


//filter ->values ko return karta h 
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num) => num>4)
//console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
// const newNums=myNums.filter((num) => {num>4})
// console.log(newNums);//[]-->it's because scope has been started that's why it return object we can correct it by writing return 

const newNums=myNums.filter((num) => {
    return num>4})
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userbooks=books.filter((bk)=>bk.genre=='History')
  console.log(userbooks);
//   [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

userbooks=books.filter((bk)=>{bk.publish>=2000})
console.log(userbooks);//[]--> it is just because a scope has been started by using {} in the arrow function can be fixed using return keyword

userbooks=books.filter((bk)=>{ return bk.publish>=2000})
console.log(userbooks);
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]

userbooks=books.filter((bk)=>{ 
    return bk.publish>=1995 && bk.genre==='History'})
console.log(userbooks);
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]