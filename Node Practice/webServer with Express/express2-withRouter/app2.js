const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')

dotenv.config({path:"./config/config.env"})
let port =process.env.PORT
let hostName=process.env.HOST_NAME
const app=express()

// app.get('/',(req,resp)=>{
//     resp.send("hello server is running")
// })

// app.post("/user",(request,response)=>{
//     response.send('post is working...')
// })

// app.get("/user/all",(request,response)=>{
//      response.send('get all user is working...')
// })

app.use(morgan('tiny'))
app.use('/user',require("./Router/userRouter"))

app.listen(port,(err)=>{
    if(err)throw err
    console.log(`server is running on http://${hostName}:${port}`);
})