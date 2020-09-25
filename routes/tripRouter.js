const router = require("express").Router();
const {
  readAllTrip,
  readTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/trip");
const { authenticated } = require("../middleware/auth");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageFilter = (req, file, cb) => {
  // console.log(file);
  if (!file.originalname.match(/.(jpg|JPG|jpeg|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = {
      message: "Only image files are allowed!",
    };

    return cb(new Error("Only image file are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 2 * 1000 * 1000,
  },
});

router.get("/trip", readAllTrip);
router.get("/trip/:id", readTrip);
router.post("/trip", upload.array("image", 4), authenticated, createTrip);
router.patch("/trip/:id", authenticated, updateTrip);
router.delete("/trip/:id", authenticated, deleteTrip);

module.exports = router;
