const express= require('express');
const { registerController, loginController, forgetPasswordController, resetPasswordController } = require('../controllers/auth.controllers');
const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginController) 
router.post("/forget-password", forgetPasswordController) 
router.post("/reset-password/:token", resetPasswordController) 

module.exports = router;