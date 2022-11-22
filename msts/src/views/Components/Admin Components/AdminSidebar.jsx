import React from "react";
import "./admin_sidebar.css";
import { BiMoviePlay } from "react-icons/bi";
import { FaTicketAlt } from "react-icons/fa";
import { Context } from "../../../Context/Context";
import { useContext } from "react";


export const AdminSidebar = ({ active, setActive }) => {
  var btnContainer = document.getElementById("sidebar_button");
  if (btnContainer !== null) {
    var btns = btnContainer.getElementsByClassName("sidebarbtn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="classroom_sidebar">
      <h1 className="sidebar_head">BU CINEMA</h1>
      <button className="logout-btn" onClick={handleLogout}>
        {user && "Log Out"}
      </button>
      <div className="sidebar_button" id="sidebar_button">
        <btn
          className="sidebarbtn blue active"
          onClick={() => setActive("movie")}
        >
          <BiMoviePlay className="icon" />
          Movies
        </btn>
        <btn
          className="sidebarbtn blue"
          onClick={() => setActive("ticket")}
        >
          <FaTicketAlt className="icon" />
          Tickets
        </btn>
      </div>
    </div>
  );
};
