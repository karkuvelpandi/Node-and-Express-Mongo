const express=require('express')
const dotenv =require('dotenv')
const morgan=require('morgan')

dotenv.config({path:"./config/config.env"})
const port=process.env.PORT
const hostName=process.env.HOSt_NAME

const app=express()

app.use(morgan('tiny'))
app.use("/product",require('./Router/productRouter'))

app.listen(port,hostName,(err)=>{
  if(err) throw err
  console.log(`server is running on http://${hostName}:${port}`);
})