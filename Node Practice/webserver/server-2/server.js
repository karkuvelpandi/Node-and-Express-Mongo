const http=require('http')
const dotenv=require('dotenv')
const fs=require('fs')
const url=require('url')
dotenv.config({path:'./config/config.env'})
let port=process.env.PORT
let hostName=process.env.HOST_NAME
let server=http.createServer((request,response)=>{
      let url=request.url;
      response.writeHead(200,{"Content-Type":"text/html"})
      if(url=='/'){
        fs.readFile("./views/index.html",'utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
           })
      }
      if(url=='/contact'){
        fs.readFile('./views/contact.html','utf-8',(err,data)=>{
            if(err) throw err
            response.end(data)
        })
      }
     
})

server.listen(port,hostName,()=>{
    console.log(`server is listening on...http://${hostName}:${port}`);
})