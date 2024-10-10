const name ="gaurav"
const age =21 
console.log(`Hello My name is ${name} and my age is ${age}`);

const username = new String('gauravsingh')
console.log(username)

console.log(username[2,3,5])
console.log(username.__proto__);
console.log(username.toUpperCase());

console.log(username.toLocaleLowerCase());
console.log(username.length);
console.log(username.charAt(3));
console.log(username.indexOf('r'));

let bhuvan =  username.substring(0,4)
console.log(bhuvan)

let getanother = username.slice(-9,6)
console.log(getanother)

const trimto=  "      gaurasfsgv       "
console.log(trimto)
console.log(trimto.trimStart())
console.log(trimto.trimEnd().trimStart())


//
// replace

const url = "https://animated-tribble-57x9x6vwjrvc76qr.github.dev/";
console.log(url.replace('tribble','tribbles'))

console.log( name.includes('gauravs'))