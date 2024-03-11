const express = require("express");
const router = express.Router();
const availbuseCtrl = require("../controller/AvailbusController");


router.post("/create",availbuseCtrl.createavailbuse);
router.get("/getall",availbuseCtrl.getavailbuse);


module.exports = router;