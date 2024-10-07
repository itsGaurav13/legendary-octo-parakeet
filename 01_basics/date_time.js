let mydate = new Date();
console.log(mydate.toString());
console.log(typeof mydate);

console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());

console.log(mydate.toLocaleString());


let month = new Date(2023 , 7,1)
console.log(month.toDateString()) 

// time

let mytimestamp = Date.now()
console.log(mytimestamp);
 
console.log(month.getTime())  // Mili second

// second

console.log(Math.floor(Date.now()/1000));
