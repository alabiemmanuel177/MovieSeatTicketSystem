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
    <Link to={`/description?id=${movie._id}`}>
      <div className="movieCard">
        {movie.cover.map((p) => (
          <MovieImage photo={p} />
        ))}
        <div className="movieText">
          <p>{movie.title}</p>
          <p>{movie.year}</p>
        </div>
      </div>
    </Link>

  )
}
const MovieImage = ({ photo }) => {
  return (
    <div className="movieImage"><img src={photo.url} alt="" className="movieCover" /></div>


  )
}

export default Welcome
