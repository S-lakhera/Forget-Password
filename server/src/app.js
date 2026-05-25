const express = require("express")
const authRoutes = require("./routes/auth.routes")
const dashboardRoutes = require("./routes/dashboard.routes")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const cacheInstance = require("./config/caching")

let app = express()

cacheInstance.on('connect', () => {
    console.log("redis connected");
})

cacheInstance.on('error',(err) => {
    console.log("redis error",err);
    
})

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
}))
app.use(cookieParser())

app.use("/api/user", authRoutes)
app.use("/api/dashboard", dashboardRoutes)

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