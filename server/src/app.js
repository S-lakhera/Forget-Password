const express = require("express")

let app = express()

app.use(express.json())

app.get("/test", (req, res) => {
    try {
        res.status(200)
            .json({
                message: "I am test message"
            })
    } catch (error) {
        res.status(500)
            .json({message:"Internal server error"})
    }
})

module.exports = app;