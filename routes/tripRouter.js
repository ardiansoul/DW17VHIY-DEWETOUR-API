const router = require("express").Router();
const {
  readAllTrip,
  readTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/trip");
const { authenticated } = require("../middleware/auth");

router.get("/trip", readAllTrip);
router.get("/trip/:id", readTrip);
router.post("/trip", authenticated, createTrip);
router.patch("/trip/:id", authenticated, updateTrip);
router.delete("/trip/:id", authenticated, deleteTrip);

module.exports = router;
