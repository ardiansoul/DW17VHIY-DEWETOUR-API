const router = require("express").Router();
const { findAll } = require("../controllers/user");

router.get("/user", findAll);

module.exports = router;
