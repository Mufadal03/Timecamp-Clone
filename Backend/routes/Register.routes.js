const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { SignupModel } = require("../models/User.model")
const AlreadyRegistered = require("../middlewares/AlreadyRegistered")
const { EmailValidator } = require("../middlewares/EmailValidator")
const { PasswordValidator } = require("../middlewares/PasswordValidator")
RegisterController = Router()

RegisterController.post("/signup",AlreadyRegistered,EmailValidator,PasswordValidator, (req, res) => {
    const { email, password } = req.body
    bcrypt.hash(password, 6).then(async(hash) => {
        const newUser = SignupModel({ email, password: hash })
        await newUser.save()
       res.send({"msg":"Signup Successfull"})
    }).catch(() => {
        res.send({"msg":"Something went wrong please try again later"})
    })
})


RegisterController.post("/login",EmailValidator, async(req, res) => {
    const { email, password } = req.body
    const user = await SignupModel.findOne({ email })
    if(user==null)res.send({"msg":"Please Login"})
    else {
        const hashedPassword = user.password
        bcrypt.compare(password, hashedPassword, (err, result) => {
        if(result) {
            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY)
            res.send({"msg":"Login Successfull",token})
            }
            else{res.send({"msg":"Please Login"})}

    })
    }
    
})


module.exports={RegisterController}