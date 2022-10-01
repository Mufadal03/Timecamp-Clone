const { Router } = require("express")
const { TagModel } = require("../models/TagModel")

TagController = Router()

TagController.get("/", async(req, res) => {
    const tags = await TagModel.find()
    res.send(tags)
})

TagController.post("/create", async (req, res) => {
    const new_tag = await TagModel(req.body)
    new_tag.save()
    res.send({"msg":"Tag created"})
})

TagController.patch("/:id", async(req, res) => {
    const { id } = req.params
    const ans = await TagModel.updateOne({ _id: id }, { $set: req.body })
   if(ans.modifiedCount==0)return res.send({"msg":"Something went wrong"})
    else return res.send({msg:"Tag updated"})
})

TagController.delete("/:id", async(req, res) => {
    const { id } = req.params
    await TagModel.findByIdAndDelete({ _id: id })
    res.send({"msg":"Tag deleted"})
})
module.exports={TagController}