const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
    title: { type: String, required: true },
    userId: { type: String, required: true },
    email: String,
    startTime: String,
    endTime: String,
    tags:{type:String,default:"none"}
})

const ProjectModel = mongoose.model("project", ProjectSchema)

module.exports={ProjectModel}