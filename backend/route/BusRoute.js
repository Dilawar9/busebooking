const express = require("express");
const router = express.Router();
const BuseCtrl = require("../controller/BusController");


router.post("/create",BuseCtrl.createbuse);
router.get("/getall",BuseCtrl.getbuse);


module.exports = router;