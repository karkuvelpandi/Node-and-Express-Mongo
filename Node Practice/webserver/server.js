const http=require('http')
const dotenv=require('dotenv')
const fs=require('fs')

dotenv.config({path:'./envVariables/config.env'})

let port=process.env.PORT
let hostName=process.env.HOST_NAME

let server = http.createServer((request,response)=>{
    let url=request.url
            response.writeHead(200,{'Content-Type':'text/html'})
            if(url==='/'){
                fs.readFile('./view/index.html','utf-8',(err,data)=>{
                      if(err)throw err
                      response.end(data)
                })
          }
          else if(url==='/about'){
                fs.readFile('./view/about.html','utf-8',(err,data)=>{
                      if(err)throw err
                      response.end(data)
                })
          }
          else{
            response.writeHead(404,{'Content-Type':'text/html'})
            response.end("<h1>404!...Error page not found</h1>")
 
          }
           
})

server.listen(port,()=>{
console.log(`server is running on http://${hostName}:${port}`);
})