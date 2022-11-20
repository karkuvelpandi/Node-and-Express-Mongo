const jwt=require("jsonwebtoken")

let user={
    id:'101',
    name:'pandi',
    password:'123456',
    email:'abc@gmail.com'
}
let payload={
    id:user.id,
    email:user.email
}
let skey='jho007'
let token=jwt.sign(payload,skey)
console.log(token);
let user_id=jwt.verify(token,skey)
console.log(user_id);