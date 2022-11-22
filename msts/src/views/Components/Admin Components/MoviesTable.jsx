import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

import "../styles.css"

export const MoviesTable = ({ movies }) => {

  return (
    <>
      <div className="patient-table">
        <React.Fragment>
          <h3>Details</h3>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell className="tablecell">Title</TableCell>
                <TableCell className="tablecell">Genre</TableCell>
                <TableCell className="tablecell">Likes</TableCell>
                <TableCell className="tablecell">Critics</TableCell>
                <TableCell className="tablecell">Imdb</TableCell>
                <TableCell className="tablecell">Trailer</TableCell>
                <TableCell className="tablecell">Year</TableCell>
                <TableCell className="tablecell" id="plot">Plot</TableCell>
                <TableCell className="tablecell">Director</TableCell>
                <TableCell className="tablecell">Cast</TableCell>
                <TableCell className="tablecell">Duration</TableCell>
                <TableCell className="tablecell">Time oF Air</TableCell>
                <TableCell className="tablecell">Date of Air</TableCell>
                <TableCell className="tablecell">Cinema</TableCell>
                <TableCell className="tablecell">PG rating</TableCell>
                <TableCell className="tablecell">Dimesion</TableCell>
              </TableRow>
            </TableHead>
            {movies.map((p) => (
              <MovieT movie={p} />
            ))}
          </Table>
        </React.Fragment>
      </div>
    </>
  );
};

const MovieT = ({ movie }) => {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="tablecell">{movie.title}</TableCell>
          <TableCell className="tablecell">{movie.genre}</TableCell>
          <TableCell className="tablecell">{movie.likes}</TableCell>
          <TableCell className="tablecell">{movie.critics}</TableCell>
          <TableCell className="tablecell">{movie.imdb}</TableCell>
          <TableCell className="tablecell">{movie.trailerlink}</TableCell>
          <TableCell className="tablecell">{movie.year}</TableCell>
          <div className="plot"><TableCell className="tablecell">{movie.plotsummary}</TableCell></div>
          <TableCell className="tablecell">{movie.director}</TableCell>
          <TableCell className="tablecell">{movie.cast}</TableCell>
          <TableCell className="tablecell">{movie.duration}</TableCell>
          <TableCell className="tablecell">{movie.timeofair}</TableCell>
          <TableCell className="tablecell">{movie.dateofair}</TableCell>
          <TableCell className="tablecell">{movie.cinemalocation}</TableCell>
          <TableCell className="tablecell">{movie.pgrating}</TableCell>
          <TableCell className="tablecell">{movie.dimension}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};
