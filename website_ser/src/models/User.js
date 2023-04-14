const mongoose = require("mongoose");
const User = mongoose.Schema({
    SocialLink:String,
    tags: String
});

module.exports=mongoose.model("user", User)