const bcrypt=require('bcrypt')

let user={
    email:"karkuvelpandi007@gmail.com",
    password:"abc123",
    cc:"457898653212"
}
let salt=bcrypt.genSaltSync(10)
let new_password=bcrypt.hashSync(user.password,salt)
console.log(user.password);
console.log(new_password);