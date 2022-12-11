const express=require('express')
const router=express.Router()

router.get('/',(request,response)=>{
       response.send('<h1>Router is working good...</h1>')
})

router.get('/customers',(request,response)=>{
     response.send('<h1>Getting all customer details...</h1>')
})

router.post("/customer",(request,response)=>{
     response.send('<h1>Posting customer details successfully...</h1>')
})

router.get('/customer',(request,response)=>{
    response.send('<h1>Getting single data successfully...</h1>')
})

module.exports=router