import mongoose from 'mongoose'

let loginSchema=mongoose.Schema

let schema=new loginSchema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
       
})

let Login=mongoose.model('login1',schema)

export default Login