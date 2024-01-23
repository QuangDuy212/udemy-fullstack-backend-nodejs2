const express = require("express");
const {getHomepage,getABC,getHoiDanIT} = require('../controllers/homeController.js')
const router = express.Router();

router.get("/", getHomepage);

router.get("/abc",getABC);

router.get("/hoidanit",getHoiDanIT);

module.exports = router; //export default
