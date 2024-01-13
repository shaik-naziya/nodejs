const http = require('http');
// const server = http.createServer();

function handler(req,res){
    res.write("hello world")
    res.end()
}
const server = http.createServer(handler);
const port = 2000
// console.log(`server listening on port,port`)
server.listen(port,()=>{console.log("hello world",port)});
