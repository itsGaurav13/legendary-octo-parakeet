// let coding= ["js","python","c++","ruby"]
// let values=coding.forEach((item)=>{
//     console.log(item)
    
// })
// console.log(values)

// for each value Return nhi karega

// filter operation

let myNum=[1,2,3,4,5,6,7,8,9,10]
let values =myNum.filter((item)=> {
    // console.log(item)
    return item

})
// console.log(values)

// easy way


let sample =[1,2,3,4,5,6,7,8,9,10]
let me= sample.filter((val)=>val>5)
// console.log(me)

// console.log(3+true) youtube


// for each num >5


// hard way 
let samp =[]
sample.forEach((val)=>{
    if(val>5){

        samp.push(val)
    }
  
    
})
// console.log(samp);


// example


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
//   let userbook =books.filter((bk)=> bk.genre === 'History')
//   console.log(userbook);

let userbook= books.filter((boo)=>  boo.publish >=2000 && boo.genre ==="Science")
console.log(userbook);

////////////////////////////////////////////
// Map  /// automatically return value


let myNums= [1,2,3,4,5,6,7,8,9,10]
// let valu=myNums.map((num)=>num+10)
// console.log(valu)


// chaining


let newnum =myNums.map((val)=>val*10) .map((val)=>val+1).filter((val)=> val>=40)
console.log(newnum)