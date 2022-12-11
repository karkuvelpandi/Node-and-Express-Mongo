const express=require('express')
const router=express.Router()

router.get('/',(request,resposne)=>{
    resposne.send('userRouter file geting successfully')
})

router.post('/login',(request,response)=>{
   response.send('login successfull...')
})

module.exports=router