// // how to declare arrays

// let hero =["gurav", "ironMan","thor"]
// console.log(hero[1]);

// let myarray = new Array( 21,43,"gaurav",222)
// console.log(myarray[2])


// const myarr= [0,1,2,3,4]

// console.log(myarr[3]);


// // Methods of Arrays

// myarr.push(5)
// myarr.push(6)
// myarr.pop()
// console.log(myarr)



// let shiftOP =[0,1,2,3,4,5]
// // shiftOP.unshift(10) its add first element of arrays
// shiftOP.shift() // its reove first element of arrays
// console.log(shiftOP);

// console.log(myarr.includes(9))
// console.log(myarr.includes(5))
// console.log(myarr.indexOf(3));


// join method chnage the type like convert number into string  

// let newarra = myarr.join()
// console.log(newarra);
// console.log(typeof newarra);
// console.log(myarr);


//slice , splice

// console.log("A", myarr)
// let mynewarr =myarr.slice(1,3)
// console.log(mynewarr)
// console.log("B", myarr)

// let mynewarr2 = myarr.splice(1,3)
// console.log("C", myarr)
// console.log(mynewarr2)


// slice & splice

let myarr =[0,1,2,3,4,5]
console.log(myarr[2])
console.log(myarr)
console.log("A",myarr)
let myNarra2 =myarr.slice(1,4)
console.log(myNarra2)
console.log("B",myarr)
let myNarra3 = myarr.splice(1,4)

console.log("C",myarr)
console.log(myNarra3)


let marvel =["ironman","thor","captain","hulk"]
let DC_heros =["Batman","superman","flash"]
// marvel.push(DC_heros) mix 
let All_Heros =marvel.concat(DC_heros)
// console.log(All_Heros);

All_Heros =[...marvel,...DC_heros] //Spread function
console.log(All_Heros)


// we are using ++++ Flat(infinity)  ++++ for sloving problem like critical array

let array = [1,2,3,[4,5,6],7,8,[6,7,],6]
let real_array = array.flat(Infinity)
console.log(real_array)


// how to make a array 

console.log(Array.from("GauravSingh"))
console.log(Array.isArray(new Array("Gaurab")))

console.log(Array.from({ name: "gaurav"})) // its give empty array


// .of & from is similar it convert objet into array
   let score =100
   let score2=200
    let score3 =300

console.log(Array.of(score,score2,score3))