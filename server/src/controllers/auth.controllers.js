const loginService = require("../services/login.service");
const registerService = require("../services/register.service")

let registerController = async (req, res) => {
    try {
        let user = await registerService(req.body);
        res.status(201).json({
            success: true,
            message: "user registered successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

let loginController = async (req,res) => {
    try{
        let user = await loginService(req.body)
        res.status(201).json({
            success: true,
            message: "user logged in successfully",
            user
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
    registerController,
    loginController
}