import express from "express";
import User from "../modal/User.js";
let router = express.Router();

router.get("/all", (request, response) => {
  response.send("<h1>getting all user details</h1>");
});

router.post("/register", async (request, response) => {
  try {
    let newUser = {
      name: request.body.name
    }
    let user=await User.findOne({name:newUser.name})
        if(user){
           return response.status(404).json({
                msg:"Product already exist...!"
            })
        }
    let createuser =await User(newUser);
    let saveUser =await createuser.save();
    response.status(200).json({
      msg: "user successfully created...",
      user: saveUser
    });
  } catch (err) {
   console.log(err);
  }
});

export default router;
