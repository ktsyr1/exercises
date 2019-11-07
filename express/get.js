const express =require('express')
const app = express(),
port = 3000
app.use(express.static('public'))
app.get('/index.html', (req,res)=>{
  res.sendfile(__dirname+'/'+'index.html')
})
app.get('/get_up', (req,res)=>{
    response={
        firstname : req.query.firstname,
        posts : req.query.posts
    }
    console.log(response);
    res.end(JSON.stringify(response))
    
})
app.listen(port,()=>console.log(`host run localhost:${port}`))