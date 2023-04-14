const mongoose = require("mongoose");
const Work = mongoose.Schema({
    ImgLink:String
});

module.exports=mongoose.model("work", Work)