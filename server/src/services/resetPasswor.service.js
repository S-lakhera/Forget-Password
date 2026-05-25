const { verifyRawToken } = require("../config/token");
const User = require("../models/user.model");

let resetPasswordService = async(token,password) => {
    try {
        if(!password){
            throw new Error("Password is required!!")
        }

        let decoded = verifyRawToken(token)
        if(!decoded){
            throw new Error("Invalid or Expired token")
        }
        
        let user = await User.findById({_id:decoded.id})
        if(!user){
            throw new Error("User not found")
        }

        user.password = password;

        await user.save();

        return user;
        
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports = resetPasswordService