const User = require('../../../project-lite/JWTAuth/models/User');

const router = require('express').Router();
const User = require("../models/user");

router.post("/login", (req, res) => {
    const email = await User.findOne({where: {email: req.params.email}})
    if (!email) return res.status(400).send('email already exists');
})

module.exports = router