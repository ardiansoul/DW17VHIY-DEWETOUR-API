const multer = require("multer");

exports.upload = (image) => {
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
    if (!file.originalname.match("/.(jpg|JPG|jpeg|png|PNG|gif|GIF)$/")) {
      req.fileValidationError = {
        message: "Only image files are allowed!",
      };

      return cb(new Error("Only image file are allowed!"), false);
    }
    cb(null, true);
  };

  return function (req, res, next) {
    upload = multer({
      storage: storage,
      fileFilter: imageFilter,
      limits: {
        fileSize: 2 * 1000 * 1000,
      },
    }).single(image);
    next();
  };
};
