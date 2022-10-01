const mongoose = require("mongoose")
const TagSchema = mongoose.Schema({
    tagTitle: { type: String, required: true },
    userId:{type:String,required :true}
})

const TagModel = mongoose.model("tag", TagSchema)

module.exports={TagModel}