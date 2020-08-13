const router = require("express").Router();
const { register } = require("../controllers/register");

router.post("/register", register);

module.exports = router;
