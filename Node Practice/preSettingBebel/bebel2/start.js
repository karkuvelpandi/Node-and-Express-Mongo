require('@babel/register')
const app=require('./app')
const router=require('./Router/userRouter')
const config=require('./config/config.env')
module.exports=app
module.exports=router
module.exports=config