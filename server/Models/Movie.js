const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required: true ,
    },
    image2:{
        type: String,
        required: true ,
    },
    cast1:{
        type: String,
        required: true ,
    },
    cast2:{
        type: String,
        required: true ,
    },
    cast3:{
        type: String,
        required: true ,
    },
    cast4:{
        type: String,
        required: true ,
    },
    cast5:{
        type: String,
        required: true ,
    },
    cast6:{
        type: String,
        required: true ,
    },
    castName1:{
        type: String,
        required: true ,
    },
    castName2:{
        type: String,
        required: true ,
    },
    castName3:{
        type: String,
        required: true ,
    },
    castName4:{
        type: String,
        required: true ,
    },
    castName5:{
        type: String,
        required: true ,
    },
    castName6:{
        type: String,
        required: true ,
    },
    about:{
        type: String,
        required: true ,
    },
    trailer:{
        type: String,
        required: true ,
    }
})
module.exports = mongoose.model("Movie", movieSchema);