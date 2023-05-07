  // The first step is to include the module
  const fs = require('fs')


let text = fs.readFileSync("dele.txt", "utf-8")

console.log(text)

text = text.replace("browser", "Dipanshu")

console.log("Creating a new file...")
fs.writeFileSync("dipanshu.txt",text)