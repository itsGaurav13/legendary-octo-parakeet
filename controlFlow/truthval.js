// in truthy val or falsy val We are assuming the val this is right or wrong

let useremail="gaurav@123.com"
if(useremail){
    console.log("i have usermail")
}

// 2nd program will be not run because truthy or falsy assume that usermail is empty that why this program will not run  
let usermail="0"
if(usermail){
    console.log("i have usermail")
}



//  false value                        truthy value

//  false                              "0"
//  ""                                 'false'
//  0n                                 " "        //add space
//  0                                  [] 
//  -0                                 {}
//  BigInt,                            function(){}    //empty function
//  null                        
//  undefined
//  NaN


//Array 

let mail =[]
if(mail.length===0){
    console.log("array is empty")
}
// object

let emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")

}