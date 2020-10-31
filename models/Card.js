const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    logoURL:{
        type:String,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    content:{
        type: String,
        required: true
    },
    connected:{
        type: Boolean,
        default: false
    },
    favorited:{
        type: Boolean,
        default: false
        
    },
    type:{
        type: String,
        default: "openCard"
        //openCard and userCard
    }

});

module.exports = mongoose.model('card', CardSchema);