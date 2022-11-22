const mongoose = require("mongoose");
const Movie = require("./Movie");

const TicketSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Movie,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneno: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
      unique: true,
    },
    seats: {
      type: String,
      // unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);
