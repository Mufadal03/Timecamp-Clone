const express = require("express")
const { connection } = require("./config/db")
const { Authentication } = require("./middlewares/Authentication")
// const { Authorization } = require("./middlewares/Authorization")
const { ProjectController } = require("./routes/Project.routes")
const { RegisterController } = require("./routes/Register.routes")
const { TagController } = require("./routes/Tag.routes")
const cors = require("cors")
const app = express()

require("dotenv").config()

app.use(cors())

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000 
app.get("/", (req, res) => {
    res.send("Welcome")
})
    
app.use("/user",RegisterController)

app.use("/projects",Authentication,ProjectController)

app.use("/tags",Authentication,TagController)



app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch(e) {
        console.log(e)
    }
}) 