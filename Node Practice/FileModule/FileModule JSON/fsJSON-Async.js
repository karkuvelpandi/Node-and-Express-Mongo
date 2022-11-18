const fs=require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
      if(err) throw err
      
      console.log(JSON.parse(data));
      fs.writeFile('newUsers.json',data,"utf-8",(err)=>{
        if(err) throw err
      })
})
 

