const User = require("../../../project-lite/JWTAuth/models/User");

const router = require("express").Router();
const user = require("../models/user");

router.post("/login", async (req, res) => {
  const email = await user.findOne({ where: { email: req.params.email } });
  if (!email) return res.status(400).send("email already exists");
});

module.exports = router;
