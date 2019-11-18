const express =require('express');
const router = express.Router(); 
router.get('/', (req ,res)=>{
    res.send('   express demo home')
})
router.get('/app', (req ,res)=>{ 
   res.send(' app express demo  ')
})
router.get('/app/:id', (req ,res)=>{ 
   res.send(' app express demo yhtf ')
})
 
module.exports = router;