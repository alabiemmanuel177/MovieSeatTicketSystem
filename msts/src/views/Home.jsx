import React from 'react'
import Welcome from './Components/Home Components/Welcome'
import Navbar from './Components/NavandFoot Components/Navbar'
import MovieList from './Components/Home Components/MovieList'
import {Footer} from './Components/NavandFoot Components/Footer'

export const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Welcome />
      <MovieList />
      <Footer />
    </div>
  )
}

