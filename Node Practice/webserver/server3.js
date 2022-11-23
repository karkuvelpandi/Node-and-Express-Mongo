const http=require('http')
const dotenv=require('dotenv')

dotenv.config({path:'./envVariables/config.env'})
let port=process.env.PORT
let hostName=process.env.HOST_NAME

console.log(port)
let server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"})
    response.end('<h1>vanakkam da maple server la irunthu</h1>')

})
server.listen(port,()=>{
console.log(`server is running on http://${hostName}:${port}`);
})