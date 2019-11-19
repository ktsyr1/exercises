const router =require('express').Router(); 
let Centar =require('../module/centar.module');

router.route('/').get((req ,res)=>{
   Centar.find()
      .then(centars => res.json(centars))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req ,res)=>{
   const username = req.body.username;
   const description = req.body.description;
   const duration = Number(req.body.duration);
   const date = Date.parse(req.body.date);

   newCentar = new Centar({
      username,
      description,
      duration,
      date
   }); 

   newCentar.save()
      .then(()=>res.json('Centar added!'))
      .catch(err => res.status(400).json('Error: '+ err))
}) 

router.route('/:id').get((req, res) => {
   Centar.findById(req.params.id)
    .then(centar => res.json(centar))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
   Centar.findByIdAndDelete(req.params.id)
    .then(() => res.json('Centar deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
   Centar.findById(req.params.id)
    .then(centar => {
      centar.username = req.body.username;
      centar.description = req.body.description;
      centar.duration = Number(req.body.duration);
      centar.date = Date.parse(req.body.date);

      centar.save()
        .then(() => res.json('Centar updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;