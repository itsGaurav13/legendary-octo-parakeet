// for

for (let i = 0; i <= 11; i++) {
    const element = i;
    if (element==6) {
        console.log("6 is a best number")
        
    }
    console.log(element)
}

for (let i = 1; i <=10; i++) {
    console.log(`outter loop : ${i}\n`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop:${j} outter loop : ${i}`)
        console.log(i +'*'  + j +'=' + i*j )
    }
}

// Array
let myArray =["ironman","spiderman","thor","hulk"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}


//////////////    keyword             ///////////////////////////////////////

// break & continue

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log("5 is the best number")
        continue;
        break;
        
    }
    console.log(`value of I is : ${index}`);
    
}