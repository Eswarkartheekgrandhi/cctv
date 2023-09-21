import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import FeedIcon from "@mui/icons-material/Feed";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";

function Navigation() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidenav">
      <h2 className="headName">CCTV</h2>
      <div className="sidenav__buttons">
        <Link to="/videos">
          <button
            className={`sidenav__button ${
              activeItem === "videos" ? "active" : ""
            }`}
            onClick={() => handleItemClick("videos")}
          >
            <FeedIcon />
            <span className="navname">Live feed</span>
          </button>
        </Link>
        <Link to="/blank">
          <button
            className={`sidenav__button ${
              activeItem === "blank" ? "active" : ""
            }`}
            onClick={() => handleItemClick("blank")}
          >
            <MusicVideoIcon />
            <span className="navname">Recordings</span>
          </button>
        </Link>
        <Link to="/blank1">
          <button
            className={`sidenav__button ${
              activeItem === "blank1" ? "active" : ""
            }`}
            onClick={() => handleItemClick("blank1")}
          >
            <FeedIcon />
            <span className="navname">Item 3</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
