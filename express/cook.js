const express = require('express')
const app = express()
const cookP = require('cookie-parser')
app.use(cookP())
app.get('/',(req,res)=>{
    res.status(200).send(`<a herf='/get'>get</a>`)
})
app.get('/set',(req,res)=>{
    res.cookie('name','ktsyr1')
    res.cookie('data','2019')
    res.cookie('cookie','app')
    res.status(200).send('set cookie')
    console.log('fghjkl');
    
})
app.get('/get',(req,res)=>{
    res.status(200).send(req.cookies)
})
app.listen(3000)
