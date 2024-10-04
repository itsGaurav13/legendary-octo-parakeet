// dynamic

//primitive data type CALL by Value //+++++++++++ its only give copy not actual data

//  7 type : String , number , boolean ,null, undefinied,symbol, BigInt


let stack = " guarav Singh"

let anotherStack =stack
anotherStack ="gaurvsingh11"
console.log(stack);
console.log(anotherStack);



//non primitive or Reference types

// Array ,object, function  

let useone = {
    username :"gaurav",
    userID : 12
}
let usertwo = useone
usertwo = "gaurav@gmail.com"


console.log(useone)
console.log(usertwo)