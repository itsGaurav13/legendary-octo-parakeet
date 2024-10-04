
// nums


const balance = new Number(100)

console.log(balance);
console.log( balance.toString().length)
console.log( balance.toFixed(4))
console.log(typeof balance);


// precision
const another =12377.844
console.log(another.toPrecision(5));

// tolocalString  100,000,000,000,000
let hunderds =100000000000000
console.log(hunderds.toLocaleString('en-IN'))




// ++++++++++++++Math+++++++++++++


console.log(Math);
console.log(Math.abs(-4-3-8)) // abs() stand for absolute mean ye minus value ko plus m karta hai 
console.log(Math.round(4.8)); // round mean round off
console.log(Math.ceil(9.2,)); // its show the top value of number like 9.3 its give the roundof 10
console.log(Math.floor(8.7));
console.log(Math.min(3,5,6,1,2)); // its show minimum value 
console.log(Math.max(7,4,8,6,9,4,7,89,7,6,54,6,78,9,99)); // its show the maximum value 

console.log(Math.random());// its random value lie between 0 to 1 always 
 console.log((Math.random()*10)+1)

let min =10
let max=20
console.log(Math.floor(Math.random()* (max-min+1)+min)
)












let maximum=433
let minimum =772
 console.log(Math.floor(Math.random()* (maximum -minimum +2)+maximum))



