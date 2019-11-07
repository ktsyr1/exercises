const express =require('express')
const app = express(),
port = 3000
app.use(express.static('public'))
app.get('/index.html', (req,res)=>{
  res.sendfile(__dirname+'/'+'index.html')
})
app.get('/get_up', (req,res)=>{
    res.send=(
      '<h1>firstname :'+ req.query['firstname']+' </h1>'+
      '<h1>posts :'+ req.query['posts']+' </h1>');
    
})
app.listen(port,()=>console.log(`host run localhost:${port}`))