const express =require("express")

const app=express()
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

app.listen(8080,"127.88.98.98",(err)=>{
    if(err) throw err
   console.log('server is running...on http://127.88.98.98:8080');
})