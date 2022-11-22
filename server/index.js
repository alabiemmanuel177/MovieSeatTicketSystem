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

app.get("/", (req, res) => {
  res.send("Reached Endpoint");
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}.`);
});
