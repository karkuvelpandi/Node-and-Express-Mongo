const http=require('http')
const dotenv=require('dotenv')
const fs=require('fs')
let url=require('url')

dotenv.config({path:'./envVariables/config.env'})

let port=process.env.PORT
let hostName=process.env.HOST_NAME

let server = http.createServer((request,response)=>{
            response.writeHead(200,{'Content-Type':'text/html'})
            fs.readFile('./view/index.html','utf-8',(err,data)=>{
                  if(err)throw err
                  response.end(data)
            })
})

server.listen(port,()=>{
console.log(`server is running on ${hostName}:${port}`);
})