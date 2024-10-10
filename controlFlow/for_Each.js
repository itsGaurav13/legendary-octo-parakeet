 let coding= ["js","python","c++","ruby"]
//  coding.forEach( function /*name*/(value){      // in for each loop we are not using the function variable` beacuse callback hai

//     console.log(value)
//  })


// we can also use the arrow function

coding.forEach( (value)=>{
    // console.log(value)
})

// another example

function printMe(value){
    // console.log(value)

}
coding.forEach(printMe)


// another example

coding.forEach( (value,index,arr)=>{

    // console.log(value,index,    arr)
})


// ["","",""]
// [{},{}]
// using fro each loop

let mycode =[
    {
        languageName :"javascript",
        filenmae :"js"
    },
    {
        languageName :"java",
        filenmae :"java"
    },
    {
        languageName :"python",
        filenmae :"py"
    }
]
mycode.forEach( (language ,index,arr)=>{

    // console.log(language)
    console.log(index,language,arr)
})

