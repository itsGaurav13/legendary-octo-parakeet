// constructor  cretae singleton

//  Object.create
// object literal
let mysymbol = Symbol("key1")

let JsUser={
    name:"Gaurav",
   "full name " :"Gaurav Singh",
   mysymbol : "mykey1",           ///if we want shiw sumbol then use square bracket in variable 
    email: "guarav@google.com",
    location : "Faridabad",
    lstLoggin :["Monday", "Fariday"],
    age : 21,
}
console.log(JsUser)
console.log(JsUser["full name"])
console.log( typeof JsUser.mysymbol);


// how to change a valaue in object 
JsUser.email = "singh@google .com"


// Object.freeze(JsUser) ///`use
JsUser.email = "singhgaurav@google .com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello jsuser")
}
JsUser.greeting2 = function(){
    console.log(`HELLO  JavaScript,${this.location,this.email}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2());



// we will discuss about singleTon  LIKE constructor 
                                        //  literal


const tinUser = new Object() // SingleTon object

const tin2User = {}         // non SingleTon object

console.log(tinUser)
console.log(tin2User)   // it's give same  output but difference is only on singleton

////////////////////////////////////////
let tinderUser ={}
tinderUser.name= "sham"
tinderUser.Id ="123abc"
tinderUser.isloggedIn =true
tinderUser.email="some@google.com"
// console.log(tinderUser)

//////////////////////////


// object k ander obejct OR we can say ++ nested ++ object++++++++++++++++++++

let regularUser= {
    email:"luffy@google.com",
    fullname:{
        fullusername:{
            firstname:{
                name: "Gaurav",
                lastname: "Singh"

            }
        }
    }
}
// we are using ? if their is no any fullname object in the variable
console.log(regularUser.fullname?.fullusername.firstname)



// how to concatination in object===== Object.assign()

let user1 ={hp:100,hp1:200,hp3:300}
let user2 ={ph:300,ph1:200,ph3:"gaurav"}
let user3 =Object.assign({},user1,user2)
// console.log(user3);

user3 ={...user1,...user2} // spread function
console.log(user3)


// value come from database 
const database =[{
    userId : "A1",
    UserEmail: "User@google.com"
},
{
    userId : "A1",
    UserEmail: "User@google.com"
},
{
    userId : "A1",
    UserEmail: "User@google.com"
}]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'))



// destructuring  / how to extract a value 

let course={
    coursename : "javascript",
    prize : 999,
    teacher: "hitesh"

}
let {prize:p ,coursename:c,teacher:t}=course  // extract the value 
console.log(p,c,t)



// JSON
{

}




// EXAMPLE
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }