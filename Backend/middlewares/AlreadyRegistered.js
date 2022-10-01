const { SignupModel } = require("../models/User.model")
const AlreadyRegistered = async (req, res, next) => {
    const { email } = req.body
    const exist = await SignupModel.findOne({ email })
    if (exist == null) next()
    else res.send({"msg":"User Already exist"})
 }
module.exports=AlreadyRegistered