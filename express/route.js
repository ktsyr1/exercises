const express =require('express')
const app = express()
const port = 3000 

app.get('/', (req,res)=>{
  res.send(' home')
  console.log('home'); 
})
app.post('/', (req,res)=>{
  res.send(' home post')
  console.log('home post '); 
})
app.get('/go', (req,res)=>{
  res.send(' go post')
  console.log('go post '); 
}) 
 
app.listen(port,()=>console.log(`host run localhost:${port}`))