// () this is execution

function sayMyname (){
    console.log("G")
    console.log("A")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
    
}
// sayMyname ()                   // sayMyname is reference  ///   () is a execution



// addd two nummbers
// //pass number or anything parameter

function addTwoNum(num1, num2 ){
    // console.log(num1 + num2)                  1 option

    // let result = num1 + num2                  2nd option
    // return result

    return num1+num2
    console.log("gaurav") // this console .log not print beacuse after return  keyword no one commond will be execute 

}
let result=addTwoNum(200,20)
// console.log("Result :",result)


// how to pass different type of parameter or  arguements

function loginUserMsg(username ="sam"){
    // if(username  === undefined){
    //     console.log("Enter your username")
    //     return

    // }
    if(!username){
        console.log( " Please Enter a username")
        return
    }
    return `${username} just logged In`

}
// console.log(loginUserMsg("Gaurav"))
// console.log(loginUserMsg("singh"))


// ... 3dot is a REST opoerator 

// function CalculateMyCartPrize(...num1){
    
//     return num1
// }
function CalculateMyCartPrize(val1 ,val2, ...num1){
    return num1

}


console.log(CalculateMyCartPrize(200 ,210,128,288,3000)) // 200 store in val1 & 210 store in val2 afte r that all the value stroe i the rest function


// we are using object in function

let user ={
    username: "gaurav",
    email: "gaurav@google.com"
}
let {username:U,email:E}=user

function handleObject (users /*we put anyObejct */){
    console.log(`usernmae is ${users.username} and eamil Id is ${users.email}`)

}
handleObject(user)
handleObject({
    username :"sam",
    email: "sam@google.com"
})


// using Array in function

let secondValueArray =[100,200,300, 400]
 function value(getArray){
    return getArray[1]

 }
 console.log( value(secondValueArray))