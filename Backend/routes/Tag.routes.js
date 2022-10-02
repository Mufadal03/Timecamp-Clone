const { Router } = require("express")
const { TagModel } = require("../models/TagModel")

TagController = Router()

TagController.get("/", async (req, res) => {
    console.log(req.body)
    const tags = await TagModel.find({userId:req.body.userId})
    res.send(tags)
})

TagController.post("/create", async (req, res) => {
    const new_tag = await TagModel(req.body)
    // console.log(new_tag)
    new_tag.save()
    res.send({"msg":"Tag created"})
})

TagController.patch("/:id", async(req, res) => {
    const { id } = req.params
    const { userId } = req.body 
    console.log(userId)
    const ans = await TagModel.updateOne({ _id: id ,userId}, { $set: req.body })
   if(ans.modifiedCount==0)return res.send({"msg":"Something went wrong"})
    else return res.send({msg:"Tag updated"})
})

TagController.delete("/:id", async(req, res) => {
    const { id } = req.params
    await TagModel.findByIdAndDelete({ _id: id ,userId:req.body.userId})
    res.send({msg:"Tag Deleted"})
})
module.exports={TagController}