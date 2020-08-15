const router = require("express").Router();
const { readAllUser, deleteUser } = require("../controllers/user");

router.get("/user", readAllUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
