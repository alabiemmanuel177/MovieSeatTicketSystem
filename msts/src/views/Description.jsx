import React from 'react'
import Details from './Components/Description Components/Details'
import { Footer } from './Components/NavandFoot Components/Footer'
import Navbar from './Components/NavandFoot Components/Navbar'
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export const Description = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`${config.baseURL}/api/movie/${id}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, []);

  return (

    <div className='Description'>
      <Navbar />
      <Details movie={movie} />
      <Footer />
    </div>
  )
}

