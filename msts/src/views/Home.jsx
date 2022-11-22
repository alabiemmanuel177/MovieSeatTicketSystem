import React from 'react'
import Welcome from './Components/Home Components/Welcome'
import Navbar from './Components/NavandFoot Components/Navbar'
import MovieList from './Components/Home Components/MovieList'
import { Footer } from './Components/NavandFoot Components/Footer'
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${config.baseURL}/api/movie`);
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <Welcome movies={movies}/>
      {/* <MovieList /> */}
      <Footer />
    </div>
  )
}

