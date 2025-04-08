const mongoose = require("mongoose");
const schema = mongoose.Schema({

    pasta:{
        type:String,
        required:[true],
        unique:[true]

    },
    twohundread:{
        type:String,
        required:[true],
        unique:[true]
    }

});
const userSchema = mongoose.model("user",schema);
module.exports = userSchema;
