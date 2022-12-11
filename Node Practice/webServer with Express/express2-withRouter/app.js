const express =require('express')
const morgan=require('morgan')
const dotenv=require('dotenv')

const app=express()

dotenv.config({path:"./config/config.env"})
let port=process.env.PORT
let hostName=process.env.HOST_NAME

app.use(morgan('tiny'))
app.use('/api',require('./Router/customerRouter'))

app.listen(port,hostName,(err)=>{
 if(err)throw err
  console.log(`server is running on http://${hostName}:${port}`);
})