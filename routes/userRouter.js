const router = require("express").Router();
const { authenticated } = require("../middleware/auth");
const { readAllUser, deleteUser } = require("../controllers/user");

router.get("/user", authenticated, readAllUser);

router.delete("/user/:id", authenticated, deleteUser);

module.exports = router;
