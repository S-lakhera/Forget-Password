const express= require('express');
const { registerController, loginController, forgetPasswordController, resetPasswordController, logoutController } = require('../controllers/auth.controller');
const protect = require('../middleware/auth.middleware');
const router = express.Router();

router.post("/register", registerController)
router.post("/login",loginController) 
router.get("/logout",protect, logoutController) 
router.post("/forget-password", forgetPasswordController) 
router.post("/reset-password/:token", resetPasswordController) 

module.exports = router;