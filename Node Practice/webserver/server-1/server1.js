const http =require('http')
let server=http.createServer()
server.listen(8080,(err)=>{
          if(err) throw err
          console.log('server created and running successfully...');
})