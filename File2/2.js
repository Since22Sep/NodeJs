// Synchronous or blocking -> line by line execution
// Asynchronous or non-blocking -> line by line execution not guarantee , call backs will fire.

// apna jo program hai wo block na ho aur execute ho jae.. wait na krna pade... 
// aesa prateet hoga ki line by line execute nahi ho rha hai code.

const fs = require("fs");

let text = fs.readFile("dele.txt" , "utf-8" ,(err,data) =>{
    console.log(err,data)
})
console.log("This is a message")

// The main thing to notice after executing the above code is we are getting the "This is the message" first and then the callback function is returning the output.

// the reason is it is ansynchronous function . it allows the readFile() function to read the file completely , by the time the code is reading the file the next block of code is executed and the when the reading is completed it then prints the data.