const fs=require("fs")
const path=require("path")

fs.readFile(path.join(__dirname,'files','JSON','emp.json'),"utf-8",(err,data)=>{
               if (err) throw err
            // console.log(data);               //not a correct way to read JSON files
               console.log(JSON.parse(data));
}) 

