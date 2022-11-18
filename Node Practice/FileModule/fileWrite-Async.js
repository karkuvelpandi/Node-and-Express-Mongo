const fs=require('fs')

let newData= "hi we are writting the file now"  

fs.writeFile('xyz.txt',newData, 'utf8',(err)=>{
            if(err) throw err
           // console.log(data);// for writting no need data we can't
})