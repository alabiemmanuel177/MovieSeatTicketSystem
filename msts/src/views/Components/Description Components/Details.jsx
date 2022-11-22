import React from 'react'
import '../styles.css'
import { AiOutlineLike } from 'react-icons/ai';
import { GrStatusCritical } from 'react-icons/gr';
import { FcPodiumWithAudience } from 'react-icons/fc';
import { FaImdb } from 'react-icons/fa';
import { TechSpaceTable } from './TechSpecTable';

const Details = ({ movie }) => {
    console.log(movie.trailerlink);
    return (
        <div>
            <div className='Details'>
                <div className="Dets">
                    <div className="MovieImage">
                        <div className="movieImage">
                            <img src="https://img.yts.mx/assets/images/movies/black_adam_2022/medium-cover.jpg" alt="" className="movieCover" />
                        </div>
                        <div className="">
                            <button className='getTicket-btn'>Get Ticket</button>
                        </div>
                    </div>
                    <div className="movieDetails">
                        <h1>{movie.title}</h1>
                        <h4>{movie.year}</h4>
                        <h4>{movie.genre}</h4>
                        <div className="reviews">
                            <div className="likeReview re">
                                <div className="icon"><AiOutlineLike className='likeIcon' /></div>
                                <h4>{movie.likes}</h4>
                            </div>
                            <div className="criticReview re">
                                <div className="icon"><GrStatusCritical className='likeIcon' /></div>
                                <h4>{movie.critics}</h4>
                            </div>
                            <div className="imdbReview re">
                                <div className="icon"><FaImdb className='likeIcon' /></div>
                                <h4>{movie.imdb}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <div className="Trailer">
                        <iframe width="560" height="315" src={movie.trailerlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='summaryDets'>
                        <div className="plotSummary">
                            <h3>Plot Summary</h3>
                            <hr />
                            <h5>{movie.plotsummary}</h5>
                        </div>
                        <div className="directorCast">
                            <div className="director">
                                <h4>Director</h4>
                                <hr />
                                <div>
                                    <h5>{movie.director}</h5>
                                    <hr />
                                </div>

                            </div>
                            <div className="cast">
                                <h4>Cast</h4>
                                <hr />
                                <div>
                                    <h5>{movie.cast}</h5>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="techSpace">
                        <TechSpaceTable movie={movie} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details