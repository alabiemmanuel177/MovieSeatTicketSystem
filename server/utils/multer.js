const multer = require("multer");
const path = require("path");

const upload = multer({
  dest: "uploads",
  fileFilter(req, files, cb) {
    const extension = path.extname(files.originalname);
    const allowed = [".jpg", ".png", ".webp", ".jpeg"];
    if (!allowed.includes(extension)) {
      cb(new Error("Invalid file extension"), false);
    }
    cb(null, true);
  },
  limits: { fieldSize: 8 * 1024 * 1024 },
});

module.exports = upload;
