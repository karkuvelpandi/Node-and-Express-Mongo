const fs=require('fs')

let newData= "hi we are writting the file now"  

fs.writeFileSync('xyz.txt',newData, 'utf8')