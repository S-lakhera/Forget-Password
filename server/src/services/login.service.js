const User = require("../models/user.model")
const bcrypt = require('bcrypt')

let loginService = async ({email,password}) => {
    try {

        if(!email)
        {
            throw new Error("Email is required")
        }
        if(!password)
        {
            throw new Error("password is required")
        }

        let existingUser = await User.findOne({email});
        if(!existingUser){
            throw new Error ("Email not registered")
        }

        let isMatch = await bcrypt.compare(password,existingUser.password)

        if(!isMatch)
        {
            throw new Error("Wrong Password")
        }

        return existingUser;

    } catch (error) {
        throw error
    }
}

module.exports = loginService