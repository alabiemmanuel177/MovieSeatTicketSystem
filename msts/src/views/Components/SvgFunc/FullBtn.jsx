import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import "./fullbtn.css";
import Popup1 from "../Popup/Popup1";
import Popup2 from "../Popup/Popup2";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import config from "../../../config";

function FullBtn({ path }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, sBtn] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [likes, setLikes] = useState("");
  const [critics, setCritics] = useState("");
  const [imdb, setImdb] = useState("");
  const [trailerlink, setTrailerlink] = useState("");
  const [year, setYear] = useState("");
  const [plotsummary, setPlotsummary] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [duration, setDuration] = useState("");
  const [dateofair, setDateofair] = useState("");
  const [timeofair, setTimeofair] = useState("");
  const [cinemalocation, setCinemalocation] = useState("");
  const [pgrating, setPgrating] = useState("");
  const [dimension, setDimension] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(`${config.baseURL}/api/movie/${path}`);
      setMovie(res.data);
      setTitle(res.data.title);
      setGenre(res.data.genre);
      setLikes(res.data.likes);
      setCritics(res.data.critics);
      setImdb(res.data.imdb);
      setTrailerlink(res.data.trailerlink);
      setYear(res.data.year);
      setPlotsummary(res.data.plotsummary);
      setDirector(res.data.director);
      setCast(res.data.cast);
      setDuration(res.data.duration);
      setDateofair(res.data.dateofair);
      setTimeofair(res.data.timeofair);
      setCinemalocation(res.data.cinemalocation);
      setPgrating(res.data.pgrating);
      setDimension(res.data.dimension);

    };
    getMovie();
  }, [path]);


  const handleDelete = async () => {
    try {
      await axios.delete(`${config.baseURL}/api/posts/${path}`);
      window.location.replace("/admin");
    } catch (err) { }
  };
  const handleUpdate = async () => {
    try {
      axios.put(`${config.baseURL}/api/movie/${path}`, {
        title,
        genre,
        likes,
        critics,
        imdb,
        trailerlink,
        year,
        plotsummary,
        director,
        cast,
        duration,
        dateofair,
        timeofair,
        cinemalocation,
        pgrating,
        dimension
      });
      window.location.reload();
    } catch (err) { }
  };
  return (
    <div>
      <div className="fullbtn">
        <button
          onClick={() => {
            setButtonPopup(true);
            setUpdateMode(true);
          }}
          className="spc"
        >
          <Svg1></Svg1>
        </button>
        <Popup1 trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form className="edit-popup">
            <h2>Edit Movie Info</h2>
            <div className="form-row">
              <div className="form-group form-edit">
                <div className="flex01">
                  <div>
                    <label>Movie Title</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit title"
                        id="inputAddress"
                        placeholder="Movie Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit title"
                        id="inputAddress"
                        placeholder="Movie Title"
                      />

                    )}

                  </div>
                  <div>
                    <label>Year</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Year"
                      />
                    )}
                  </div>
                  <div>
                    <label>Genre</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit"
                        id="inputAddress"
                        placeholder="Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit"
                        id="inputAddress"
                        placeholder="Genre"
                      />

                    )}
                  </div>
                </div>

                <div className="flex01">
                  <div>
                    <label>Likes</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Likes"
                        value={likes}
                        onChange={(e) => setLikes(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Likes"
                      />

                    )}
                  </div>
                  <div>
                    <label>Critics</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Critics"
                        value={critics}
                        onChange={(e) => setCritics(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Critics"
                      />

                    )}
                  </div>
                  <div>
                    <label>IMDB</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="IMDB"
                        value={imdb}
                        onChange={(e) => setImdb(e.target.value)}
                      />) : (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="IMDB"
                      />
                    )}
                  </div>
                  <div>
                    <label>Duration</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit year"
                        id="inputAddress"
                        placeholder="Duration" />
                    )}
                  </div>
                </div>
                <div className="flex01">
                  <div>
                    <label>Trailer Link</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit trailerlink"
                        id="inputAddress"
                        placeholder="Post Header"
                        value={trailerlink}
                        onChange={(e) => setTrailerlink(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit trailerlink"
                        id="inputAddress"
                        placeholder="Post Header"
                      />

                    )}
                  </div>
                  <div>
                    <label>PG rating</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit cl"
                        id="inputAddress"
                        placeholder="16"
                        value={pgrating}
                        onChange={(e) => setPgrating(e.target.value)}
                      />
                    ) : (
                      <input
                        type="text"
                        className="form-control input-edit cl"
                        id="inputAddress"
                        placeholder="16"
                      />

                    )}
                  </div>
                  <div>
                    <label>Cinema Location</label>
                    {updateMode ? (
                      <input
                        type="text"
                        className="form-control input-edit cl"
                        id="inputAddress"
                        placeholder="A"
                        value={cinemalocation}
                        onChange={(e) => setCinemalocation(e.target.value)}
                      />) : (
                      <input
                        type="text"
                        className="form-control input-edit cl"
                        id="inputAddress"
                        placeholder="A"
                      />

                    )}
                  </div>
                </div>


              </div>
              <div className="flex01">
                <div>
                  <label>Director</label>
                  {updateMode ? (
                    <input
                      type="text"
                      className="form-control input-edit title"
                      id="inputAddress"
                      placeholder="Director"
                      value={director}
                      onChange={(e) => setDirector(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control input-edit title"
                      id="inputAddress"
                      placeholder="Director"
                    />
                  )}

                </div>
                <div>
                  <label>Cast</label>
                  {updateMode ? (
                    <input
                      type="text"
                      className="form-control input-edit title"
                      id="inputAddress"
                      placeholder="Cast"
                      value={cast}
                      onChange={(e) => setCast(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control input-edit title"
                      id="inputAddress"
                      placeholder="Cast"
                    />
                  )}
                </div>
                <div>
                  <label>Date of Air</label>
                  {updateMode ? (
                    <input
                      type="text"
                      className="form-control input-edit year"
                      id="inputAddress"
                      placeholder="Date of Air"
                      value={dateofair}
                      onChange={(e) => setDateofair(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control input-edit year"
                      id="inputAddress"
                      placeholder="Date of Air"
                    />
                  )}
                </div>
              </div>
              <div className="flex01">
                <div>
                  <label>Time of Air</label>
                  {updateMode ? (
                    <input
                      type="text"
                      className="form-control input-edit year"
                      id="inputAddress"
                      placeholder="Time of air"
                      value={timeofair}
                      onChange={(e) => setTimeofair(e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control input-edit year"
                      id="inputAddress"
                      placeholder="Time of air"
                    />
                  )}
                </div>
                <div>
                  <label>Dimension</label>
                  {updateMode ? (
                    <input
                      type="text"
                      className="form-control input-edit year"
                      id="inputAddress"
                      placeholder="2D"
                      value={dimension}
                      onChange={(e) => setDimension(e.target.value)}
                    />) : (
                    <input
                      type="text"
                      className="form-control input-edit year"
                      id="inputAddress"
                      placeholder="2D"
                    />

                  )}
                </div>
              </div>
              <div>
                <label>Plot Summary</label>
                {updateMode ? (
                  <textarea
                    className="textarea"
                    id="exampleFormControlTextarea1"
                    value={plotsummary}
                    onChange={(e) => setPlotsummary(e.target.value)}
                  />
                ) : (
                  <textarea
                    className="textarea"
                    id="exampleFormControlTextarea1"
                  />

                )}
              </div>

            </div>


            <button
              type="submit"
              className="btn btn-primary save-btn"
              onClick={handleUpdate}
            >
              Save
            </button>
          </form>
        </Popup1>
        <button
          onClick={() => {
            sBtn(true);
          }}
          className="spc2"
        >
          <Svg2></Svg2>
        </button>
        <Popup2 trigger={buttonPopup1} setTrigger={sBtn}>
          <h3>Are you sure you want to delete this Post</h3>
          <button type="submit" className="btn del-btn" onClick={handleDelete}>
            Delete
          </button>
        </Popup2>
      </div>
    </div>
  );
}

export default FullBtn;
