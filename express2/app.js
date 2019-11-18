const express =require('express');
const app = express();
const router =require('./api/router'); 
app.use(router)
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`run server ...${port}`))