const EmailValidator = (req, res, next) => {
    const { email } = req.body
    const starting = email.length-10
    let ans=""
    for (let i = starting; i < email.length; i++){
        ans+=email[i]
    }
    if (ans === "@gmail.com" || ans === "@hotmail.com") next()
    else res.send({"msg":"Enter valid email"})
}

module.exports={EmailValidator}