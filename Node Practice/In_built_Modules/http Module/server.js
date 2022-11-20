const http=require('http')

let server =http.createServer()
server.listen(8000,(err)=>{
  if (err)throw err
   console.log('server is running...');
})