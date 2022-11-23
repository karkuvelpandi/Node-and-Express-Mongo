const express=require('express')
const app=express()

app.get('/',(request,response)=>{
    // response.send('hello good evening...')
      response.send('for display single user')
})
app.get('/add',(request,response)=>{
       response.send('<h1>hello maple</h1>')   //post method out not comming
     
})

app.listen(8000,(err)=>{
if (err) throw err
console.log(`server is running... http://localhost:${8000}`);
})