const express =require('express')
const app = express()
const port = 3000
const bodyP =require('body-parser')
const urlB = bodyP.urlencoded({extended:false})
app.use(express.static('public'))
app.get('/index.html', (req,res)=>{
  res.sendfile(__dirname+'/'+'index.html')
})
app.post('/post_up',urlB, (req,res)=>{
    response={
      firstname : req.body.firstname,
      posts : req.body.posts,
      email : req.body.email,
      gender : req.body.gender,
      message :  req.body.message
}
res.end(JSON.stringify(response))
})
app.listen(port,()=>console.log(`host run localhost:${port}`))