const forgetPasswordService = require("../services/forgetPass.service");
const loginService = require("../services/login.service");
const registerService = require("../services/register.service");
const resetPasswordService = require("../services/resetPasswor.service");

let registerController = async (req, res) => {
    try {
        let { user, token } = await registerService(req.body);

        res.cookie("token", token)

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

let loginController = async (req, res) => {
    try {
        let { user, token } = await loginService(req.body)

        res.cookie("token", token)

        res.status(200).json({
            success: true,
            message: "user logged in successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

let forgetPasswordController = async (req, res) => {
    try {
        let response = await forgetPasswordService(req.body)

        res.status(200).json({
            success: true,
            response,
            message: "Link sent to your e-mail, Check your mailbox to reset password"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

let resetPasswordController = async (req, res) => {
    try {
        let token = req.params.token;
        let password = req.body.password
        let user = await resetPasswordService(token,password)

        res.status(200).json({
            message:"Password changed successfuly",
            success:true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}



module.exports = {
    registerController,
    loginController,
    forgetPasswordController,
    resetPasswordController
}