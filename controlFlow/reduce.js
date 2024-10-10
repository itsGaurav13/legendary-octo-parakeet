let num=[1,2,3]
let me=num.reduce(function (accumulator , cuurentvalue) {
//  console.log(`${accumulator}and ${cuurentvalue}`)
 return accumulator+ cuurentvalue
    
},0)
// console.log(me)

//  how to write reduce in arrow fun


let mytotal= num.reduce((accumulator ,cuurentvalue)=>   accumulator+cuurentvalue,0)
// console.log(mytotal)


let shoppingcart =[
    {
        course: "javascript",
        prize :4999
    },
    {
        course: "java",
        prize :5599
    },
    {
        course: "mobile",
        prize :9999
    },
    {
        course: "typescript",
        prize :8760
    },
]
let pay=shoppingcart.reduce((acc,vall)=>acc+vall.prize,0)
console.log(pay)