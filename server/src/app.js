const express = require("express")
const authRoutes = require("./routes/auth.routes")
const cors = require('cors')
const cookieParser = require("cookie-parser")

let app = express()

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
}))
app.use(cookieParser())

app.use("/api/user", authRoutes)

app.get("/test", (req, res) => {
    try {
        res.status(200)
            .json({
                message: "I am test message"
            })
    } catch (error) {
        res.status(500)
            .json({ message: "Internal server error" })
    }
})

module.exports = app;