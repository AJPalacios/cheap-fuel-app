const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gasPointSchema = new Schema({

  type: {type: String},
    'geometry' : {
        'coordinates' : {
            'type':[Number],
            'required' : true
        }
    },
    'properties' : {
        'name' : String,
        'brand' : String,
        'category' : String,
        'address_street': String,
        'gas_price_regular': Number,
        'gas_regular': String,
        'gas_price_premium': Number,
        'gas_premium': String,
        'place_id': Number

    }

})
gasPointSchema.index({geometry: '2dsphere'})

module.exports = mongoose.model('gasPoint', gasPointSchema)