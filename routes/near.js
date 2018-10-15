const express = require('express');
const router  = express.Router();
const gasPoint = require('../models/gasPoint')

router.get('/list', (req,res,next)=>{
  // {geometry: {$geoWithin: { $centerSphere: [ [ -102.6662884103825, 22.763007712120313 ], 0.014108282196571927 ]}}}
  let query = {geometry:{$geoWithin:{$centerSphere:[[-99.004700, 19.260320],5000]}}}

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