const router = require("express").Router();
const {
  readAllCountry,
  readCountry,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/country");
const { authenticated } = require("../middleware/auth");

router.get("/country", readAllCountry);
router.get("/country/:id", readCountry);
router.post("/country", authenticated, createCountry);
router.patch("/country/:id", authenticated, updateCountry);
router.delete("/country/:id", authenticated, deleteCountry);

module.exports = router;
