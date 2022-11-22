import { React } from "react";
import { AdminSidebar } from "./Components/Admin Components/AdminSidebar";
import "./Classroom.css";
import { MoviesTable } from "./Components/Admin Components/MoviesTable.jsx";
import { TicketsTable } from "./Components/Admin Components/TicketsTable.jsx";
import axios from "axios";
import config from "../config";
import { useState, useEffect } from "react";

export const Admin = ({user}) => {
  const [active, setActive] = useState("movie");
  const [movies, setMovies] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${config.baseURL}/api/movie`);
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await axios.get(`${config.baseURL}/api/ticket`);
      setTickets(res.data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="Classroom">
      <div className="classroom_sidebar_container">
        <AdminSidebar active={active} setActive={setActive} user={user} />
      </div>
      {active === "movie" && <MoviesTable movies={movies} />}
      {active === "ticket" && <TicketsTable tickets={tickets} />}
    </div>
  );
};
