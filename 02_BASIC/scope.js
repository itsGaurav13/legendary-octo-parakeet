// global scope & block scope

function one (){
  let  username ="Gauuravsss"
    function two (){
        const website ="youtube"
        console.log(username)

        // console.log(website)

    }
    two()
} 
one()


// const [a,b]=[10,"hii"]
// console.log(a,b);

if(true){
  const user = "gaurav"
  if(user === "gaurav"){
    const web ="youtube"
    console.log(user  +  web)
    console.log(web)
  }
  console.log(user)
}


// ++++++++++++++++++interesting+++++++++++++++
// 1st Type of decleration function
function addone(num){
  return num +1

}
console.log(addone(2)
)

// 2nd type of declearation function


let addTwo =function(num){
  return num+4

}
console.log(addTwo(5))



