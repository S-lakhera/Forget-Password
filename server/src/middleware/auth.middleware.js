const cacheInstance = require("../config/caching");
const { verifyToken } = require("../config/token");
const User = require("../models/user.model");

const protect = async (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: "Not authorized, Access token missing" 
        });
    }

    try {

        let isBlackListed = await cacheInstance.get(token)
        if(isBlackListed){
            return res.status(401).json({
                message:"This token is black-listed, Login again, HTMKC"
            })
        }

        let decoded = verifyToken(token);
        
        if (!decoded) {
            return res.status(401).json({ 
                success: false, 
                message: "Invalid token or expired token." 
            });
        }

        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found with this token." 
            });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({ 
            success: false, 
            message: "Not authorized, token failed.",
            error: error.message 
        });
    }
}

module.exports = protect;