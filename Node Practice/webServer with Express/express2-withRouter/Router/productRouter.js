const express=require('express')
const router=express.Router()

router.get('/',(request,response)=>{
      response.send('Getting method is working...')
})

router.post('/product',(request,response)=>{
     response.send('posting product is working...')
})

module.exports=router