const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const theatreSchema = new Schema({
    theaterId:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    slot1:{
        required:true,
        type: String,
    },
    slot2:{
        required:true,
        type: String,
    },
    slot3:{
        required:true,
        type: String,
    },
    slot4:{
        required:true,
        type: String,
    },

})
module.exports = mongoose.model("Theatre", theatreSchema);