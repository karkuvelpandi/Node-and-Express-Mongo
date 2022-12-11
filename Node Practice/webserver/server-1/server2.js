const http=require('http')
let server =http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/plain'})
    response.end('vankkam da mapla website la irunthu...')
})

server.listen (8080,()=>{
          console.log('server is running on ...');
})