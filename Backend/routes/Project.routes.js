const { Router } = require("express");
const { ProjectModel } = require("../models/Project.model");
ProjectController = Router();

ProjectController.get("/", async (req, res) => {
  const { userId } = req.body;
  const projects = await ProjectModel.find({ userId });
  res.send(projects);
});

ProjectController.post("/create", async (req, res) => {
  const newProject = ProjectModel(req.body);
  await newProject.save();
  res.send({ msg: "Project created" });
});

ProjectController.delete("/:id/delete", async (req, res) => {
  const { id } = req.params;
  await ProjectModel.findByIdAndDelete({ _id: id });
  res.send({ msg: "Project deleted" });
});

ProjectController.delete("/:id", async (req, res) => {
    const { id } = req.params
    await ProjectModel.findByIdAndDelete({_id:id})
    res.send({"msg":"Project deleted"})
})

ProjectController.patch("/:id",async (req, res) => {
    const { id } = req.params
    const { User_id } = req.body
    const ans = await ProjectModel.updateOne({ _id: id, User_id }, { $set: req.body })
    if(ans.modifiedCount==0)return res.send({"msg":"Something went wrong"})
    else return res.send({msg:"Project updated"})
})


ProjectController.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { User_id } = req.body;
  const ans = await ProjectModel.updateOne(
    { _id: id, User_id },
    { $set: req.body }
  );
  if (ans.modifiedCount == 0) return res.send({ msg: "Something went wrong" });
  else return res.send({ msg: "Project updated" });
});

module.exports = { ProjectController };
