const { generateToken } = require("../config/token");
const User = require("../models/user.model");

let registerService = async({name,email,password}) => {
    try {

        if(!name || !email || !password)
        {
            throw new Error("All fields are required")
        }

        let existingUser = await User.findOne({email});

        if(existingUser){
            throw new Error("User already exists");
        }

        let user = await User.create({
            name,email,password
        })

        let token = generateToken(user._id)
        
        return {
            user,
            token
        };
    } catch (error) {
        throw error
    }
}

module.exports = registerService;