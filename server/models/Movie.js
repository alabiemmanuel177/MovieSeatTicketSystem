const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
  url: {
    type: String,
  },
  fileName: {
    type: String,
  },
  imageId: {
    type: String,
  }
})

const RecordSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    cover: {
      type: [photoSchema],
    },
    genre: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
      required: true,
    },
    critics: {
      type: String,
      required: true,
    },
    imdb: {
      type: String,
      required: true,
    },
    trailerlink: {
      type: String,
      required: true,
      unique: true,
    },
    year: {
      type: String,
    },
    plotsummary: {
      type: String,
      unique: true,
    },
    director: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
    },
    dateofair: {
      type: String,
    },
    timeofair: {
      type: String,
    },
    cinemalocation: {
      type: String,
      required: true,
    },
    pgrating: {
      type: String,
      required: true,
    },
    dimension: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", RecordSchema);
