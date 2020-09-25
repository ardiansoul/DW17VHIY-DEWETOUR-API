const router = require("express").Router();
const { authenticated } = require("../middleware/auth");
const {
  readAllUser,
  deleteUser,
  readUser,
  readAllPayment,
  readPaymentById,
  updateUser,
} = require("../controllers/user");
// const { upload } = require("../middleware/fileUpload");
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
  console.log(file);
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

router.get("/user", authenticated, readAllUser);
router.get("/user/:userId/payment", authenticated, readAllPayment);
router.get("/user/:userId/payment/:id", authenticated, readPaymentById);
router.get("/user/:id", authenticated, readUser);
router.delete("/user/:id", authenticated, deleteUser);
router.patch("/user/:id", upload.single("image"), authenticated, updateUser);

module.exports = router;
