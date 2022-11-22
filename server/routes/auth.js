const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

//REGISTER USER
router.post("/adminRegister", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPass,
    });
    const admin = await newAdmin.save();
    return res.status(200).json(admin);
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
});

//LOGIN USER
router.post("/adminLogin", async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(400).json("Wrong credential");
    }
    const validated = await bcrypt.compare(req.body.password, admin.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
    const { password, ...others } = admin._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
