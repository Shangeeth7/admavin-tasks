import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="homee">
      <h2>AdMAVIN Tasks :</h2>
      <br />
      <div>
        <Link to="/bucket-1&2">Problem 1 - Element Transfer</Link>
        <br />
        <Link to="nested-list-component">
          Problem 2 - Nested List component
        </Link>
        <br />
        <Link to="/infinite-scrolls">Problem 3 - Infinite scroll</Link>
        <br />
        <Link to="/nine-box">
          Problem 4 - Game (Points will be awarded if clicked on the right box)
          <br />
        </Link>
        <Link to="/square-boxes">Problem 5 - Box split</Link>
      </div>
    </div>
  );
}

export default Home;
