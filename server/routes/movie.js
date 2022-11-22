const router = require("express").Router();
const Movie = require("../models/Movie");

//CREATE MOVIE
router.post("/", async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    return res.status(200).json(savedMovie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE MOVIE
router.put("/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedMovie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE MOVIE
router.delete("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    await movie.delete();
    return res.status(200).json("Movie has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET MOVIE
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL MOVIE
router.get("/", async (req, res) => {
  try {
    let movies;
    movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//PATCH MOVIE
router.patch("/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
      $push: req.body,
    });
    return res.status(200).json(updatedMovie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
