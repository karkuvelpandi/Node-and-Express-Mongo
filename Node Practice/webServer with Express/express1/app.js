const express =require("express")//nodejs web framework which is easiest way to create server
const app=express()   //its a concise code of http module

// const http=require("http")   
// let server=http.createServer()

/*
API URL:localhost:8080
Method: GET
Req fields: none
Access type: Public
*/
app.get("/",(request,response)=>{
       response.send("hello ....")
})
/*
API URL:localhost:8080/about
Method: GET
Req fields: none
Access type: Public
*/
app.get('/about',(request,response)=>{
       response.send('<h1>Hello buddy</h1>')
})

/*  Api url: 127.88.98.98/login
Method: POST
Req Fields: none
Access Type: Public
*/
app.post('/login',(request,response)=>{
    response.send("<h3>post method testing</h3>")
})


app.listen(8080,"127.88.98.98",(err)=>{
    if(err) throw err
   console.log('server is running...on http://127.88.98.98:8080');
})