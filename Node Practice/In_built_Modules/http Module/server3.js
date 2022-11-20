const http=require('http')
const dotenv=require('dotenv')
const fs=require('fs')

dotenv.config({path:'./config/config.env'})
let port=process.env.port
let hostName=process.env.HOST_NAME
console.log(port);

let server=http.createServer((request,response)=>{
      response.writeHead(200,{'content-type':'text/html'})
    //   response.end('hello good evening...')
    fs.readFile('./view/index.html','utf-8',(err,data)=>{
            if(err)throw err 
            response.end(data)
    })
})

server.listen(port,hostName,()=>{
  console.log(`server is running on http://${hostName}:${port}`);
})