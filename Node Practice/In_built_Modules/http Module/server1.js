const http=require('http')
let server=http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':"text/plain"})
    response.end("hello buddy on website")
})
server.listen(8000,()=>{
    console.log('server is running...');
})