const http=require('http')
const dotenv=require('dotenv')
dotenv.config({path:'./envVariable/config.env'})

let port=process.env.PORT 
let host=process.env.HOST_NAME

console.log(port,host);

let server=http.createServer((request,response)=>{
       response.writeHead(200,{'content-type':"type/html"})
       response.end(<h1>vanakkam da maple server la irunthu</h1>)
})
server.listen(port,host,()=>{
    console.log(``);
})