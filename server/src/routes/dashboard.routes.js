const express= require('express');
const protect = require('../middleware/auth.middleware');
const { getUserController } = require('../controllers/dashboard.controller');
const router = express.Router();

router.get("/",protect,getUserController)

module.exports = router;