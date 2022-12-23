import express from 'express'
import User from '../model/User.js'

const router=express.Router()
//get all users
router.get('/',(req,resp)=>{

})

//Register user  / creating user data
/*
URL            : http://127.12.22.32:8000/user/register
method         : POST
required field : name,mobile,email,password,state,city,description,image
*/
router.post('/register',async(req,resp)=>{
    try{
        let new_user={
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            password:req.body.password,
            state:req.body.state,
            city:req.body.city,
            description:req.body.description,
            image:req.body.image
        }
        let user=await User.findOne({email:new_user})
        let createUser=await User(new_user)

      }
      catch(err){}
   
})
      

export default router