const express = require('express');
const router  = express.Router();
const gasPoint = require('../models/gasPoint')

router.get('/stations/', (req,res)=>{
  console.log("QUERY DESDE MONGO"+req.query)
  let longitude = req.query
  console.log(longitude)

  let query = {geometry:{$geoWithin:{$centerSphere:[[req.query.longitude, req.query.latitude],5 / 6378.1]}}}

  gasPoint.find(query)
  .then(data=>res.status(200).json(data))
  .catch(err=>{
    console.log(err)
  })

  // {geometry: {$geoWithin: { $centerSphere: [ [ -102.6662884103825, 22.763007712120313 ], 0.014108282196571927 ]}}}
})

router.get('/new/',(req,res)=>{
  res.send("hola")
})

module.exports = router;