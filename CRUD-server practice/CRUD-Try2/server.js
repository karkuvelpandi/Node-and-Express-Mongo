import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import chalk from 'chalk'
import router from './router/productRouter.js'
dotenv.config({path:'./config/config.env'})
const port =process.env.PORT
const hostName=process.env.HOST_NAME

const app=express()


//connecting mongoDB
mongoose.set('strictQuery', false)
const mongo_url=process.env.MONGO_URL
mongoose.connect(mongo_url)
.then((response)=>{
   console.log('mongoDB connected successfully...');
})
.catch((err)=>{
   console.log(err);
   process.exit(1)
})

//reading form data
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//to enable client access point
app.use(cors())
//http logger
app.use(morgan('tiny'))

app.get('/',(req,resp)=>{
    resp.send('<h1>Server is running successfully...!</h1>')
})
app.use('/product',router)

app.listen(port,hostName,(err)=>{
if(err) throw err
console.log(chalk.green(`server is running successfully on http://${hostName}:${port}`));
})