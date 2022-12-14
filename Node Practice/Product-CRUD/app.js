import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import productRouter from './router/productRouter.js'
let app=express()

dotenv.config({path:"./config/config.env"})
let port=process.env.PORT
let hostName=process.env.HOST_NAME

// connecting to mongoDB using mongoose
let mongo_url=process.env.MONGO_DB_URL
mongoose.connect(mongo_url)
        .then((response)=>{
            console.log('mongoDB connected sucessfully....');
        })
        .catch((err)=>{ 
            console.log(err);
            process.exit(1)  //to exit from the nodejs
        })

//HTTP logger
app.use(morgan('tiny'))
//to enable the client access point we giv the cross origin resource sharing nothing but CORS
app.use(cors()) 

//how to read form data we have to use express.json()
app.use(express.json())
app.use(express.urlencoded({extended:false})) 

//create route request
//normally
app.get('/',(request,response)=>{
    response.send('simple get request')
})
//by use of outside file//configrue user/product route
app.use('/product',productRouter)

app.listen(port,hostName,(err)=>{
  if(err) throw err
  console.log(`server is running on http://${hostName}:${port}`);
})