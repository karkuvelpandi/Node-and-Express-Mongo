import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './Router/userRouter'
const app=express()

dotenv.config({path:"./config/config.env"})
let port=process.env.PORT
let hostName=process.env.HOST_NAME

app.use(morgan('tiny'))
app.use('/api',router)

app.listen(port,hostName,(err)=>{
     if(err) throw err
     console.log(`server is running on http://${hostName}:${port}`);
})