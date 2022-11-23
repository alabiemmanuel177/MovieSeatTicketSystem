const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const ticketRoute = require("./routes/ticket");
const movieRoute = require("./routes/movie");
const bodyParser = require("body-parser");
const cloudinary = require("./utils/cloudinary");
const fs = require("fs");
const upload = require("./utils/multer");


dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 7881;

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/ticket", ticketRoute);
app.use("/api/movie", movieRoute);

app.use(
  "/api/upload-images",
  cors(),
  upload.array("image", 10),
  async (req, res) => {
    console.log("Uploading");

    const uploader = async (path) => await cloudinary.uploads(path, "OpenSource");

    if (req.method === "POST") {
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        newPath["fileName"] = file.originalname;
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      res.status(200).json({
        message: "image upload successfully",
        data: urls,
      });
    } else {
      res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  }
);

app.get("/", (req, res) => {
  res.send("Reached Endpoint");
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});
