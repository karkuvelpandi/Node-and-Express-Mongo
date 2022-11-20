const fs=require("fs")

fs.readFile('abc.txt','utf8',(err,data)=>{
         if(err) throw err
         console.log(data);
})