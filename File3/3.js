// const http = require('http')
// const fs = require('fs')

// // code to read file 
// const fileContent = fs.readFileSync('index.html')

// // final step is to make server and serve the file

// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{'Content-type' : 'text/html'})
//     res.end(fileContent)
// })

// // till now we have made the server and now we will make this server listen on its port. Suppose we want to make it listen to port 80 so

// server.listen(80, '127.0.0.0', ()=> {
//     console.log("Listening on port 80")
// })


const http = require('http');
const fs = require('fs')
const fileContent = fs.readFileSync('index.html')

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(fileContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
