const { ProjectModel } = require("../models/Project.model")

const Authorization = async(req, res, next) => {
    const { id } = req.params
    const { userId } = req.body
    const exist = await ProjectModel.findOne({ _id: id })
    if (exist.userId == userId) next()
    else return res.send({"msg":"You dont have the access for this operation"})
}

module.exports={Authorization}