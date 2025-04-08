const mongoose = require("mongoose");
const schema = mongoose.Schema({
    salt:{
        type:String,
        required:true,
        unique:true
    },
    rjy:{
        type:String,
        required:true,
        unique:true
    }
});
const userSchema = mongoose.model("user",schema);
module.exports = userSchema;