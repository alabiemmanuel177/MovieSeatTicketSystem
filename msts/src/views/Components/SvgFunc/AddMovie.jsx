import React from "react";
import Popup4 from "../Popup/Popup4";
import { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import axios from "axios";
import config from "../../../config";
import "./fullbtn.css";

const Add = () => {
    const [appPhotos, setPhotos] = useState(null);
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
    const [error, setError] = useState(false);
    const [multipleFiles, setMultipleFiles] = useState([]);

    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
    };

    const UploadMultipleFiles = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let file of multipleFiles) {
            formData.append("image", file);
        }
        try {
            const res = await axios.post(
                `${config.baseURL}/api/upload-images`,
                formData
            );
            const { data } = res.data;
            setPhotos(data);
        } catch (err) {
            console.log(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            if (!appPhotos) {
                throw new Error("Upload photo");
            }
            const res = await axios.post(`${config.baseURL}/api/movie`, {
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
                dimension,
                cover: appPhotos,
            });
            res.data && window.location.reload();
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    const [buttonPopup3, sBtn3] = useState(false);
    return (
        <div className="add-btn">
            <button onClick={() => sBtn3(true)} className="spc">
                <AiOutlineVideoCameraAdd />
            </button>
            <Popup4 trigger={buttonPopup3} setTrigger={sBtn3}>
                <form>
                    <h2>Add Posts</h2>
                    <div className="form-row">
                        <div className="form-group form-edit">
                            <div className="flex01"><div>
                                <label>Movie Title</label>
                                <input
                                    type="text"
                                    className="form-control input-edit title"
                                    id="inputAddress"
                                    placeholder="Movie Title"
                                    onChange={(e) => setTitle(e.target.value)}
                                /></div>
                                <div>
                                    <label>Year</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit year"
                                        id="inputAddress"
                                        placeholder="Year"
                                        onChange={(e) => setYear(e.target.value)}
                                    /></div>
                                <div>
                                    <label>Genre</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit"
                                        id="inputAddress"
                                        placeholder="Genre"
                                        onChange={(e) => setGenre(e.target.value)}
                                    /></div>
                            </div>

                            <div className="flex01">
                                <div>
                                    <label>Likes</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit year"
                                        id="inputAddress"
                                        placeholder="Likes"
                                        onChange={(e) => setLikes(e.target.value)}
                                    /></div>
                                <div>
                                    <label>Critics</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit year"
                                        id="inputAddress"
                                        placeholder="Critics"
                                        onChange={(e) => setCritics(e.target.value)}
                                    /></div>
                                <div>
                                    <label>IMDB</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit year"
                                        id="inputAddress"
                                        placeholder="IMDB"
                                        onChange={(e) => setImdb(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Duration</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit year"
                                        id="inputAddress"
                                        placeholder="Duration"
                                        onChange={(e) => setDuration(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex01">
                                <div>
                                    <label>Trailer Link</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit trailerlink"
                                        id="inputAddress"
                                        placeholder="Post Header"
                                        onChange={(e) => setTrailerlink(e.target.value)}
                                    /></div>
                                <div>
                                    <label>PG rating</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit cl"
                                        id="inputAddress"
                                        placeholder="16"
                                        onChange={(e) => setPgrating(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Cinema Location</label>
                                    <input
                                        type="text"
                                        className="form-control input-edit cl"
                                        id="inputAddress"
                                        placeholder="A"
                                        onChange={(e) => setCinemalocation(e.target.value)}
                                    />
                                </div>
                            </div>


                        </div>
                        <div className="flex01">
                            <div>
                                <label>Director</label>
                                <input
                                    type="text"
                                    className="form-control input-edit title"
                                    id="inputAddress"
                                    placeholder="Director"
                                    onChange={(e) => setDirector(e.target.value)}
                                /></div>
                            <div>
                                <label>Cast</label>
                                <input
                                    type="text"
                                    className="form-control input-edit title"
                                    id="inputAddress"
                                    placeholder="Cast"
                                    onChange={(e) => setCast(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Date of Air</label>
                                <input
                                    type="text"
                                    className="form-control input-edit year"
                                    id="inputAddress"
                                    placeholder="Date of Air"
                                    onChange={(e) => setDateofair(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex01">
                            <div>
                                <label>Time of Air</label>
                                <input
                                    type="text"
                                    className="form-control input-edit year"
                                    id="inputAddress"
                                    placeholder="Time of air"
                                    onChange={(e) => setTimeofair(e.target.value)}
                                /></div>
                            <div>
                                <label>Dimension</label>
                                <input
                                    type="text"
                                    className="form-control input-edit year"
                                    id="inputAddress"
                                    placeholder="2D"
                                    onChange={(e) => setDimension(e.target.value)}
                                /></div>
                        </div>
                        <div>
                            <label>Plot Summary</label>
                            <textarea
                                className="textarea"
                                id="exampleFormControlTextarea1"
                                onChange={(e) => setPlotsummary(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="ddd">
                        <form>
                            <div className="form-group multi-preview "></div>

                            <div className="form-group mt-4 upload_btn2">
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) => MultipleFileChange(e)}
                                    multiple
                                />
                            </div>
                        </form>
                        <div>
                            <button
                                type="submit"
                                className="btn btn-danger btn-block mt-4 upload_btn"
                                onClick={(e) => UploadMultipleFiles(e)}
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary save-btn"
                    >
                        Save
                    </button>
                </form>
            </Popup4>
        </div>
    );
};

export default Add;
