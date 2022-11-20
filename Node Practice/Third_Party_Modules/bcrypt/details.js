const bcrypt = require("bcrypt")

let userDetail = {
    username: "pandi",
    password: "pandi@123",
    cc: "23012301230"
}
let salt = bcrypt.genSaltSync(10)
let new_password = bcrypt.hashSync(userDetail.password, salt)

console.log(userDetail.password);
console.log(new_password);

let flag = bcrypt.compareSync("pandi@123", new_password)

console.log(flag);

if (flag) {
    console.log('Login successful');
}
else {
    console.log('Password incorrect try again');
}


