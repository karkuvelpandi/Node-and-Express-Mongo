import express from 'express'
import http from 'http'
import fs from 'fs'
import cors from 'cors'
import dotenv from 'dotenv'
import chalk from 'chalk'
import morgan from 'morgan'
import userRouter from './router/userRouter.js'
import mongoose from 'mongoose'

// ************** config settings ********************************
dotenv.config({path:"./config/config.env"})
let port=process.env.PORT
let hostName=process.env.HOST_NAME
let mongoUrl=process.env.MongoDB_URL

// *******************Without the express****************************************************
// const server=http.createServer((request,response)=>{
//   let url=request.url
//   response.writeHead(200,{"content-type":'text/html'})
//   if(url==="/"){
//     fs.readFile("./view/index.html",'utf-8',(err,data)=>{
//        if(err)throw err
//        response.end(data)
//     })
//   }
// })

// server.listen(port,()=>{
//      console.log(chalk.red(`server is listening to http://${hostName}:${port}`));
// })
const app = express()

app.use(cors()) ;   //to implement the cross origin resourse sharing to enable client access point
app.use(morgan('tiny'))  //http logger
app.use(express.json()) //to read form data
app.use(express.urlencoded({extended:false}))
// ***********************MongoDB*******************************
mongoose.set('strictQuery', false);
console.log(mongoUrl);
mongoose.connect(mongoUrl)
.then((response)=>{
    console.log('mongoDB connected successfully..');
})
.catch((err)=>{
     console.log(err);
     process.exit(1)
    
})

app.get('/',(request,response)=>{
   response.send('<h1>server is running successfully</h1>')
})
app.use('/user',userRouter)
app.listen(port,hostName,(err)=>{
    if(err)throw err
   console.log(chalk.red(`server is listening to http://${hostName}:${port}`));
})