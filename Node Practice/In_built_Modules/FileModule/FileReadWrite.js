const fs=require("fs")

fs.readFile('abc.txt','utf-8',(err,data)=>{
           if(err) throw err
           console.log("one");
           console.log(data);
        fs.writeFile("xyz.txt",data,"utf-8",()=>{
           if (err) throw err
           console.log("two");
           })
})
console.log('three');