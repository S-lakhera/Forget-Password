require("dotenv").config()
const jwt = require("jsonwebtoken")


let generateRawToken = (userId) => {
    try {
        let token = jwt.sign({id:userId}, process.env.RAW_SECRET, { expiresIn: "15m" })
        return token
    } catch (error) {
        throw new Error(error.message)
    }
}
let generateToken = (userId) => {
    try {
        let token = jwt.sign({id:userId}, process.env.RAW_SECRET, 
        { expiresIn: "1h" })
        return token
    } catch (error) {
        throw new Error(error.message)
    }
}

let verifyRawToken = (token) => {
    try {
        let userId = jwt.verify(token,process.env.RAW_SECRET)
        return userId;
    } catch (error) {
        
        throw new Error(error.message)
    }
}

module.exports = {
    generateRawToken,
    generateToken,
    verifyRawToken
}