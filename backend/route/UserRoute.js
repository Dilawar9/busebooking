const express = require("express");
const router = express.Router();
const UserCtrl = require("../controller/UserController");
const multer=require("multer");
const checkauth = require("../midleware/Chechauth");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/signup", UserCtrl.signup);
router.post("/login", UserCtrl.login);
router.put("/update",[checkauth, upload.single('photo')],UserCtrl.updateuser);
router.get("/get",checkauth, UserCtrl.getuser);

module.exports = router;