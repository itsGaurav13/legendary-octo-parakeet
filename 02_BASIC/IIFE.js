// Immediately Invoked Function Expression

// () function call () execution

// jab global scopepollution se problem hoti hai toh hum IIFE use karte hai

(function chai(){
    // this is named IIFE kioki chai eska naam hai
    console.log("DB Connected")
})();  // we have to use ; in the end of code



// use arrow function

(()=>{
    // this is unnamed IIFE kioki eska naam nhi  hai
    console.log(`DB CONNECTED TWO`)
})();

// we are adding variable

((name)=>{
    console.log( `DB CONNECTED THREE ${name}`)
})("gauravSingh")