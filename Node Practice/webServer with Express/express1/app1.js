const express =require("express")

const app=express()

app.get("/",(request,response)=>{
       response.send("hello ....")
})
app.listen(8080,"127.88.98.98",(err)=>{
    if(err) throw err
   console.log('server is running...on http://127.88.98.98:8080');
})