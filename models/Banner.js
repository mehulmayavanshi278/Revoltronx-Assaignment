const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        enum:[
            "Yoga Equopment",
            "Aero",
            "Block",
            "Candle",
            "Scent",
            "Scrub",
            "Soap",
            "Vinyasa",
        ]
    },
    imgURL:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Banner = mongoose.models.Banner || mongoose.model("Banner" , bannerSchema);
export default Banner;