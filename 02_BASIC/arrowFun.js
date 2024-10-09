//  Arrow Function
//this keyword  // it telling about current context



let user ={
   username : "guarav",
   prize :999,
    
   welMsg:function(){
   
    console.log(`${this.username},welcome to website`) // we are using thus keyword in the {} 
    console.log(this)
   }
   
   
}
// user.welMsg()
// user.username="sam"
// user.welMsg()
// console.log(this)

////////////////////
// function chai (){
//     console.log(this)
// }
// chai()


const chai = ()=>{
   let username ="gaurav"
    console.log(this.username)
}
chai()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// simple Arrow function 


// if we are using {} then use return keyword if we are not then don't need {}or return keyword

// const addTwo = (num1 ,num2)=>{
//     return num1+num2                   explicit return 

// }
// console.log(addTwo(3,4))

                             // implicit return in which we are not using {}


    let addtwo =(num1,num2)=> num1+num2        //implicit return
        console.log(addtwo(3,4))

        //if we use () then we will not use return keyword c
      //   let addOne =(num1 ,num2)=>(num1+num2) 
        let addOne =(num1 ,num2)=>({usernmae:"guaravSingh"}) // we put object in ()
        console.log(addOne(4,5))

    
