const router = require("express").Router();
const {
  readAllTransaction,
  readTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");
const { authenticated } = require("../middleware/auth");

router.get("/transaction", authenticated, readAllTransaction);
router.get("/transaction/:id", authenticated, readTransaction);
router.post("/transaction", authenticated, createTransaction);
router.patch("/transaction/:id", authenticated, updateTransaction);

module.exports = router;
