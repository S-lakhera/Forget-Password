const { generateRawToken } = require("../config/token");
const sendEmail = require("../config/mail");
const User = require("../models/user.model");
const mailTemp = require("../utils/emailTemplate");

let forgetPasswordService = async ({ email }) => {
    try {
        let user = await User.findOne({ email });

        if (!user) {
            throw new Error("Email not exist.. Try register with us.")
        }

        let rawToken = generateRawToken(user._id);

        let resetLink = `http://localhost:5173/auth/reset-password/${rawToken}`

        let mail = mailTemp(user.name, resetLink)

        let response = await sendEmail(user.email, "RESET PASSWORD", mail)

        return response;

    } catch (error) {
        console.log(error);
        
        throw error
    }
}

module.exports = forgetPasswordService;