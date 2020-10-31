const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    cardID:{
        type: Schema.Types.ObjectId
    },
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

module.exports = mongoose.model('favorite', FavoriteSchema);