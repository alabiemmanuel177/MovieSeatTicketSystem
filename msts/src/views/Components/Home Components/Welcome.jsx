import React from 'react'
import '../styles.css'
import { Link } from "react-router-dom";



const Welcome = ({ movies }) => {
  return (
    <div className='welcome'>
      <h1>Download YTS YIFY movies: HD smallest size</h1>
      <p>Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies<br /> in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents. </p>
      <p>IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</p>
      <h4>Today's Airings</h4>
      <hr className='hr-1' />
      <div className="airingToday">
        {movies.map((p) => (
          <MovieCard movie={p} />
        ))}

      </div>
    </div>
  )
}

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/description${movie._id}`}>
      <div className="movieCard">
        <div className="movieImage"><img src="https://img.yts.mx/assets/images/movies/black_adam_2022/medium-cover.jpg" alt="" className="movieCover" /></div>
        <div className="movieText">
          <p>{movie.title}</p>
          <p>{movie.year}</p>
        </div>
      </div>
    </Link>

  )
}

export default Welcome
