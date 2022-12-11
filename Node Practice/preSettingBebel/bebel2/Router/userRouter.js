import express from 'express'

const router =express.Router()

router.get('/',(request,response)=>{
   response.send('<h1>Babel is running successfully...</h1>')
})

router.get('/user',(request,response)=>{
   response.send('<h1>Getting single data successfully with ES6...</h1>')
})

router.get('/users',(request,response)=>{
   response.send("Getting all data successfully...")
})

export default router