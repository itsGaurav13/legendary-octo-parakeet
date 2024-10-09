// Control flow or logic flow
//   <   less then
//   >   greater then
//   <=  less then equal to
//   >=  greater then equal to
//   ==  check 
//   !=  not equal to
//   === its also check data type strict equal
//   !==  strict checking Anti Pattern

// if(2==2){
//     console.log("run")

// }

// this program will not run beacuse 2 or "2" is not equal in data type
// if(2==="2"){
//     console.log("run")

// }

// let temperature =41

// if(temperature!=40){
//     console.log( "less then 50")
// }
// else{

//     console.log("temperature is greater then 50");
// }


// ///////////////////////
// let score =500
// if(score>100){
//     const power ="fly"
//     console.log (`user power: ${power}`);

// }
// // console.log(`user power:${power}`);   this code will ot run because this is not a var this let and const 

// let balance =1000
// if(balance<400){
//     console.log("less then 400")

// }else if(balance>1050){

//     console.log("greater than 1050")
// } else if( balance!=1000){
//     console.log("balance is equal or not")
// } else if(balance==="1000"){
//     console.log("balance is equal or not")

// }
// else if(balance===1000){
//     console.log("balance is equal ")

// }
// else{
// console.log("less than 1200")
// }


 let userloggedIn = true
 let debitcard =true
 let useremail = true
 let loggedInFromGoogle =false

 // logical operator ////////////////////////////////////////////////////

 if(userloggedIn && debitcard) {
    console.log("Allow to buy course")

 }
 if (useremail || loggedInFromGoogle){
    console.log ("allow to use")
 }


 // nullish coalescing operator (??) null , undefinied

 let val;
 val=5??10  //answer 5
 val = null ?? 12 // 12

 console.log(val)

 // terniary operator
//  condition ? true : false

let iceTeaprize =100
iceTeaprize <=80 ? console.log("less than 80"):console.log("more than 80")