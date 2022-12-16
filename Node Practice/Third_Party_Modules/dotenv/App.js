const dotenv=require('dotenv')
// const path=require('path')

// const file=path.join(__dirname,'config','config.env')


 dotenv.config({path:'./config/config.env'})
// dotenv.config({path:file})

console.log(process.env.PORT);  //8080
console.log(process.env.SECRET_KEY);



