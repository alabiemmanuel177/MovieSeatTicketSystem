import React from 'react'
import '../styles.css'
import { AiOutlineLike } from 'react-icons/ai';
import { GrStatusCritical } from 'react-icons/gr';
import { FcPodiumWithAudience } from 'react-icons/fc';
import { FaImdb } from 'react-icons/fa';
import { TechSpaceTable } from './TechSpecTable';

const Details = () => {
    return (
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
                    <h1>Black Adam</h1>
                    <h4>2022</h4>
                    <h4>Action / Adventure / Fantasy / Sci-Fi</h4>
                    <div className="reviews">
                        <div className="likeReview re">
                            <div className="icon"><AiOutlineLike className='likeIcon' /></div>
                            <h4>143</h4>
                        </div>
                        <div className="criticReview re">
                            <div className="icon"><GrStatusCritical className='likeIcon' /></div>
                            <h4>40% - Critics</h4>
                        </div>
                        <div className="audienceReview re">
                            <div className="icon"><FcPodiumWithAudience className='likeIcon' /></div>
                            <h4> 89% - Audience</h4>
                        </div>
                        <div className="imdbReview re">
                            <div className="icon"><FaImdb className='likeIcon' /></div>
                            <h4>7.0 </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="summary">
                <div className="Trailer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mkomfZHG5q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='summaryDets'>
                    <div className="plotSummary">
                        <h3>Plot Summary</h3>
                        <hr />
                        <h5>Reawakening after 5000 years, Black Adam becomes the world's ruthless protector: an anti-villain to take on the likes of Superman and Wonder Woman. Now in the 21st-Century, Black Adam must face off against the Justice Society of America and it's heroes: Doctor Fate, Hawkman, Atom Smasher and Cyclone. The fate of the world hangs in the balance.</h5>
                    </div>
                    <div className="directorCast">
                        <div className="director">
                            <h4>Director</h4>
                            <hr />
                            <div>
                                <h5>Jaume Collet-Serra</h5>
                                <hr />
                            </div>

                        </div>
                        <div className="cast">
                            <h4>Cast</h4>
                            <hr />
                            <div>
                                <h5>Henry Cavil</h5>
                                <hr />
                            </div>
                            <div>
                                <h5>Henry Cavil</h5>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="techSpace">
                    <TechSpaceTable />
                </div>
            </div>
        </div>
    )
}

export default Details