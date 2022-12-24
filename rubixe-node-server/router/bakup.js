import express from 'express'
import User from '../model/User.js'
import Login from '../model/Login.js'
import authenticate from"../middleware/authenticate";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { check, validationResult } from"express-validator";
import dotenv from 'dotenv'
dotEnv.config({ path: "./config/config.env" });
const router = express.Router()
//get all users
/*
URL            : http://127.12.22.32:8000/user/
method         : GET
required field : N/A
*/
router.get('/', async (req, resp) => {
   let user = await User.find()
   resp.status(200).json(user)
})

//Register user  / creating user data
/*
URL            : http://127.12.22.32:8000/user/register
method         : POST
required field : name,mobile,email,password,state,city,description,image
*/
router.post('/register', async (req, resp) => {
   try {
      let new_user = {
         name: req.body.name,
         mobile: req.body.mobile,
         email: req.body.email,
         password: req.body.password,
         state: req.body.state,
         city: req.body.city,
         description: req.body.description,
         image: req.body.image
      }
      let user = await User.findOne({ email: new_user.email })
      if (user) {
         resp.status(200).json({
            msg: 'User already exist...'
         })
      }
      let createUser = await User(new_user)
      let saveUser = await createUser.save()
      resp.status(200).json({
         result: "User Register Successfully...",
         user: saveUser
      })

   }
   catch (err) { }

})
// Updating user data
/*
URL            : http://127.12.22.32:8000/user/:id
method         : POST
required field : name,mobile,email,password,state,city,description,image
*/
router.put("/:id", async (req, resp) => {
   let user_Id = req.params.id
   try {
      let updateUser = {
         name: req.body.name,
         mobile: req.body.mobile,
         email: req.body.email,
         password: req.body.password,
         state: req.body.state,
         city: req.body.city,
         description: req.body.description,
         image: req.body.image
      }
      let user = await User.findById(user_Id)
      if (!user) {
         return resp.status(404).json({ msg: "User not found...!" })
      }
      user = await User.findByIdAndUpdate(user_Id, { $set: updateUser }, { new: true })
      resp.status(200).json({
         result: 'Product updated successfully...!',
         user: user
      })
   }
   catch (err) { }
})

// Deleting user data
/*
URL            : http://127.12.22.32:8000/user/:id
method         : DELETED
required field : N/A
*/
router.delete('/:id', async (req, resp) => {
   let user_Id = req.params.id
   try {
      let user = await User.findById(user_Id)
      if (!user) {
         return resp.status(404).json({ msg: "Product not found...!" })
      }
      user = await User.findByIdAndDelete(user_Id)
      resp.status(200).json({ msg: 'Product deleted successfully...!' })
   }
   catch (err) { }
})

//Get single user
/*
URL            : http://127.12.22.32:8000/user/:id
method         : GET
required field : N/A
*/
router.get('/:id', async (req, resp) => {
   let user_Id = req.params.id
   try {
      let user = await User.findById(user_Id)
      if (!user) {
         return resp.status(404).json({
            msg: "Product not found...!"
         })
      }
      resp.status(200).json(user)
   }
   catch (err) { }
})

//get and compare the user login with JWT
router.post('/login', async (req, resp) => {
   try {
      let loginData = {
         email: req.body.email,
         password: req.body.password
      }
      let existUser = await User.findOne({ email: loginData.email })
      if (!existUser) {
         resp.status(200).json({
            msg: "User with this email is not available"
         })
      }
      else {
         let createUserlogin = await Login(loginData)
         await localStorage.setItem('userLogin',createUserlogin)
         // let saveUserlogin = await createUserlogin.save()
         resp.status(200).json({
            result: "User logged-in Successfully..."
            // userLogin: saveUserlogin
         })
      }
   
      




   }
   catch (err) { }
})

export default router