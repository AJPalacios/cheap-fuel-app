const express = require('express');
const router  = express.Router();
const gasPoint = require('../models/gasPoint')

router.get('/list', (req,res,next)=>{

  let query = {'geometry_2dsphere':{$near:{$geometry:{type:"Point",coordinates:[-99.004700, 19.260320]},$maxDistance:5000,$minDistance:0}}}

  //gasPoint.createIndex({"location":"2dsphere"})

  gasPoint.find(query)
  .then(res=>{
    //res.send(res)
    console.log(res)
  })
  .catch(err=>{
    console.log(err)
  })

})

module.exports = router;