import express from 'express'
import chalk from 'chalk'

const app=express()
console.log(chalk.blue('Hello world!')); 

app.get("/",(req,resp)=>{
   resp.send("hello buddy")
})

app.listen(8000,()=>{
      console.log(`server is running`);
})