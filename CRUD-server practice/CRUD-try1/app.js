import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from './config/config.env'
const app=express()

const



app.listen(port,hostName,(err)=>{
            if(err)throw err
            console.log(`Server is running successfully on http://${hostName}:${port}`);
})