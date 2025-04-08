const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userSchema = require("./schema");

app.use(express.json());





app.get('/user',async(req,res)=>{
    res.status(200).send({msg:"connected".userSchema});
})


app.listen(8080,async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO);
        res.status(200).send({msg:"connected succesfully"});
     }catch(error){
       res.status(500).send({msg:"something went wrong",error});
        console.log(error);
       }

});

    
