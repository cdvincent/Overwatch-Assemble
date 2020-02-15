import React from "react";

const Nav = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Clicky Game</a>
        <h6>{props.message}</h6>
        <h6>Score: {props.score}</h6>
        <h6>High Score: {props.highScore}</h6>
      </nav>
    </div>
  );
}

export default Nav;
