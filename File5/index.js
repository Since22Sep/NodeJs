
// we have created a simple average func now need to import this module by
const mod = require("./mod")

// To get back the function we have to make the function behave explicitly 

const average = require("./mod")

console.log(average([3,4]))
console.log("This is index.js")

console.log(mod.avg([5,7]))

// console.log(mod.name) 
