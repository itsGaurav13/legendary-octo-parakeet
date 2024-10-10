// for in loop on object

let myobject={
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift : "swift by apple"
}
for (const key in myobject) {
   
    // console.log(myobject[key])
    //  console.log(`${key} shortcut of ${myobject[key]}`)
}

// array using

let program= [ "java", "sql","python","c++"]
for (const key in program) {
//  console.log(program[key])
    // console.log(`${key}.${program[key]} is a pogramming language `)
}

// ++++++++++++++++++++++++

let map = new Map ()
map.set("IND","INDIA"),
map.set("USA", "UNITED STATE OF AMERICA"),
map.set('FR',"FRANCE")
for (const key in map) {
    console.log(key)

}
