const router = require("express").Router();
const {
  readAllTransaction,
  readTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction");
const { authenticated } = require("../middleware/auth");

router.get("/transaction", readAllTransaction);
router.get("/transaction/:id", readTransaction);
router.post("/transaction", authenticated, createTransaction);
router.patch("/transaction/:id", authenticated, updateTransaction);
router.delete("/transaction/:id", authenticated, deleteTransaction);

module.exports = router;
