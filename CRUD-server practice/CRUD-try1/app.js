import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import productRouter from './router/productRouter.js'
import mongoose from 'mongoose'
const app = express()
dotenv.config({ path: './config/config.env' })

//connecting mongoDB
let mongo_url = process.env.MongoDB_URL
mongoose.connect(mongo_url).then((response) => {
    console.log('mongoDB connected successfully...!');
})
.catch((err)=>{
    console.log(err);
    process.exit(1)  //exit from nodejs
})
const port = process.env.PORT
const hostName = process.env.HOST_NAME
//to enable client access point
app.use(cors())
//http logger
app.use(morgan('tiny'))
//readeing form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/',(request,response)=>{
     response.send('get request from app.js')
})

app.use('/product', productRouter)

app.listen(port, hostName, (err) => {
    if (err) throw err
    console.log(`Server is running successfully on http://${hostName}:${port}`);
})