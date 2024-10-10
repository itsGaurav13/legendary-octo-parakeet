// while loop

let index =0
while (index<=20) {
    // console.log(`value of index is :${index}`)
    index =index+3
}

// Array

let heroes=["flash","batman", "supermen"]
let arr=0
while (arr<heroes.length) {
    // console.log(`value of heroes is :${heroes[arr]}`)
        arr =arr +1
}


// do- while loop

let score =11
do {
    // console.log(`value of score is ${score}`)
    score ++
    
} while (score<=10);


// for of loop on Array +++++++++++++++++++++++++++
// ["","",""]
// [{},{}]

let arra =[1,2,3,4,5,6,7,8,]
for (const num of arra) {
    // console.log(num)
    
}

let strin_g= "hello Gaurav"
for (const greet of strin_g) {
    // console.log(`vale of greeting is :${greet}`)
    
}


/////// MAPS   ////////////
let map = new Map ()
map.set("IND","INDIA"),
map.set("USA", "UNITED STATE OF AMERICA"),
map.set('FR',"FRANCE")
// console.log(map);
for (const [element,value] of map) {  // destructure of Array
    // console.log(element ,':-',value)
    
}